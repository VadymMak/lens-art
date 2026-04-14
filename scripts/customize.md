# Как создать новый сайт из шаблона

## 1. Создай новый репозиторий

На GitHub нажми **"Use this template"** → введи имя нового проекта (например `bloom-shop`) → Create repository.

Клонируй новый репо:
```bash
git clone https://github.com/ВашОрг/bloom-shop.git
cd bloom-shop
pnpm install
```

## 2. Открой `lib/config.ts` — измени SITE_CONFIG

```ts
export const SITE_CONFIG: SiteConfig = {
  name: 'BloomShop',                    // Название сайта
  tagline: 'Kvety pre každú príležitosť', // Подзаголовок
  templateType: 'services',             // 'services' | 'schedule' | 'menu' | 'portfolio'
  palette: {
    primary: '#E91E8C',                 // Основной акцентный цвет
    primaryDark: '#C2185B',
    primaryLight: '#F06292',
    bg: '#0A0A12',                      // Фон страницы
    bgAlt: '#12121F',
    card: '#1A1A2E',
    cardHover: '#22223B',
    text: '#F8F8FF',
    textMuted: '#9E9EBF',
    border: 'rgba(233,30,140,0.15)',
  },
  headingFont: 'playfair',             // 'oswald' | 'playfair' | 'cormorant' | 'inter'
  whatsappNumber: '421901234567',
  contactEmail: 'info@bloomshop.sk',
};
```

## 3. Открой `lib/constants.ts` — замени данные

```ts
// templateType: 'services' → редактируй SERVICE_CATEGORIES
// templateType: 'schedule' → редактируй SCHEDULE
// templateType: 'menu'     → редактируй MENU_CATEGORIES
// templateType: 'portfolio' → данные из IMAGES.gallery

// Обязательно замени:
export const STATS: StatItem[] = [ /* твои статистики */ ];
export const WHY_ITEMS: WhyItem[] = [ /* твои преимущества */ ];
export const REVIEWS: Review[] = [ /* реальные отзывы */ ];
export const CONTACT_ITEMS: ContactItem[] = [ /* контакты клиента */ ];
export const FAQ_ITEMS: FaqItem[] = [ /* вопросы/ответы */ ];
export const CHAT_CONFIG: ChatConfig = { /* конфиг чата */ };
```

## 4. Добавь фотографии

Скопируй фото клиента в `public/images/`:
```
public/
  images/
    hero.jpg      ← главное фото (1920×1080+)
    about.jpg     ← фото о нас
    gallery/
      01.jpg
      02.jpg
      03.jpg
      04.jpg
      05.jpg
```

Конвертируй в WebP:
```bash
pnpm add -D sharp
node scripts/convert-to-webp.mjs
```

Переключи флаг в `lib/constants.ts`:
```ts
export const USE_LOCAL_IMAGES = true;
```

## 5. Проверь и запускай

```bash
pnpm dev        # Просмотр на localhost:3000
npx tsc --noEmit  # Проверка типов
pnpm build      # Сборка продакшн
```

## 6. Деплой на Vercel

```bash
git add -A
git commit -m "feat: customize for BloomShop"
git push
```

На Vercel: Import Project → выбери репо → Deploy.

---

## Типы шаблонов

| templateType  | Основная секция           | Пример бизнеса              |
|---------------|---------------------------|------------------------------|
| `services`    | Табы с услугами и ценами  | Автосервис, салон, клиника   |
| `schedule`    | Расписание по дням        | Фитнес-клуб, йога, секции    |
| `menu`        | Табы с меню и ценами      | Ресторан, кафе, пекарня      |
| `portfolio`   | Большая галерея работ     | Фотограф, дизайнер, строитель|

---

## CSS-переменные (не хардкодить!)

Все компоненты используют CSS-переменные из `globals.css`:

```css
var(--primary)       /* акцентный цвет */
var(--bg)            /* фон */
var(--bg-alt)        /* альтернативный фон секций */
var(--card)          /* фон карточек */
var(--text)          /* основной текст */
var(--text-muted)    /* вспомогательный текст */
var(--border)        /* цвет рамок */
```

Переменные автоматически заполняются из `SITE_CONFIG.palette` через `layout.tsx`.
