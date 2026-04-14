'use client';

import { useState } from 'react';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(SERVICE_CATEGORIES[0]?.id ?? '');

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="services" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Naše <span>Služby</span>
          </h2>
          <p className="section-subtitle">
            Profesionálny servis so zárukou kvality pre každé vozidlo.
          </p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {activeCategory?.items.map((item) => (
            <div key={item.id} className={`card ${styles.card}`}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.desc}>{item.description}</p>
              <span className={styles.price}>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
