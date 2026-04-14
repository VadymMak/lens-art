'use client';

import { useEffect, useRef } from 'react';
import { WHY_ITEMS } from '@/lib/constants';
import styles from './WhyUsSection.module.css';

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = ref.current?.querySelectorAll('.reveal') ?? [];
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className={`section ${styles.section}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Prečo <span>nás</span>
          </h2>
          <p className="section-subtitle">
            Vybrali si nás tisíce spokojných zákazníkov. Tu je dôvod.
          </p>
        </div>

        <div className={styles.grid}>
          {WHY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`card reveal ${styles.card}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
