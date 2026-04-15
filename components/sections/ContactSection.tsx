import { CONTACT_ITEMS, FAQ_ITEMS } from '@/lib/constants';
import styles from './ContactSection.module.css';
import FaqAccordion from './FaqAccordion';

export default function ContactSection() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">
            Kontakt <span>&amp; FAQ</span>
          </h2>
          <p className="section-subtitle">Nájdete nás tu alebo nám napíšte.</p>
        </div>

        <div className={styles.layout}>
          {/* Contact info */}
          <div className={styles.info}>
            <div className={styles.cards}>
              {CONTACT_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className={`card ${styles.card} reveal`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={styles.icon}>{item.icon}</div>
                  <div>
                    <div className={styles.title}>{item.title}</div>
                    {item.lines.map((line, j) => (
                      <div key={j} className={styles.line}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className={`${styles.mapWrap} reveal reveal-delay-3`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.6!2d18.74!3d49.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEzJzEyLjAiTiAxOMKwNDQnMjQuMCJF!5e0!3m2!1ssk!2ssk!4v1680000000000!5m2!1ssk!2ssk"
                width="100%"
                height="260"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)', borderRadius: 'var(--radius-md)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa"
              />
            </div>
          </div>

          {/* FAQ */}
          <div className="reveal reveal-delay-2">
            <h3 className={styles.faqTitle}>Často kladené otázky</h3>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </div>
    </section>
  );
}
