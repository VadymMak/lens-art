'use client';

import { useState } from 'react';
import type { FaqItem } from '@/lib/types';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import styles from './FaqAccordion.module.css';

interface Props {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className={styles.list}>
      {items.map((item, i) => (
        <ScrollReveal key={item.id} animation="fadeUp" delay={i * 80} as="div">
          <div className={`${styles.item} ${open === item.id ? styles.itemOpen : ''}`}>
            <button
              className={styles.question}
              onClick={() => setOpen(open === item.id ? null : item.id)}
              aria-expanded={open === item.id}
            >
              <span>{item.question}</span>
              <span className={styles.chevron}>{open === item.id ? '−' : '+'}</span>
            </button>
            {open === item.id && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
