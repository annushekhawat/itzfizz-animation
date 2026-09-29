# Itz Fizz — Scroll-Driven Landing Page

A responsive sparkling-drink landing page built with Next.js, React, Tailwind CSS, and GSAP. The hero headline and impact stats animate in on load; the product can follows scroll progress through a pinned hero sequence with GSAP ScrollTrigger.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Publish on GitHub Pages

This project is configured for a static Next.js export and includes a GitHub Actions deployment workflow.

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set the publishing source to **GitHub Actions**.
3. The workflow builds and deploys the site after each push. Find the live URL in **Actions → Deploy to GitHub Pages** (typically `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`).
4. Share that URL and the repository URL as the assignment submission links.

For a user/organization site repository named `YOUR-USERNAME.github.io`, remove the repository-name base path from the workflow build environment or configure the base path as empty.

## Motion and accessibility

- Intro reveals are sequenced with GSAP.
- ScrollTrigger pins the first-screen hero and scrubs the product can's transform based on scroll progress.
- Motion is skipped when the visitor requests reduced motion.
- The layout adapts to mobile and desktop screens.
