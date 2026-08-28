export const HERO_DATA = {
  headerTag: 'CREATIVE PORTFOLIO',
  statusTag: 'AVAILABLE FOR FREELANCE & SHOOTS',
  mainTitle: 'PORTFOLIO',
  leftTitle: 'PHOTO / VIDEO / CONTENT',
  leftSubtitles: ['PORTRAIT & EVENT PHOTOGRAPHY', 'CINEMATIC VIDEOGRAPHY', 'SOCIAL MEDIA CONTENT CREATOR'],
  quote: 'DEDICATED TO DELIVERING HIGH-QUALITY WORK WHILE BRINGING A UNIQUE ARTISTIC PERSPECTIVE TO EVERY FRAME.',
  name: 'BINEESH B M',
  role: 'FREELANCE PHOTOGRAPHER & CONTENT CREATOR',
  bio: "Creative and passionate photographer with a strong eye for detail, composition, lighting, and storytelling. Skilled in capturing authentic moments and creating visually compelling images across portraits, events, and creative projects.",
  stats: [
    { value: '4+', label: 'YEARS EXPERIENCE', icon: 'camera' },
    { value: '150+', label: 'SHOOTS & PROJECTS', icon: 'layers' },
    { value: '50+', label: 'HAPPY CLIENTS', icon: 'heart' }
  ]
};

export const SERVICES_DATA = [
  {
    id: 'portrait-photo',
    title: 'PORTRAIT & LIFESTYLE',
    description: 'Capturing authentic expressions, emotions, poses, and individuality with refined natural and studio lighting.',
    iconName: 'camera',
    isHighlighted: true
  },
  {
    id: 'event-photo',
    title: 'EVENT PHOTOGRAPHY',
    description: 'Capturing important moments, emotions, and atmosphere in a natural, candid, and timely manner.',
    iconName: 'sparkles'
  },
  {
    id: 'videography-reels',
    title: 'VIDEOGRAPHY & REELS',
    description: 'Producing cinematic video content, viral reels, promotional videos, and dynamic visual storytelling.',
    iconName: 'video'
  },
  {
    id: 'content-creation',
    title: 'CONTENT CREATION',
    description: 'Developing audience-focused visual content, creative concepts, and campaigns for brands and institutes.',
    iconName: 'layers'
  },
  {
    id: 'photo-editing',
    title: 'PHOTO EDITING & RETOUCH',
    description: 'Using Lightroom & Photoshop for precise colour correction, skin retouching, and image enhancement.',
    iconName: 'palette'
  }
];

export const PROCESS_DATA = [
  {
    number: '01',
    title: 'VISION & BRIEF',
    description: 'Understanding brand requirements, planning creative concepts, moodboards, and shot lists.',
    iconName: 'compass'
  },
  {
    number: '02',
    title: 'PLANNING & GEAR',
    description: 'Location scouting, lighting design (natural/artificial), camera settings (ISO, aperture, shutter), and framing.',
    iconName: 'file-text'
  },
  {
    number: '03',
    title: 'THE SHOOT',
    description: 'Creative direction, capturing authentic expressions, candid moments, and cinematic perspectives.',
    iconName: 'camera'
  },
  {
    number: '04',
    title: 'POST-PROCESSING',
    description: 'RAW development, color grading in Lightroom, high-end Photoshop retouching, and video pacing.',
    iconName: 'monitor'
  },
  {
    number: '05',
    title: 'FINAL DELIVERY',
    description: 'Delivering high-resolution exports, web-optimized galleries, and social media reels on time.',
    iconName: 'send'
  }
];

import { ASSETS } from '../assets/assets.js';

