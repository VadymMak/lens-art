'use client';

import { PRICING_PLANS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';
import styles from './PricingSection.module.css';

export default function PricingSection() {
  const ref = useReveal();

  return (
    <section id="cennik" className={`section ${styles.section}`} ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">
            Naše <span>Ceny</span>
          </h2>
          <p className="section-subtitle">
            Transparentné ceny bez skrytých poplatkov. Retuš a online galéria vždy v cene.
          </p>
        </div>

        <div className={styles.grid}>
          {PRICING_PLANS.map((plan, i) => (
            <div
              key={plan.id}
              className={`card ${styles.card} ${plan.highlighted ? styles.cardHighlighted : ''} reveal`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {plan.highlighted && (
                <span className={styles.badge}>Najpopulárnejší</span>
              )}
              <h3 className={styles.name}>{plan.name}</h3>
              <div className={styles.price}>{plan.price}</div>
              <ul className={styles.features}>
                {plan.features.map((feature, j) => (
                  <li key={j} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#booking" className={`btn btn--primary ${styles.cta}`}>
                Objednať
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
