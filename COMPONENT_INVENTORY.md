# Portfolio Component Inventory & Preservation Log

This log tracks all components from the existing portfolio before and during the redesign revamp.
Each component is evaluated for preservation in Storybook, UX/UI improvements, and whether it fits into the new design system.

---

## 1. Finalized Components (Saved & Configured in Storybook)

| Component | Category | Storybook Path | Status | Notes / Preservation Value |
| :--- | :--- | :--- | :--- | :--- |
| **PrimaryButton** | Helper / Atom | `UI/PrimaryButton` | **Finalized** | Signature warm golden-amber CTA button (`#f4bc14`). Locked-in 65ms ease-out snap-fade hover ball, zero-rerender mouse tracking, full WCAG keyboard navigation (`:focus-visible`), single accessible text node, flexbox layout, bold `#000000` Lucide icons with 2.35px stroke, and solid muted disabled state (`#cca327`). |
| **LiquidGlassPanel** | Helper / Molecule | `UI/LiquidGlassPanel` | **Finalized** | Glassmorphism panel using dynamic SVG displacement filter with chromatic aberration and blur. Highly distinctive visual asset. |
| **SectionTitle** | Helper / Atom | `UI/SectionTitle` | **Finalized** | Infinite-scroll marquee title header with text gradient clipping and configurable speed/direction. |
| **Experience** | Feature Section | `Sections/Experience` | **Finalized** | Modern timeline layout with company badge, role, date, bullet descriptions, and skill tags (Ukudala & Tokyo Coding Club). |

---

## 2. Components Queued for Review & Storybook Cataloging

### A. UI Helpers & Atoms
* [ ] **RippleEffect** (`src/helperComponents/RippleEffect/`) - Interactive liquid ripple canvas effect.
* [ ] **LoadingScreen** (`src/helperComponents/LoadingScreen/`) - Animated splash screen with progress percentage.
* [ ] **ProjectModal** (`src/helperComponents/ProjectModal/`) - Modal popup for detailed case-study inspection.
* [ ] **Carousel** (`src/helperComponents/Carousel/`) - Horizontal scrolling carousels for projects, skills, and art.
* [ ] **Hamburger** (`src/helperComponents/Hamburger/`) - Mobile navigation toggle with icon morphing.
* [ ] **LetsTalk** (`src/helperComponents/LetsTalk/`) - Contact form dialog with interactive inputs and validation.
* [ ] **AnimatedSection** (`src/helperComponents/AnimatedSection/`) - Scroll-triggered opacity and translate wrapper.
* [ ] **ButtonLoadingAnimation** (`src/helperComponents/ButtonLoadingAnimation/`) - Micro-spinner for button actions.

### B. Major Page Sections
* [ ] **Navbar** (`src/Components/Navbar/`) - Floating liquid-glass navbar with navigation links and mobile drawer.
* [ ] **Hero** (`src/Components/Hero/`) - Intro banner with headline, avatar/graphics, and social links.
* [ ] **Skills** (`src/Components/Skills/`) - Categorized tech stack grid with filter tabs.
* [ ] **Projects** (`src/Components/Projects/`) - Featured project showcase cards.
* [ ] **Art** (`src/Components/Art/`) - Creative graphic design and artwork gallery.
* [ ] **Footer** (`src/Components/Footer/`) - Closing section with contact links and copyright.

---

## 3. Design Tokens & Core Theme
* **Primary Accent**: `#f4bc14` (Warm Golden Amber — unified midpoint between yellow `#f4ce14` and orange `#f4a914`)
* **Background Tone**: Dark theme (`#0d0d0d` / `#0f0f0f` with frosted glass overlays)
* **Typography**: `'Poppins', sans-serif`
