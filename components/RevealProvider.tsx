'use client';
import { useEffect } from 'react';

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        el.classList.add('visible');
      });
    }, 5000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
}
