import Image from 'next/image';
import { IMAGES } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './GallerySection.module.css';

export default function GallerySection() {
  return (
    <section id="gallery" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <ScrollReveal animation="fadeUp" className="section-header">
          <h2 className="section-title">
            Naša <span>Galéria</span>
          </h2>
          <p className="section-subtitle">Pohľad do zákulisia našej práce.</p>
        </ScrollReveal>

        <div className={styles.grid}>
          {IMAGES.gallery.map((src, i) => (
            <ScrollReveal
              key={i}
              animation="scaleIn"
              delay={i * 80}
              className={`${styles.item} ${i === 0 ? styles.featured : ''}`}
            >
              <Image
                src={src}
                alt={`Galéria ${i + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
