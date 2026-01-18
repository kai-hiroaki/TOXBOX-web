# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language

Respond in Japanese.

## Project Overview

TOXBOX-web is a static website for a TouchDesigner VJ tool. It combines:
- Landing page (LP) with product promotion via Booth marketplace
- Technical documentation using Starlight
- Releases page (scaffolded, future GitHub API integration)

## Development Commands

All commands run from `toxbox-site/` directory:

```bash
npm ci              # Install dependencies (clean install)
npm run dev         # Start dev server at http://localhost:4321
npm run build       # Build static site to dist/
npm run preview     # Preview production build locally
```

## Architecture

**Tech Stack**: Astro 5.x + Starlight + Sharp (image processing)

**Directory Structure**:
- `toxbox-site/` - Main Astro project (build target for GitHub Pages)
- `docs/` - Internal development documentation (not deployed)

**Key Files**:
- `toxbox-site/astro.config.mjs` - Astro/Starlight config, sidebar definition
- `toxbox-site/src/pages/` - Route pages (file-based routing)
- `toxbox-site/src/content/docs/docs/` - Starlight documentation content (MDX/MD)

**Environment-Aware Deployment**:
The config reads `ASTRO_SITE` and `ASTRO_BASE` env vars for GitHub Pages subpath hosting. These are set by the deploy workflow.

## Important Guidelines

- **Public vs Internal Docs**: User-facing docs go in `toxbox-site/src/content/docs/`. The `docs/` folder at repo root is internal/non-public.
- **Build Target**: Only `toxbox-site/` is deployed to GitHub Pages.
- **Commit Messages**: Use English for clarity and to avoid encoding issues.
- **Deploy Workflow**: `.github/workflows/deploy.yml` deploys on push to `main`. Make changes carefully.
- **GitHub Link Placeholder**: `astro.config.mjs` contains `<OWNER>/<REPO>` placeholder that needs updating.
- **Video Files**: Excluded from git via `.gitignore` (large hero video assets).
