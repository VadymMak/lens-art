import Image from 'next/image';
import { IMAGES } from '@/lib/constants';
import styles from './GallerySection.module.css';

export default function GallerySection() {
  return (
    <section id="gallery" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Naša <span>Galéria</span>
          </h2>
          <p className="section-subtitle">Pohľad do zákulisia našej práce.</p>
        </div>

        <div className={styles.grid}>
          {IMAGES.gallery.map((src, i) => (
            <div key={i} className={`${styles.item} ${i === 0 ? styles.featured : ''}`}>
              <Image
                src={src}
                alt={`Galéria ${i + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
