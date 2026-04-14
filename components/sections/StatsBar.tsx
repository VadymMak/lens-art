import { STATS } from '@/lib/constants';
import styles from './StatsBar.module.css';

export default function StatsBar() {
  return (
    <section className={styles.bar}>
      <div className={`container ${styles.grid}`}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.item}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
