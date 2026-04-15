'use client';
import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) {
      el.querySelectorAll('.reveal').forEach((child) => observer.observe(child));
    }

    // Fallback: show everything after 3s if observer didn't fire
    const timer = setTimeout(() => {
      if (el) {
        el.querySelectorAll('.reveal:not(.visible)').forEach((child) => {
          child.classList.add('visible');
        });
      }
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return ref;
}
