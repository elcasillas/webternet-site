# Technology

## Overview

Next.js marketing and lead-capture site with a small API layer for property submissions.

## Stack

- Next.js 15.5.19
- React 19
- TypeScript 5
- Tailwind CSS 3
- ESLint 9 with `eslint-config-next`
- PostCSS with Autoprefixer

## Runtime And Integrations

- Cloudflare deployment via GitHub Actions
- Local development on `http://127.0.0.1:3000`

## App Structure

- `app/` for the App Router pages and API route
- `pages/` for legacy Next.js runtime files such as `_app` and `_document`
- `components/` for reusable UI sections and form elements
- `public/` for static assets like the logo and images
- `styles/` for global CSS

## Key Routes

- `/` homepage

## Environment Variables

- `RESEND_API_KEY`
- `PROPERTY_SUBMISSION_TO_EMAIL`
- `PROPERTY_SUBMISSION_FROM_EMAIL`
- `PROPERTY_SUBMISSION_TO` for backward compatibility
- `PROPERTY_SUBMISSION_FROM` for backward compatibility

## Scripts

- `npm run dev` starts the local dev server
- `npm run build` creates a production build
- `npm run start` runs the production server
- `npm run lint` runs Next.js linting

## Notes

- Production email sending should use a Resend-verified sending domain.
- The project currently supports both App Router and Pages Router conventions.
