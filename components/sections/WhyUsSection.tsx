import { WHY_ITEMS } from '@/lib/constants';
import styles from './WhyUsSection.module.css';

export default function WhyUsSection() {
  return (
    <section id="why-us" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header reveal">
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
