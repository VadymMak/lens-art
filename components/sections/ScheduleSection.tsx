import { SCHEDULE } from '@/lib/constants';
import styles from './ScheduleSection.module.css';

export default function ScheduleSection() {
  return (
    <section id="schedule" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">
            Rozvrh <span>hodín</span>
          </h2>
          <p className="section-subtitle">Aktuálny týždenný rozvrh tried a lekcií.</p>
        </div>

        <div className={styles.grid}>
          {SCHEDULE.map((day, i) => (
            <div
              key={day.day}
              className={`card ${styles.day} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <h3 className={styles.dayName}>{day.day}</h3>
              <div className={styles.entries}>
                {day.entries.map((entry, j) => (
                  <div key={j} className={styles.entry}>
                    <span className={styles.time}>{entry.time}</span>
                    <div className={styles.entryInfo}>
                      <span className={styles.className}>{entry.name}</span>
                      <span className={styles.instructor}>{entry.instructor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
