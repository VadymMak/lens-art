'use client';

import { useState } from 'react';
import { MENU_CATEGORIES } from '@/lib/constants';
import styles from './MenuSection.module.css';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(MENU_CATEGORIES[0]?.id ?? '');

  const activeCategory = MENU_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="menu" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Naše <span>Menu</span>
          </h2>
          <p className="section-subtitle">Čerstvé ingrediencie, tradičné recepty a moderná kuchyňa.</p>
        </div>

        <div className={styles.tabs}>
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className={styles.list}>
          {activeCategory?.items.map((item) => (
            <div key={item.id} className={`card ${styles.item}`}>
              <div className={styles.info}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.desc}>{item.description}</p>
              </div>
              <span className={styles.price}>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
