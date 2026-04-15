'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_CATEGORIES } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './PortfolioGrid.module.css';

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState(PORTFOLIO_CATEGORIES[0]?.id ?? '');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const activeCategory = PORTFOLIO_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="portfolio" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <ScrollReveal animation="fadeUp" className="section-header">
          <h2 className="section-title">
            Naše <span>Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Výber z realizovaných fotení — svadby, portréty, produkty a eventy.
          </p>
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal animation="fadeUp" delay={100} className={styles.tabs}>
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </ScrollReveal>

        {/* Photo grid — no ScrollReveal: re-renders on tab change must show images immediately */}
        <div className={styles.grid}>
          {activeCategory?.images.map((img, i) => (
            <button
              key={img.id}
              className={`${styles.item} ${i === 0 ? styles.itemFeatured : ''}`}
              onClick={() => setLightbox(img.src)}
              aria-label={`Otvoriť ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.overlay}>
                <span className={styles.zoomIcon}>+</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.close} aria-label="Zavrieť">✕</button>
          <div className={styles.lightboxImg}>
            <Image
              src={lightbox}
              alt="Portfolio detail"
              fill
              style={{ objectFit: 'contain' }}
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
