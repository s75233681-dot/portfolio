# Simon Aiahadjei Danquah: portfolio

React + Vite, plain CSS, no UI library. Only two runtime dependencies.

## Run it
```bash
npm install
npm run dev      # local site at http://localhost:5173
npm run build    # production files in /dist
```
Needs Node 18 or newer.

## What to replace first
1. **Profile photo** is already in `public/images/simon.jpg`. Swap the file to change it.
2. **Email and GitHub** are set in `src/data.js` (`email`, `github`).
3. **Project text** -> `src/data.js`, the `projects` list. Descriptions are deliberately
   modest because I only had your summaries. Add real details, live links, and screenshots.
   Screenshots go in `public/images/` and can replace the CSS artwork on each card.

## Structure
```
index.html              fonts, page title, favicon
src/data.js             all content: profile, skills, projects
src/styles.css          the whole design (colour tokens at the top)
src/components/         Nav, Hero, About, Skills, Projects, Security, Music, Contact
src/hooks/useReveal.js  starts the terminal typing when it scrolls into view
public/images/          your photo and any screenshots
```

## Deploy
Vercel or Netlify: build command `npm run build`, output directory `dist`.
