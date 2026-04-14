'use client';

import { useState } from 'react';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import styles from './BookingSection.module.css';

interface FormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

export default function BookingSection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const allServices = SERVICE_CATEGORIES.flatMap((cat) => cat.items);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your API call or email service
    setSubmitted(true);
  };

  return (
    <section id="booking" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.info}>
            <h2 className="section-title">
              Rezervujte si <span>termín</span>
            </h2>
            <p className="section-subtitle">
              Vyplňte formulár a my vás kontaktujeme s potvrdením do 24 hodín.
            </p>
            <ul className={styles.benefits}>
              <li>✅ Rýchla odpoveď do 24 hodín</li>
              <li>✅ Bez záväzkov — rezervácia je bezplatná</li>
              <li>✅ Bezplatná cenová ponuka</li>
              <li>✅ Flexibilné termíny</li>
            </ul>
          </div>

          <div className={styles.formWrap}>
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Rezervácia odoslaná!</h3>
                <p>Kontaktujeme vás čo najskôr pre potvrdenie termínu.</p>
                <button className="btn btn--outline" onClick={() => setSubmitted(false)}>
                  Nová rezervácia
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className="form-group">
                    <label htmlFor="name">Meno a priezvisko *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Ján Novák"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefón *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-control"
                      placeholder="+421 9XX XXX XXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className="form-group">
                    <label htmlFor="service">Typ služby *</label>
                    <select
                      id="service"
                      name="service"
                      className="form-control"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Vyberte službu...</option>
                      {allServices.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Preferovaný dátum</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="form-control"
                      value={form.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Poznámka</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows={3}
                    placeholder="Opis problému, model vozidla..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={`btn btn--primary ${styles.submit}`}>
                  Odoslať rezerváciu
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
