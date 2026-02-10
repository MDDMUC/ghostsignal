# Ghostsignal Figma variables + token structure (summary)

Source: [ghostsignal design system (Figma)](https://www.figma.com/design/6nDMQnD7o9MMMSGzNAzXRc/ghostsignal-design-system?node-id=3002-312&m=dev)

This document summarizes:

- The **Figma Variables panel** structure (collections, modes, alias links) from the local export at `apps/web/public/variables/`
- The **Figma styles** we observed via MCP (text styles, effect styles, etc.)
- How this relates to the repo’s current token implementation in `apps/web/src/styles/tokens.css`

## Variables export format (what’s in `apps/web/public/variables/`)

The files are DTCG-style JSON (“Design Tokens”):

- `"$type"`: token type (`color`, `number`, `string`)
- `"$value"`: resolved value (colors include `hex`, numeric are numbers, strings are strings)
- `"$extensions"`: Figma metadata:
  - `com.figma.variableId`: the variable’s unique ID in Figma
  - `com.figma.scopes`: where it’s intended to be used (e.g. `FONT_SIZE`, `CORNER_RADIUS`, `GAP`)
  - `com.figma.aliasData`: **alias connection** (variable → variable), including:
    - `targetVariableSetName` and `targetVariableSetId` (the collection being referenced)
    - `targetVariableName` and `targetVariableId` (the referenced variable)
  - `com.figma.modeName`: the mode represented by that file (stored at the bottom under `"$extensions"`)

## Variable collections and modes (as exported locally)

These map 1:1 to the subfolders under `apps/web/public/variables/`:

- **`mode/`** (theme/semantic collection)
  - Modes: `light mode`, `dark mode`
  - Contains semantic tokens like `background`, `foreground`, `border`, `muted-foreground`, `chart-*`, `sidebar-*`
  - Also includes some non-color foundations like `radius-*`, `border-width`, `stroke-width`
- **`tw_colors/`** (Tailwind-like primitive palette)
  - Mode: `Mode 1`
  - Examples: `white`, `black`, `neutral/*`, plus a `brand/*` group
- **`rdx_colors/`** (Radix-like primitive palette)
  - Modes: `light mode`, `dark mode`
  - Nested families like `gray/1..12`, each step includes `$description` usage guidance
- **`tokens/`** (numeric “source of truth” scale)
  - Mode: `Mode 1`
  - A flat set of numeric constants (e.g. `0`, `2`, `4`, …, `9999`, plus fractional/negative values)
- **Derived Tailwind utility collections** (mostly “mappers”)
  - Mode: `Mode 1`
  - These collections define Tailwind-style names (e.g. `gap-0`, `p-0`, `space-x-0`, `rounded-sm`) that typically **alias back** to `tokens/` (and sometimes another collection named `Tokens`, see below):
    - `tw_border-radius/`
    - `tw_border-width/`
    - `tw_font/` (font families + font sizes; sizes alias to `tokens/`)
    - `tw_gap/`
    - `tw_height/`
    - `tw_margin/`
    - `tw_max-height/`
    - `tw_max-width/`
    - `tw_opacity/`
    - `tw_padding/`
    - `tw_space/`
    - `tw_stroke-width/`

### Known collection IDs (from alias targets)

The export does not include a single “this file belongs to VariableCollectionId X” header, but alias targets **do** include collection IDs. The following IDs were observed in `com.figma.aliasData`:

| Collection name (as referenced) | Local folder | VariableCollectionId |
| --- | --- | --- |
| `tw/colors` | `tw_colors/` | `VariableCollectionId:4b2c88f1de7c42c42bf8d1002f761a4fd2d0d699/-1:-1` |
| `rdx/colors` | `rdx_colors/` | `VariableCollectionId:f5529a947a1277563ac31083793e0d7973cc327a/-1:-1` |
| `tokens` | `tokens/` | `VariableCollectionId:359446b3ea25cf5438ee550d7ac8655adf9bd3d8/-1:-1` |
| `Tokens` (capital T) | *(not exported here)* | `VariableCollectionId:b504a2fcc35e0d4644262d423ce07ac33c42c567/229:1` |

## Collection dependency graph (the “connection points”)

From `com.figma.aliasData.targetVariableSetName` usage in the export, the collection-level dependencies are:

- **`mode` → `tw/colors`**
  - Example pattern: `mode.background` aliases to `tw/colors.white`
- **`mode` → `rdx/colors`**
  - Example pattern: `mode.chart-*` aliases to `rdx/colors.blue/*` etc.
- **`mode` → `tokens`**
  - Example pattern: `mode.radius-*`, `mode.border-width`, `mode.stroke-width` alias to numeric tokens
- **`tw_*` (utilities) → `tokens`**
  - Example pattern: `tw_font.size.*` aliases to numeric tokens
  - Example pattern: `tw_opacity.*` aliases to numeric tokens
- **`tw_*` (utilities) → `Tokens` (capital T)**
  - Several `tw_*` collections also alias to a collection named **`Tokens`** (capital T) with a different `VariableCollectionId` than `tokens`.
  - This `Tokens` collection is **not present** as a folder in the local export, but is referenced heavily by `tw_gap`, `tw_padding`, `tw_space`, and parts of `tw_border-radius`.

### Why the `Tokens` vs `tokens` split matters

Because aliases are the “connection points”, having two different target collections (`Tokens` and `tokens`) means:

- Some utilities resolve from a collection we *don’t currently have exported* (harder to audit / keep in sync)
- The design system has an implicit dependency on another variable collection (possibly from another library, an older collection, or a renamed collection)

If the goal is “single source of truth”, it would be worth normalizing aliases so utilities point to one numeric collection, or exporting the missing `Tokens` collection too.

## Naming quirks (worth knowing)

- **Comma decimals in names**: many utility tokens use comma decimals in the *token name* (e.g. `gap-0,5`, `space-x-0,5`). The resolved values are normal numbers (e.g. `2`).
- **Mode naming**: palette collections use `Mode 1`, while theme/palette use `light mode` / `dark mode`.
- **Scopes are meaningful**: tokens declare intended usage (e.g. `FONT_SIZE`, `CORNER_RADIUS`, `GAP`). This is helpful when mapping to code tokens.

## What we can directly observe from the MCP style export (styles, not Variables)

The MCP export also includes style-like values under `globalVars.styles` (generated keys), and nodes reference them (text styles, effect styles, layout presets). Those are separate from Variables-panel collections, but still useful for implementation.

### Text styles (examples observed)

These behave like typography tokens (font family/weight/size/line-height):

- `Text-8xl/Bold` (Inter, 700, 96px, 1.0em)
- `Text-xl/Bold` (Inter, 700, 20px, 1.4em)
- `Text-lg/Bold` (Inter, 700, 18px, ~1.56em)
- `Text-sm/Medium` (Inter, 500, 14px, ~1.43em)
- `Text-4xl/Semi Bold` (Inter, 600, 36px, ~1.11em)
- `Text-2xl/Semi Bold` (Inter, 600, 24px, ~1.33em)
- `Text-base/Regular` (Inter, 400, 16px, 1.5em)

### Color/fill tokens (examples observed)

The export shows resolved hex colors for many fills:

- `#FFFFFF` (white surface/background)
- `#030712` (near-black foreground used in the home hero)
- `#0A0A0A` (near-black text in library pages)
- `#737373` (muted text)
- `#F5F5F5` (light muted surface)
- Strokes often use `#E5E5E5`

These appear as generated keys like `fill_*` and `stroke_*` in the export.

### Effect styles (examples observed)

- `Box Shadow/shadow-xs`: `0px 1px 2px 0px rgba(0, 0, 0, 0.1)`

### Layout styles (examples observed)

Many frames reference generated layout presets like `layout_*` (flex direction, gap, padding, fixed sizes).

These act like spacing/layout “tokens”, but are not Variables-panel collections; they’re export-time style structs.

## Evidence of how tokens get applied (observed usage)

From the `website → home` frame:

- Nav link text uses `Text-lg/Bold` with a black fill (`#000000` in the export)
- Hero headline uses `Text-8xl/Bold` with a dark fill (`#030712`)
- Buttons are component instances with:
  - border radius (e.g. `10px`)
  - stroke (e.g. `#E5E5E5`)
  - effect style `Box Shadow/shadow-xs`

This indicates that (in code terms) typography + color + radius + shadow tokens combine at component level.

## Repo token implementation today (code)

Current shipped tokens live at:

- `apps/web/src/styles/tokens.css`

It defines a small set of CSS custom properties:

- **Foundations**: `--gs-surface-*`, `--gs-text-*`, `--gs-accent-*`
- **Semantic aliases**: `--background`, `--foreground` (pointing at foundations)
- **Mode switch**: `.theme-dark { ... }` overrides the foundations, and re-aliases semantic tokens
- **Tailwind bridge**: `@theme inline { --color-... }` mapping to CSS vars

This already mirrors the “semantic aliases + light/dark modes” concept described in the Figma file.
