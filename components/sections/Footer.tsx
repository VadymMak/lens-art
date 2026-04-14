import { SITE_CONFIG } from '@/lib/config';
import { NAV_ITEMS, CONTACT_ITEMS } from '@/lib/constants';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>{SITE_CONFIG.name}</div>
          <p className={styles.tagline}>{SITE_CONFIG.tagline}</p>
          <p className={styles.copy}>
            Vytvorené cez{' '}
            <a href="https://vendshop.sk" target="_blank" rel="noopener noreferrer" className={styles.vsLink}>
              VendShop
            </a>
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className={styles.colTitle}>Navigácia</h4>
          <nav className={styles.links}>
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className={styles.link}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className={styles.colTitle}>Kontakt</h4>
          <div className={styles.contactList}>
            {CONTACT_ITEMS.slice(0, 3).map((item, i) => (
              <div key={i} className={styles.contactRow}>
                <span>{item.icon}</span>
                <span>{item.lines[0]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div>
          <h4 className={styles.colTitle}>Rezervácia</h4>
          <p className={styles.ctaText}>
            Rezervujte si termín online alebo nás kontaktujte priamo.
          </p>
          <a href="#booking" className={`btn btn--primary ${styles.ctaBtn}`}>
            Rezervovať
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <span>© {year} {SITE_CONFIG.name}. Všetky práva vyhradené.</span>
          <div className={styles.bottomLinks}>
            <a href="#">Ochrana súkromia</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
