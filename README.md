# GURDEX Footwear — Website Demo

A responsive React + Vite corporate website concept for GURDEX Footwear Private Limited, an industrial safety footwear manufacturer.

## Pages
- Home
- About Us
- Products Catalogue (search, category filters, product detail pages)
- Manufacturing Facility
- Quality & Certifications
- Dealer & Distributor Enquiry
- Corporate Bulk Enquiry
- Contact Us

## Interactions
- Responsive mobile navigation
- Product search and category filter
- Product detail pages with enquiry links
- Client-side form validation
- Enquiry forms open WhatsApp with a prefilled message; no form data is stored on a server
- Floating WhatsApp contact button

## Run locally
Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Upload this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Add a rewrite for SPA routing if required by the deployment setup.

## Before presenting as a live client website
Edit `CONFIG` in `src/main.jsx` and replace the demo phone, WhatsApp number, email, address and website URL with details confirmed by GURDEX. The current WhatsApp number is intentionally a placeholder and will not reach the client.

Replace illustrative product names, model numbers, images, specifications, manufacturing images and any claims with verified company materials. Do not publish certification claims until current documents have been checked. The form currently launches WhatsApp; it does not submit to a backend or email service.

## SEO notes
The HTML includes baseline metadata. Before launch, update canonical URL, social preview image, `public/sitemap.xml` and `public/robots.txt` for the real domain. Add analytics and a privacy notice only after the client's consent and tracking requirements are confirmed.
