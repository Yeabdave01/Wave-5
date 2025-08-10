# Wave — Demo e-commerce site

**What this repo contains:** a deployable Next.js starter for *Wave* (marketplace-style single-seller store).
It's a demo scaffold with:
- Next.js (App Router) frontend
- Basic pages: home, products, product details, cart, checkout
- Admin dashboard scaffold (protected route stub)
- Tele-birr + CBE payment **stubs** and webhook endpoints (replace placeholders with merchant credentials)
- i18n language switcher (English / Amharic)
- Smooth transitions using framer-motion
- Placeholder logo in `/public/logo.svg`

**Important:** This is a code scaffold. To accept real payments, register and obtain merchant credentials from Tele-birr and CBE and paste them into `.env.local`.

## Quick start (local)
1. Install Node.js 18+ and yarn or npm.
2. Copy `.env.example` to `.env.local` and fill values.
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Run dev server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000

## Deployment suggestions
- Host frontend on Vercel (recommended) and use Supabase / Railway / Render for Postgres.
- Store images on S3 / DigitalOcean Spaces and set `NEXT_PUBLIC_ASSET_URL` accordingly.

## Tele-birr & CBE integration (stubs)
- `/pages/api/payments/telebirr/create` — initiate a Tele-birr payment (server-side stub)
- `/pages/api/payments/telebirr/webhook` — webhook to confirm Tele-birr payments
- `/pages/api/payments/cbe/create` — initiate CBE-like flow or return bank transfer instructions
- For now these endpoints return test-mode responses. Replace with provider SDKs and merchant keys.

## Files of interest
- `/app/` — Next.js App Router pages and layout
- `/pages/api/` — API endpoints (payments, orders)
- `/components/` — UI components
- `/public/` — static assets (logo)
- `.env.example` — env var placeholders

## Next steps I can do for you
- Add Stripe / Chapa as fallback gateways
- Expand the admin panel (CSV import, order export)
- Connect a real Postgres DB and image upload flow
- Prepare merchant onboarding email templates for Tele-birr & CBE

If you want me to continue and connect DB + full payment SDK code, reply and I'll extend the project.