export const FEATURED_PROJECTS = [
  {
    id: 'kochi-golden-hour',
    title: 'FORT KOCHI GOLDEN HOUR',
    subtitle: 'PORTRAIT & CINEMATIC COLOR GRADE',
    category: 'PORTRAIT PHOTOGRAPHY & RETOUCHING',
    tagline: 'Natural Ambient Lighting & Warm Tone Grading in Lightroom',
    imageTheme: 'kochi-golden',
    imageUrl: ASSETS.kochiGoldenHour,
    instagramEmbed: 'https://www.instagram.com/p/DZlrf10Eqo_/?utm_source=ig_embed&utm_campaign=loading',
    fullDescription: 'A bespoke outdoor portrait photography series captured during golden hour across Fort Kochi. Utilized 35mm and 85mm prime lenses with natural rim lighting and reflector fill. Post-processed in Adobe Lightroom with custom tone curve adjustments, split toning for rich warm skin highlights and muted shadow contrasts, followed by micro-dodge & burn retouching in Photoshop.',
    client: 'Model Portfolio & Fashion Editorial',
    year: '2025',
    cameraGear: 'Sony Full-Frame + 35mm f/1.4 GM & 85mm f/1.8',
    editingSoftware: 'Adobe Lightroom Classic & Adobe Photoshop',
    colorPalette: ['#c97a4b', '#e2a472', '#2a2421', '#4e5b52'],
    beforeAfterDescription: 'RAW Flat Log capture transformed into rich warm cinematic editorial tones with balanced skin texture retention.',
    deliverables: ['High-Res 45MP Retouched Portraits', 'Custom Lightroom Presets / LUTs', 'Social Media 4:5 Carousel Crops', 'Master Print-Ready TIFF Files'],
    metrics: [
      { label: 'Frames Curated', value: '60+ RAW' },
      { label: 'Color Grade', value: 'Film Emulation' },
      { label: 'Client Rating', value: '5.0 ★★★★★' }
    ],
    tags: ['Portraiture', 'Lightroom Grading', 'Golden Hour']
  },
  {
    id: 'kerala-wedding-candid',
    title: 'KERALA TRADITIONAL WEDDING',
    subtitle: 'CANDID MOMENTS & EMOTIVE EDITING',
    category: 'EVENT & CANDID PHOTOGRAPHY',
    tagline: 'Documentary Storytelling, Raw Emotions & Low-Light Precision',
    imageTheme: 'wedding-candid',
    imageUrl: ASSETS.keralatraditionalwedding,
    instagramEmbed: 'https://www.instagram.com/p/DJO402RSE-x/?utm_source=ig_embed&amp;utm_campaign=loading',
    fullDescription: 'Complete candid photographic coverage of traditional Kerala wedding ceremonies and reception festivities. Navigated high-dynamic lighting conditions inside temple mandapams and grand banquet halls using dual-camera setups with fast f/1.4 primes. Post-production involved selective color calibration to accentuate rich silk silks and gold jewellery while preserving genuine expressions.',
    client: 'Private Wedding Commissions / Kochi & Thrissur',
    year: '2025',
    cameraGear: 'Dual Full-Frame Bodies + 24-70mm f/2.8 & 50mm f/1.2',
    editingSoftware: 'Adobe Lightroom & Frequency Separation Retouching',
    colorPalette: ['#d4af37', '#991b1b', '#1a181b', '#f5eee6'],
    beforeAfterDescription: 'Corrected harsh mixed ambient hall lighting into cohesive, warm, celebratory gold tones with softened highlights.',
    deliverables: ['500+ Curated & Edited Highlights', 'Same-Day Teaser Gallery (50 Photos)', 'Fine-Art Wedding Album Layout', 'Full-Resolution Cloud Archive'],
    metrics: [
      { label: 'Moments Captured', value: '1,500+' },
      { label: 'Turnaround Time', value: '48 Hours' },
      { label: 'Family Approval', value: '100%' }
    ],
    tags: ['Wedding', 'Candid Moments', 'Color Correction']
  },
  {
    id: 'studio-editorial-retouching',
    title: 'MONOCHROME & MOOD STUDIO',
    subtitle: 'STUDIO LIGHTING & HIGH-END RETOUCHING',
    category: 'STUDIO & BEAUTY RETOUCHING',
    tagline: 'Sculpted Studio Lighting & Frequency Separation Skin Work',
    imageTheme: 'studio-editorial',
    imageUrl: ASSETS.monochromeMoodStudio,
    instagramEmbed: 'https://www.instagram.com/p/DXmG5EREbiA/?utm_source=ig_embed&amp;utm_campaign=loading',
    fullDescription: 'High-concept studio portrait session focused on dramatic lighting setups (Key light with octabox, grid strip flags, and subtle rim kicker). In post-production, advanced Photoshop techniques were executed including 16-bit frequency separation, non-destructive dodge & burn, eye luminance enhancement, and monochromatic tonal grading with deep blacks and smooth gradient midtones.',
    client: 'Fashion Talent & Modeling Agency',
    year: '2024',
    cameraGear: 'Full-Frame 50MP + 90mm f/2.8 Macro & Godox Studio Strobes',
    editingSoftware: 'Adobe Photoshop & Capture One Pro',
    colorPalette: ['#111113', '#3a383d', '#9c9894', '#f1ece4'],
    beforeAfterDescription: 'Precision blemish removal while maintaining 100% natural pore texture and organic skin luminosity.',
    deliverables: ['8K Studio Master Deliveries', 'Frequency Separation Retouching', 'Monochrome & Dual-Tone Editions', 'Commercial License Rights'],
    metrics: [
      { label: 'Export Resolution', value: '8K / 300 DPI' },
      { label: 'Retouch Hours', value: '18+ Hrs' },
      { label: 'Print Exhibition', value: 'Featured' }
    ],
    tags: ['Studio Lighting', 'High-End Retouching', 'Monochrome']
  },
  {
    id: 'brand-content-reels-photo',
    title: 'URBAN COMMERCIAL & BRAND LOOKBOOK',
    subtitle: 'COMMERCIAL SHOOT & COLOR HARMONY',
    category: 'COMMERCIAL PHOTOGRAPHY & CONTENT',
    tagline: 'Architectural Framing, Product Styling & Social Lookbook',
    imageTheme: 'commercial-brand',
    imageUrl: ASSETS.urbancommercialbrandlookbook,
    instagramEmbed: 'https://www.instagram.com/p/C7JBHngSVYP/?utm_source=ig_embed&amp;utm_campaign=loading',
    fullDescription: 'A dynamic commercial and lifestyle brand campaign photographed for educational institutions and modern apparel creators in Kerala. Combined energetic environmental frames with clean compositional symmetry and rule of thirds. Fully graded in Premiere Pro & DaVinci Resolve for video clips and Lightroom for brand lookbooks with matched hex-tone color consistency.',
    client: 'Institutes & Lifestyle Brands / Kerala',
    year: '2024',
    cameraGear: 'Full-Frame Cinema / Hybrid Rig + 24-105mm f/4 & Gimbal',
    editingSoftware: 'Lightroom, Premiere Pro & DaVinci Resolve',
    colorPalette: ['#1e3a8a', '#e05a47', '#f8fafc', '#18181b'],
    beforeAfterDescription: 'Synchronized visual color tone across 80+ campaign assets and 9:16 video reels for cohesive brand identity.',
    deliverables: ['Commercial Lookbook Catalog', 'Social Media 9:16 Video Cuts', 'Web Banner Assets (Retina HD)', 'Vector & Tone Color Style Guide'],
    metrics: [
      { label: 'Campaign Reach', value: '450K+' },
      { label: 'Deliverables Total', value: '95 Assets' },
      { label: 'Conversion Lift', value: '+42%' }
    ],
    tags: ['Commercial', 'Color Grading', 'Lookbook']
  }
];

