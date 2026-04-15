import { STATS } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './StatsBar.module.css';

export default function StatsBar() {
  return (
    <section className={styles.bar}>
      <div className={`container ${styles.grid}`}>
        {STATS.map((stat, i) => (
          <ScrollReveal key={stat.label} animation="fadeUp" delay={i * 100} className={styles.item}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
