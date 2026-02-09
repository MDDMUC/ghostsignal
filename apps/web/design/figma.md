# Figma → Code workflow

This project is set up to take design decisions from Figma and encode them as:

- CSS variables + Tailwind theme tokens in `src/styles/tokens.css`
- Component primitives in `src/components/ui/`
- 3D assets in `public/models/` + `public/textures/`

When we start pulling designs from Figma (via MCP), the goal is to:

1. Define/confirm color, typography, spacing, and radii tokens.
2. Translate repeated UI patterns into reusable components.
3. Keep heavy visuals (3D/particles/liquid) isolated under `src/three/` and loaded client-side only.