export const ABOUT_DATA = {
  title: 'ABOUT ME',
  description1: "I'm a creative and passionate photographer, videographer, and content creator dedicated to capturing authentic moments and delivering high-quality visual content.",
  description2: "With a strong eye for detail, composition, lighting, and cinematic storytelling, I bring a unique artistic perspective to every frame.",
  bulletPoints: [
    'Camera Settings (ISO, Shutter, Aperture)',
    'Balanced Framing & Rule of Thirds',
    'Natural & Studio Lighting Mastery',
    'Portrait Expressions & Storytelling',
    'Lightroom & Photoshop Color Grading',
    'Event Coverage & Candid Moments'
  ]
};

export const EXPERIENCE_DATA = [
  {
    role: 'FREELANCE PHOTOGRAPHER / VIDEOGRAPHER',
    type: 'Freelance & Production',
    location: 'Kerala, India',
    description: 'Creative and detail-oriented Freelance Photographer with experience in portrait, event, lifestyle, and creative photography.',
    highlights: [
      'Worked with various media channels, agencies, and creative teams to deliver high-quality visual content for projects and campaigns.',
      'Skilled in professional camera handling, composition, lighting, and photo editing with a strong eye for cinematic and storytelling visuals.',
      'Adaptable, reliable, and experienced in working independently as well as within professional production teams.'
    ]
  },
  {
    role: 'CONTENT CREATOR',
    type: 'Digital Media & Visual Campaigns',
    location: 'Kochi, Kerala',
    description: 'Creative and versatile Content Creator with experience working with educational institutes and creative teams in Kochi.',
    highlights: [
      'Skilled in developing engaging content for social media, including reels, promotional videos, photography, campaigns, and educational content.',
      'Experienced in understanding brand requirements, planning creative concepts, coordinating with teams, and producing audience-focused content.',
      'Passionate about visual storytelling, digital media, and creating content that strengthens brand presence and engagement.'
    ]
  }
];

