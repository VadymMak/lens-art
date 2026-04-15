'use client';

import { useEffect } from 'react';

/**
 * Global reveal-on-scroll observer.
 * Adds 'visible' class to any .reveal element when it enters the viewport.
 * Uses MutationObserver to handle dynamically added elements (tab switches, etc.)
 * Place once in layout.tsx — no need to add useReveal hook to individual sections.
 */
export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        observer.observe(el);
      });
    };

    observeAll();

    // Watch for new .reveal elements (tab switching, dynamic content)
    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Fallback: show everything after 3s if observer didn't fire
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        el.classList.add('visible');
      });
    }, 3000);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return null;
}
