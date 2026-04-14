import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/config';
import { IMAGES } from '@/lib/constants';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background image */}
      <div className={styles.bg}>
        <Image
          src={IMAGES.hero}
          alt={SITE_CONFIG.name}
          fill
          priority
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>{SITE_CONFIG.name}</p>
        <h1 className={styles.title}>{SITE_CONFIG.tagline}</h1>
        <p className={styles.sub}>
          Profesionálne služby, ktorým môžete dôverovať. Kvalita a spoľahlivosť na prvom mieste.
        </p>
        <div className={styles.ctas}>
          <a href="#booking" className="btn btn--primary">
            Rezervovať termín
          </a>
          <a href="#services" className="btn btn--outline">
            Naše služby
          </a>
        </div>
      </div>
    </section>
  );
}