export const EDUCATION_DATA = {
  degree: 'B.COM (BACHELOR OF COMMERCE)',
  institution: 'KERALA UNIVERSITY',
  details: 'Focus on commerce, business communication, and management.'
};

export const TOOLS_DATA = [
  {
    name: 'Lightroom',
    shortCode: 'Lr',
    iconType: 'lr',
    bgGradient: 'from-[#001d3d]/50 to-[#0e1622]',
    borderColor: 'border-[#31a8ff]/40'
  },
  {
    name: 'Photoshop',
    shortCode: 'Ps',
    iconType: 'ps',
    bgGradient: 'from-[#001d3d]/40 to-[#0e1622]',
    borderColor: 'border-[#31a8ff]/30'
  },
  {
    name: 'Premiere Pro',
    shortCode: 'Pr',
    iconType: 'pr',
    bgGradient: 'from-[#470137]/40 to-[#1b101e]',
    borderColor: 'border-[#ea77ff]/40'
  },
  {
    name: 'Pro Cameras',
    shortCode: 'Gear',
    iconType: 'camera',
    bgGradient: 'from-[#3a1510]/50 to-[#161214]',
    borderColor: 'border-[#e05a47]/40'
  },
  {
    name: 'DaVinci / Video',
    shortCode: 'Color',
    iconType: 'davinci',
    bgGradient: 'from-[#331c00]/40 to-[#1e140a]',
    borderColor: 'border-[#ff9a00]/30'
  }
];

