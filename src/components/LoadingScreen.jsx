import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as THREE from 'three';
import { Camera, Sparkles, Aperture, Activity } from 'lucide-react';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const [isWhiteout, setIsWhiteout] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Web Audio synthetic camera shutter click & flash pop sound
  const playShutterSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      // 1. Shutter mechanical click (burst of noise + low pop)
      const bufferSize = ctx.sampleRate * 0.08;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1200;
      filter.Q.value = 3;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.45, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();

      // 2. High flash recharge/strobe pop
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.12);
      oscGain.gain.setValueAtTime(0.3, ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.13);
    } catch (e) {
      // Audio context might be restricted before user gesture; gracefully skip
    }
  };

  // 1. Three.js 3D Camera Scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0.4, 4.4);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // Camera 3D Group
    const cameraRig = new THREE.Group();
    scene.add(cameraRig);

    // --- MATERIALS ---
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x18171c,
      roughness: 0.38,
      metalness: 0.65,
    });

    const gripMat = new THREE.MeshStandardMaterial({
      color: 0x0f0e12,
      roughness: 0.88,
      metalness: 0.1,
    });

    const metallicMat = new THREE.MeshStandardMaterial({
      color: 0x48424d,
      roughness: 0.25,
      metalness: 0.9,
    });

    const redAccentMat = new THREE.MeshStandardMaterial({
      color: 0xc84b31,
      roughness: 0.3,
      metalness: 0.7,
    });

    const lensBarrelMat = new THREE.MeshStandardMaterial({
      color: 0x141318,
      roughness: 0.3,
      metalness: 0.8,
    });

    const glassFrontMat = new THREE.MeshPhysicalMaterial({
      color: 0x152538,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.6,
      ior: 1.52,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    const innerLensElementMat = new THREE.MeshStandardMaterial({
      color: 0x0a1420,
      roughness: 0.2,
      metalness: 0.85,
    });

    const tallyLedMat = new THREE.MeshBasicMaterial({
      color: 0xff2211,
    });

    const flashBulbMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });

    // --- GEOMETRIES & MESHES ---

    // 1. Camera Body (Main Box with rounded top)
    const bodyGeo = new THREE.BoxGeometry(1.8, 1.15, 0.85);
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    cameraRig.add(bodyMesh);

    // 2. Right Hand Grip
    const gripGeo = new THREE.BoxGeometry(0.48, 1.1, 0.65);
    const gripMesh = new THREE.Mesh(gripGeo, gripMat);
    gripMesh.position.set(0.72, -0.02, 0.32);
    cameraRig.add(gripMesh);

    // Red cinema line on grip
    const redStripeGeo = new THREE.BoxGeometry(0.49, 0.04, 0.66);
    const redStripeMesh = new THREE.Mesh(redStripeGeo, redAccentMat);
    redStripeMesh.position.set(0.72, 0.36, 0.32);
    cameraRig.add(redStripeMesh);

    // 3. Top Viewfinder Prism / Pentaprism Peak
    const prismGeo = new THREE.CylinderGeometry(0.42, 0.52, 0.32, 4);
    const prismMesh = new THREE.Mesh(prismGeo, bodyMat);
    prismMesh.rotation.y = Math.PI / 4;
    prismMesh.position.set(-0.08, 0.72, 0);
    cameraRig.add(prismMesh);

    // Hot Shoe Mount on top of prism
    const hotshoeGeo = new THREE.BoxGeometry(0.28, 0.05, 0.3);
    const hotshoeMesh = new THREE.Mesh(hotshoeGeo, metallicMat);
    hotshoeMesh.position.set(-0.08, 0.9, 0);
    cameraRig.add(hotshoeMesh);

    // 4. Dials on top plate
    const dialGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.12, 24);
    const dial1 = new THREE.Mesh(dialGeo, metallicMat);
    dial1.position.set(0.65, 0.62, 0.1);
    cameraRig.add(dial1);

    const dial2 = new THREE.Mesh(dialGeo, metallicMat);
    dial2.position.set(-0.65, 0.62, 0.05);
    cameraRig.add(dial2);

    // Shutter Button
    const shutterBtnGeo = new THREE.CylinderGeometry(0.1, 0.11, 0.08, 20);
    const shutterBtn = new THREE.Mesh(shutterBtnGeo, redAccentMat);
    shutterBtn.position.set(0.72, 0.58, 0.45);
    cameraRig.add(shutterBtn);

    // 5. Cinema Lens Group
    const lensGroup = new THREE.Group();
    lensGroup.position.set(-0.08, -0.02, 0.42);

    // Lens Mount Collar
    const mountGeo = new THREE.CylinderGeometry(0.68, 0.72, 0.15, 32);
    const mountMesh = new THREE.Mesh(mountGeo, metallicMat);
    mountMesh.rotation.x = Math.PI / 2;
    mountMesh.position.z = 0.08;
    lensGroup.add(mountMesh);

    // Red cine ring
    const cineRingGeo = new THREE.CylinderGeometry(0.66, 0.66, 0.04, 32);
    const cineRing = new THREE.Mesh(cineRingGeo, redAccentMat);
    cineRing.rotation.x = Math.PI / 2;
    cineRing.position.z = 0.18;
    lensGroup.add(cineRing);

    // Main Lens Barrel Body
    const barrelGeo = new THREE.CylinderGeometry(0.64, 0.64, 0.7, 32);
    const barrelMesh = new THREE.Mesh(barrelGeo, lensBarrelMat);
    barrelMesh.rotation.x = Math.PI / 2;
    barrelMesh.position.z = 0.52;
    lensGroup.add(barrelMesh);

    // Focus & Zoom Ribbed Rings
    const ringGeo1 = new THREE.CylinderGeometry(0.655, 0.655, 0.22, 32);
    const ring1 = new THREE.Mesh(ringGeo1, gripMat);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.z = 0.42;
    lensGroup.add(ring1);

    const ringGeo2 = new THREE.CylinderGeometry(0.655, 0.655, 0.18, 32);
    const ring2 = new THREE.Mesh(ringGeo2, gripMat);
    ring2.rotation.x = Math.PI / 2;
    ring2.position.z = 0.72;
    lensGroup.add(ring2);

    // Front Filter Thread Rim
    const rimGeo = new THREE.CylinderGeometry(0.68, 0.65, 0.15, 32);
    const rimMesh = new THREE.Mesh(rimGeo, metallicMat);
    rimMesh.rotation.x = Math.PI / 2;
    rimMesh.position.z = 0.94;
    lensGroup.add(rimMesh);

    // Inner Glass Optical Element (Curved)
    const glassGeo = new THREE.SphereGeometry(0.55, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.35);
    const glassMesh = new THREE.Mesh(glassGeo, glassFrontMat);
    glassMesh.rotation.x = Math.PI;
    glassMesh.position.z = 0.98;
    lensGroup.add(glassMesh);

    // Aperture internal chamber
    const apertureGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.05, 8);
    const apertureMesh = new THREE.Mesh(apertureGeo, innerLensElementMat);
    apertureMesh.rotation.x = Math.PI / 2;
    apertureMesh.position.z = 0.65;
    lensGroup.add(apertureMesh);

    cameraRig.add(lensGroup);

    // 6. Red Recording Tally Lamps (Front Corners)
    const tallyGeo = new THREE.SphereGeometry(0.055, 16, 16);
    const tallyLedMat2 = new THREE.MeshBasicMaterial({ color: 0xff2211 });

    // Left Front Corner: Recording Tally Lamp
    const tallyMesh = new THREE.Mesh(tallyGeo, tallyLedMat);
    tallyMesh.position.set(-0.68, 0.4, 0.44);
    cameraRig.add(tallyMesh);

    // Right Front Corner: Second Red Status LED
    const tallyMeshRight = new THREE.Mesh(tallyGeo, tallyLedMat2);
    tallyMeshRight.position.set(0.68, 0.4, 0.44);
    cameraRig.add(tallyMeshRight);

    // Front-facing red glow lights from both front corners
    const tallyGlowLeft = new THREE.PointLight(0xff2211, 1.6, 3.2);
    tallyGlowLeft.position.set(-0.68, 0.4, 0.75);
    cameraRig.add(tallyGlowLeft);

    const tallyGlowRight = new THREE.PointLight(0xff2211, 1.6, 3.2);
    tallyGlowRight.position.set(0.68, 0.4, 0.75);
    cameraRig.add(tallyGlowRight);

    // Flash Strobe Bulb Window (Front Upper Corner)
    const flashWindowGeo = new THREE.BoxGeometry(0.22, 0.14, 0.05);
    const flashWindowMesh = new THREE.Mesh(flashWindowGeo, flashBulbMat);
    flashWindowMesh.position.set(0.62, 0.38, 0.44);
    cameraRig.add(flashWindowMesh);

    // 7. Dynamic Shutter Flash Light (Point light for strobe burst)
    const flashLight = new THREE.PointLight(0xffffff, 0, 15);
    flashLight.position.set(0, 0, 1.8);
    scene.add(flashLight);

    // --- LIGHTS ---
    const ambientLight = new THREE.AmbientLight(0xfff6ee, 0.7);
    scene.add(ambientLight);

    // Key Light (Warm soft studio)
    const keyLight = new THREE.DirectionalLight(0xffeae0, 2.4);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);

    // Fill Light (Cool cinema rim)
    const fillLight = new THREE.DirectionalLight(0x4060ff, 1.2);
    fillLight.position.set(-4, -1, 3);
    scene.add(fillLight);

    // Rim/Backlight (Dramatic Red Cine Glow from behind)
    const rimLight = new THREE.DirectionalLight(0xc84b31, 3.5);
    rimLight.position.set(0, 2, -3);
    scene.add(rimLight);

    // Bottom Ambient bounce
    const bottomLight = new THREE.PointLight(0x7a1c14, 2, 8);
    bottomLight.position.set(0, -2, 1);
    scene.add(bottomLight);

    // LENS LIGHTING ///
    // Front fill light directed straight at the lens glass
    const lensFrontLight = new THREE.DirectionalLight(0xfff2e8, 2.6);
    lensFrontLight.position.set(0, 0, 3.2);
    scene.add(lensFrontLight);

    // Corner light hitting the lens at an angle for a crisp rim/highlight
    const lensCornerLight = new THREE.PointLight(0x9fd8ff, 4.5, 6);
    lensCornerLight.position.set(-1.6, 1.1, 2.2);
    scene.add(lensCornerLight);

    // Warm corner accent from the opposite side
    const lensWarmCornerLight = new THREE.PointLight(0xffaa66, 3.2, 6);
    lensWarmCornerLight.position.set(1.4, -0.9, 2.6);
    scene.add(lensWarmCornerLight);

    // Mouse tilt tracking
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current = {
        x: (e.clientX / innerWidth) * 2 - 1,
        y: -(e.clientY / innerHeight) * 2 + 1
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Responsive Canvas Resize
    const handleResize = () => {
      if (!canvas) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // --- RENDER LOOP ---
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth float and mouse follow (base slight rotation to the right)
      const targetRotY = 0.32 + mouseRef.current.x * 0.45 + Math.sin(elapsedTime * 1.2) * 0.08;
      const targetRotX = -mouseRef.current.y * 0.35 + Math.cos(elapsedTime * 0.9) * 0.06;
      
      cameraRig.rotation.y += (targetRotY - cameraRig.rotation.y) * 0.06;
      cameraRig.rotation.x += (targetRotX - cameraRig.rotation.x) * 0.06;
      cameraRig.position.y = Math.sin(elapsedTime * 1.8) * 0.06;

      // Focus ring gentle rotation during countdown
      ring1.rotation.z = elapsedTime * 0.6;
      ring2.rotation.z = -elapsedTime * 0.4;

      // Tally LED pulsation (both front corner lights, red glow intensity)
      const tallyPulse = (Math.sin(elapsedTime * 7) + 1) * 0.5;
      tallyLedMat.color.setRGB(1, 0.08 * tallyPulse, 0.04);
      tallyLedMat2.color.setRGB(1, 0.08 * tallyPulse, 0.04);
      tallyGlowLeft.intensity = 1.2 + tallyPulse * 1.4;
      tallyGlowRight.intensity = 1.2 + tallyPulse * 1.4;

      // Lens lighting: gentle shimmering of corner lights across the glass
      const lensShimmer = 0.75 + Math.sin(elapsedTime * 3.2) * 0.25;
      lensCornerLight.intensity = 3.6 + lensShimmer;
      lensWarmCornerLight.intensity = 2.6 + (0.75 + Math.sin(elapsedTime * 2.4 + 1.5) * 0.25);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // 2. Timer Counter & Shutter Trigger Logic (00 -> 99 -> Blink -> White Flash -> Hero)
  useEffect(() => {
    let currentVal = 0;
    const intervalTime = 26; // Smooth fast count to 99 in ~2.5s

    const timer = setInterval(() => {
      currentVal += 1;
      if (currentVal >= 99) {
        currentVal = 99;
        setProgress(99);
        clearInterval(timer);

        // TRIGGER CAMERA BLINK & FLASH SEQUENCE
        setTimeout(() => {
          // 1. Shutter blink trigger & sound
          setIsFlashing(true);
          playShutterSound();

          // 2. Whiteout screen blast
          setTimeout(() => {
            setIsWhiteout(true);

            // 3. Fade out the whole loading screen and transition to Hero
            setTimeout(() => {
              setIsFadingOut(true);

              // 4. Notify parent to unmount
              setTimeout(() => {
                onComplete();
              }, 600);

            }, 450);

          }, 180);

        }, 150);

      } else {
        setProgress(currentVal);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Format counter to always have 2 digits (e.g. 00, 07, 45, 99)
  const formattedProgress = progress < 10 ? `0${progress}` : `${progress}`;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#08070a] text-[#ded8ce] overflow-hidden select-none"
    >
      
      {/* 1. Cinematic Background Vignette & Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central Red Cine Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] md:w-[650px] h-[340px] sm:h-[520px] md:h-[650px] rounded-full bg-[#7a1c14]/25 blur-[90px] sm:blur-[130px] -z-10" />
        
        {/* Subtle grid framing */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Viewfinder Corner Framing Brackets */}
        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-[#ded8ce]/30" />
        <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-[#ded8ce]/30" />
        <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-[#ded8ce]/30" />
        <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-[#ded8ce]/30" />

        {/* Center Target Mark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-[#c84b31]/30 rounded-full flex items-center justify-center pointer-events-none">
          <div className="w-1 h-1 bg-[#c84b31] rounded-full" />
        </div>
      </div>

      {/* 2. Top Viewfinder Telemetry Bar */}
      <div className="w-full max-w-6xl px-6 sm:px-10 pt-6 sm:pt-10 flex items-center justify-between z-20 text-xs sm:text-sm font-mono tracking-widest text-[#8e8780]">
        
        {/* REC & Tally Indicator */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e05a47]" />
          </span>
          <span className="font-bold text-white tracking-widest text-xs sm:text-sm">REC ● 4K 60FPS</span>
        </div>

        {/* Shutter / ISO / Lens telemetry */}
        <div className="hidden md:flex items-center gap-6 text-[#9a9287]">
          <span className="flex items-center gap-1.5">
            <Aperture className="w-3.5 h-3.5 text-[#c84b31]" /> f/1.4 CINE
          </span>
          <span>1/250 SEC</span>
          <span>ISO 800</span>
          <span>5600K RAW</span>
        </div>

        {/* Skip button for instant bypass */}
        <button
          onClick={() => {
            setIsWhiteout(true);
            setTimeout(() => {
              setIsFadingOut(true);
              setTimeout(onComplete, 400);
            }, 200);
          }}
          className="text-[11px] sm:text-xs text-[#ded8ce]/60 hover:text-white px-3 py-1 rounded-full border border-[#ded8ce]/15 hover:border-[#c84b31] transition-all"
        >
          SKIP INTRO →
        </button>
      </div>

      {/* 3. Center 3D Camera Canvas Stage */}
      <div className="relative w-full max-w-2xl h-[320px] sm:h-[400px] md:h-[460px] flex items-center justify-center z-10">
        
        {/* 3D Canvas */}
        <canvas 
          ref={canvasRef} 
          className="w-full h-full cursor-grab active:cursor-grabbing"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Camera Shutter Strobe Flare when hitting 99 */}
        <AnimatePresence>
          {isFlashing && (
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: [0.2, 2.5, 4], opacity: [0, 1, 0.9] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-white blur-xl shadow-[0_0_120px_#ffffff] pointer-events-none z-30"
            />
          )}
        </AnimatePresence>

      </div>

      {/* 4. Bottom Controls: Timer Counter & Progress Bar */}
      <div className="w-full max-w-md px-6 pb-8 sm:pb-12 flex flex-col items-center justify-center z-20 space-y-4">
        
        {/* Big Stylized Digital Shutter Timer (00 -> 99) */}
        <div className="flex flex-col items-center justify-center">
          
          <div className="flex items-baseline space-x-2">
            <span className="font-mono text-xs text-[#c84b31] tracking-widest font-semibold uppercase">
              FPS // CALIBRATING
            </span>
          </div>

          {/* Large Hero Numbers */}
          <div className="flex items-center justify-center font-bebas text-6xl sm:text-7xl md:text-8xl text-white tracking-widest leading-none drop-shadow-[0_0_25px_rgba(200,75,49,0.3)]">
            <span className="tabular-nums">{formattedProgress}</span>
            <span className="text-2xl sm:text-3xl text-[#c84b31] ml-1 font-serif font-light">/99</span>
          </div>

        </div>

        {/* Minimalist Cine Progress Bar */}
        <div className="w-full max-w-xs h-[3px] bg-[#221e28] rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#7a1c14] via-[#c84b31] to-[#e05a47] rounded-full shadow-[0_0_12px_#c84b31]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.05 }}
          />
        </div>

        {/* Subtitle status info */}
        <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#857e75] uppercase">
          <Activity className="w-3.5 h-3.5 text-[#c84b31] animate-pulse" />
          <span>{progress === 99 ? 'CAPTURING FRAME...' : 'INITIALIZING SENSOR & COLOR MATRIX'}</span>
        </div>

      </div>

      {/* 5. FULL SCREEN WHITE BLINDING FLASH OVERLAY (when timer reaches 99) */}
      <AnimatePresence>
        {isWhiteout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[150] bg-white pointer-events-none flex items-center justify-center"
          >
            {/* Ambient warm radial flash flare */}
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white/90 to-[#ffe8e0]/60" />
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};
