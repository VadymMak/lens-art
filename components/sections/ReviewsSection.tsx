import { REVIEWS } from '@/lib/constants';
import styles from './ReviewsSection.module.css';

export default function ReviewsSection() {
  return (
    <section id="reviews" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">
            Čo hovoria <span>zákazníci</span>
          </h2>
          <p className="section-subtitle">
            Spokojnosť zákazníkov je našou najväčšou odmenou.
          </p>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((review, i) => (
            <div
              key={review.id}
              className={`card ${styles.card} reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="stars">{'★'.repeat(review.rating)}</div>
              <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
              <div className={styles.footer}>
                <div className={styles.avatar}>{review.initial}</div>
                <div>
                  <div className={styles.name}>{review.name}</div>
                  <div className={styles.detail}>{review.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
