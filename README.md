# Megacarwash Marketing Website

A modern, high-performance marketing website for the Megacarwash mobile application, built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Font Optimization:** next/font (Montserrat)
- **UI Components:** Shadcn/ui foundation
- **Deployment:** GitHub Pages (Static Export)

## Features

- Static Site Generation (SSG) for optimal performance
- Fully typed with TypeScript
- Responsive design with mobile-first approach
- Smooth animations with Framer Motion
- SEO optimized with Next.js metadata
- Optimized fonts with next/font
- Image optimization with next/image

## Project Structure

```
mcw-web/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── author/              # Author page
│   └── not-found.tsx        # 404 page
├── src/
│   ├── components/          # React components
│   │   ├── navbar/          # Navigation component
│   │   ├── footer/          # Footer component
│   │   ├── hero-section/    # Hero landing section
│   │   ├── companies/       # Stats/Companies section
│   │   ├── preview/         # Preview carousel section
│   │   ├── technologies/    # Technologies grid
│   │   ├── about-section/   # About content
│   │   └── ui/              # Reusable UI components
│   └── lib/
│       └── utils.ts         # Utility functions (cn helper)
├── public/                  # Static assets
│   ├── assets/              # SVG logos
│   ├── previews/            # App preview images
│   ├── technologies/        # Technology logos
│   └── ...                  # Other images
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Format code
npm run format

# Lint code
npm run lint
```

## Deployment

The site is configured for deployment to GitHub Pages with static export:

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

This will:

1. Build the site with `next build`
2. Export static files to `out/` directory
3. Create `.nojekyll` file for GitHub Pages
4. Deploy to the `gh-pages` branch

## Configuration

### Next.js Configuration

The site uses static export mode for GitHub Pages deployment:

```javascript
output: 'export',
basePath: '/mcw-web',
images: { unoptimized: true }
```

### Tailwind CSS

Custom colors and fonts are configured in `tailwind.config.ts`:

- Primary color: `#2196F3` (Blue)
- Dark background: `#101522`
- Font: Montserrat (optimized with next/font)

## Components

### Navbar

Sticky navigation with scroll effects and responsive mobile design.

### HeroSection

Landing section with hero image, call-to-action, and app store links.

### CompaniesSection

Project statistics grid with responsive layout.

### PreviewSection

Animated image carousel showcasing app previews.

### Technologies

Grid display of technologies used in the project.

### Footer

Site footer with social media links and copyright information.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

0BSD

## Author

Aleksandr Baikalov

- Website: [alexbaikalov.com](https://www.alexbaikalov.com/)
- GitHub: [@AlexanderBaikal](https://github.com/AlexanderBaikal)
- LinkedIn: [aleksandr-baikalov](https://www.linkedin.com/in/aleksandr-baikalov/)
