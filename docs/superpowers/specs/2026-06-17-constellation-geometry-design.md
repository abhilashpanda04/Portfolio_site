# Constellation Geometry — Design Spec

**Date:** 2026-06-17  
**Project:** Astro portfolio site (`Portfolio_site/`)  
**Goal:** Add subtle animated generative SVG geometry behind the homepage hero to reinforce the AI/fintech positioning without competing with content.

## Approach

A pure-SVG constellation layer composed of drifting nodes and dynamic connecting lines. It lives behind the hero headline and responds to the existing light/dark theme system.

## Visual Design

- **Canvas:** Fixed-position SVG inside the hero section, full width and full hero height, `z-index: -1`.
- **Nodes:** 2–4px circles rendered in `var(--text-muted)` at 40% opacity. Count: 28–32 nodes.
- **Lines:** 1px strokes rendered in `var(--accent)` at 12% opacity, drawn between any two nodes within a threshold distance (120–160px). Lines fade in/out as nodes drift.
- **Motion:** Each node has a slow, independent velocity vector (0.05–0.15 px/frame using `requestAnimationFrame`). Nodes wrap at canvas edges. Motion is subtle and non-interactive.
- **Reduced motion:** If `prefers-reduced-motion: reduce` is active, the entire constellation layer is hidden.

## Theme Behavior

Color values are read from CSS custom properties (`--text-muted`, `--accent`) so the layer updates automatically when `data-theme` changes. No JS theme listener is required for the geometry itself.

## Integration

- New component: `src/components/Constellation.astro` — a thin wrapper that renders the SVG and references the init hook.
- Logic lives in `public/main.js` alongside existing client code, inside the existing IIFE. This avoids the Astro inline-script `document`/`window` build issues observed earlier.
- Added to `src/pages/index.astro` inside the hero section only.

## Constraints

- No external libraries.
- No inline `<script>` blocks in components; all client JS in `public/main.js`.
- Must not interfere with the existing hero orb, noise overlay, nav, or CTAs.
- Must pass `npx astro check` and `npm run build`.

## Acceptance Criteria

1. Constellation renders behind the homepage hero on load.
2. Theme toggle updates node and line colors without a page reload.
3. `prefers-reduced-motion: reduce` disables the layer completely.
4. Geometry is responsive to viewport width changes.
5. Build remains green: 0 Astro type errors, 4 static pages built.