export const REELS_DATA = [
  {
    id: 'reel-1',
    title: 'Monsoon in Fort Kochi',
    caption: 'Chasing the rain reflections & mood through the narrow streets of Fort Kochi 🌧️📸 Shot on 35mm f/1.4 with cinematic color grade.',
    views: '184K',
    likes: '21.4K',
    comments: '428',
    duration: '0:26',
    audioTrack: 'Original Audio - Atmospheric Lo-Fi Vibes',
    thumbnailUrl: ASSETS.kochiReelThumb,
    videoUrl: ASSETS.kochiReel,
    videoGradient: 'from-amber-900/60 via-stone-900/80 to-black',
    instagramUrl: 'https://www.instagram.com/reel/DZcp_p1yWV8/',
    category: 'Cinematic',
    date: '3 days ago'
  },
  {
    id: 'reel-2',
    title: 'Golden Hour Portrait Flow',
    caption: 'Natural golden hour backlight direction + subtle fill bounce. Watch the before & after color grade in Lightroom! ✨',
    views: '245K',
    likes: '34.8K',
    comments: '612',
    duration: '0:34',
    audioTrack: 'Trending Ambient Soundscape',
    thumbnailUrl: ASSETS.goldenHourReelThumb,
    videoUrl: ASSETS.goldenHourReel,
    videoGradient: 'from-orange-900/60 via-neutral-900/80 to-black',
    instagramUrl: 'https://www.instagram.com/reel/DYcHiyZzPiB/',
    category: 'Portrait',
    date: '1 week ago'
  },
  {
    id: 'reel-3',
    title: 'Campus Brand Campaign',
    caption: 'Fast-paced promotional video edit crafted for a leading educational institute in Kochi 🎓 High-energy cuts & typography motion.',
    views: '128K',
    likes: '15.9K',
    comments: '290',
    duration: '0:30',
    audioTrack: 'Upbeat Energy Synth Beat',
    thumbnailUrl: ASSETS.campusBrandReelThumb,
    videoUrl: ASSETS.campusBrandReel,
    videoGradient: 'from-rose-950/70 via-stone-900/80 to-black',
    instagramUrl: 'https://www.instagram.com/reel/DOIuQHmkh_g/',
    category: 'Promo',
    date: '2 weeks ago'
  },
  {
    id: 'reel-4',
    title: 'Night Street Candid Stories',
    caption: 'Low-light street photography secrets: nailing focus with manual lenses and grading neon cyan & warm amber tones 🏮',
    views: '96.5K',
    likes: '11.2K',
    comments: '185',
    duration: '0:22',
    audioTrack: 'Midnight Jazz & Rain Audio',
    thumbnailUrl: ASSETS.nightStreetReelThumb,
    videoUrl: ASSETS.nightStreetReel,
    videoGradient: 'from-blue-950/70 via-slate-900/80 to-black',
    instagramUrl: 'https://www.instagram.com/reel/DZDPFA5JQnV/',
    category: 'Travel',
    date: '3 weeks ago'
  },
  {
    id: 'reel-5',
    title: 'Kerala Wedding Emotion Cut',
    caption: 'It is all about the candid teardrops, laughter, and authentic family bonds captured in real time without staging 🕊️❤️',
    views: '310K',
    likes: '48.6K',
    comments: '940',
    duration: '0:45',
    audioTrack: 'Traditional Strings & Melodic Flute',
    thumbnailUrl: ASSETS.keralaWeddingReelThumb,
    videoUrl: ASSETS.keralaWeddingReel,
    videoGradient: 'from-red-950/60 via-stone-900/80 to-black',
    instagramUrl: 'https://www.instagram.com/reel/DJMmP2aylhd/',
    category: 'Event',
    date: '1 month ago'
  },
];

export const TESTIMONIAL_DATA = {
  quote: 'Bineesh brings exceptional creative vision, precise lighting, and a natural eye for storytelling. Delivered stunning visuals that elevated our brand presence.',
  author: 'Creative Director & Client Feedback'
};

export const COLLABORATE_DATA = {
  title: "LET'S COLLABORATE",
  subtitle: "Have a photography project, event shoot, video campaign, or content requirement in mind? Let's connect.",
  email: 'bineeshbineesh0123@gmail.com',
  phone: '+91 73060 43445',
  location: 'Kochi, Kerala, India',
  website: 'bineesh.photography'
};

export const FOOTER_SIGN = {
  lines: ['CAPTURING', 'MOMENTS.', 'CREATING', 'STORIES.']
};
