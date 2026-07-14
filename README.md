# JobNepal

A job portal frontend for Nepal built with **React 19**, **Vite 8**, and **Tailwind CSS 4**. Features real job listings from Nepali companies with actual company logos.

## Pages

| Route | Page |
|---|---|
| `/` | Home — HeroSection, Instant Jobs & Hot Jobs sidebar, Top Jobs, Featured Jobs, Popular Categories, Top Hiring Companies, Why Choose Us, Call to Action |
| `/job/:id` | Job Detail — full description, requirements, Apply Now / Save Job |
| `/find-job` | Browse all jobs |
| `/hire` | Employer registration |
| `/login` | User login |
| `/signup` | User registration |

## Features

- Company logos sourced from official websites / jobsnepal CDN (with ui-avatars fallback)
- Real Nepali companies: Ncell, CG Corp, Nabil Bank, Nepal Telecom, Surya Nepal, Yeti Airlines, Pathao, Gorkha Brewery, and more
- Responsive layout with sidebar (Instant Jobs + Hot Jobs)
- Job detail page with breadcrumbs and dynamic data

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Tech Stack

- **React 19** with React Router v7
- **Vite 8** for build tooling
- **Tailwind CSS 4** for styling
- **ESLint** for linting
