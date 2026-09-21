# Ajith Kumar — Unity Game Developer Portfolio

A responsive React + TypeScript portfolio with a photo-free introduction, selected games, a filterable project collection, dedicated case studies, experience, and contact details.

## Development

- `npm start` — preview at http://localhost:3000/ajithkumar/
- `npm test -- --watchAll=false --runInBand` — run the interaction tests
- `npm run build` — create the production build
- `npm run deploy` — build and publish to the existing GitHub Pages repository

## Editing content

- `src/data/projects.ts`: all 11 project records, screenshots, descriptions, contributions, technologies, and store links.
- `src/data/career.tsx`: experience, education, and resume skills.
- `src/data/site.ts`: email, social links, resume PDF path, category names, and project URL slugs.
- `src/pages/Prologue.tsx`: introduction, selected projects, and about text.
- `src/App.css`: responsive design, typography, colors, and restrained interactions.
- `public/assets/`: local project images and resume PDF.

Project routes derive from titles. Changing a project title changes its URL. GitHub Pages uses `/ajithkumar/`; `public/404.html` and the restore script in `public/index.html` support direct links and refreshes.

## Contact

The contact form opens a prefilled draft in the visitor’s email app. It does not claim to send or store messages. A working email client is needed; the direct address and copy button remain available.

## Tests

Tests cover the photo-free homepage, project filtering and case-study navigation, unique project URLs, console links, contact clipboard errors, missing projects, and the GitHub Pages base path. Jest mappings support React Router 7 with the existing Create React App test runner.
