import React, { useEffect } from 'react';

let embedScriptPromise = null;

const loadEmbedScript = () => {
  if (window.instgrm && window.instgrm.Embeds) return Promise.resolve();

  if (!embedScriptPromise) {
    embedScriptPromise = new Promise((resolve) => {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      script.onload = resolve;
      script.onerror = () => {
        embedScriptPromise = null;
        resolve();
      };
      document.body.appendChild(script);
    });
  }

  return embedScriptPromise;
};

export const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    let cancelled = false;

    loadEmbedScript().then(() => {
      if (cancelled) return;
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '1px 0',
        maxWidth: 540,
        minWidth: 326,
        padding: 0,
        width: 'calc(100% - 2px)',
      }}
    >
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{
          background: '#FFFFFF',
          lineHeight: 0,
          padding: 0,
          textAlign: 'center',
          textDecoration: 'none',
          width: '100%',
        }}
      >
        View this post on Instagram
      </a>
    </blockquote>
  );
};