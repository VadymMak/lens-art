import { STATS } from '@/lib/constants';
import styles from './StatsBar.module.css';

const DELAYS = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'];

export default function StatsBar() {
  return (
    <section className={styles.bar}>
      <div className={`container ${styles.grid}`}>
        {STATS.map((stat, i) => (
          <div key={stat.label} className={`${styles.item} reveal ${DELAYS[i] ?? 'reveal-delay-4'}`}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
