# Сайт-визитка психолога

Одностраничный сайт на Astro + Tailwind CSS с формой записи на консультацию.

## Быстрый старт

```bash
npm install
npm run dev
```

Сайт откроется на http://localhost:4321

## Сборка

```bash
npm run build
npm run preview
```

## Настройка контента

Весь текст сайта находится в одном файле: `src/content/site.json`

Замените placeholder-данные на реальные:
- Имя, специализация, слоган
- Тексты «Обо мне», услуги, цены
- Контакты: телефон, email, Telegram, WhatsApp
- Адрес кабинета и ссылка на карту

## Фото

Положите фото психолога в `public/images/photo.jpg` (рекомендуется 1200×1500 px, портрет).

Для превью в соцсетях замените `public/images/og-image.jpg`.

## Форма заявки (Formspree)

1. Зарегистрируйтесь на https://formspree.io
2. Создайте новую форму и скопируйте ID (например, `xyzabcde`)
3. Вставьте ID в `src/content/site.json` → `meta.formspreeId`
4. Укажите email для получения заявок в настройках Formspree

## Деплой на Netlify

1. Загрузите проект на GitHub
2. Зайдите на https://app.netlify.com → «Add new site» → «Import an existing project»
3. Подключите репозиторий — Netlify автоматически подхватит настройки из `netlify.toml`
4. После деплоя обновите `meta.siteUrl` в `site.json` на ваш домен

## Деплой на Vercel

```bash
npx vercel
```

Или подключите репозиторий на https://vercel.com

## Структура

```
src/
├── components/    # Секции сайта
├── content/       # site.json — весь контент
├── layouts/       # Общий layout с SEO
├── pages/         # index.astro, privacy.astro
└── styles/        # Глобальные стили
public/
└── images/        # Фото и og-image
```
