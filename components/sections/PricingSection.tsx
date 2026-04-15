import { PRICING_PLANS } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './PricingSection.module.css';

export default function PricingSection() {
  return (
    <section id="cennik" className={`section ${styles.section}`}>
      <div className="container">
        <ScrollReveal animation="fadeUp" className="section-header">
          <h2 className="section-title">
            Naše <span>Ceny</span>
          </h2>
          <p className="section-subtitle">
            Transparentné ceny bez skrytých poplatkov. Retuš a online galéria vždy v cene.
          </p>
        </ScrollReveal>

        {/* Wrap entire grid in one ScrollReveal so all 3 cards animate together */}
        <ScrollReveal animation="fadeUp" delay={100}>
          <div className={styles.grid}>
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`card ${styles.card} ${plan.highlighted ? styles.cardHighlighted : ''}`}
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
        </ScrollReveal>
      </div>
    </section>
  );
}
