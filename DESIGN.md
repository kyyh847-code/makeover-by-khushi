# Design Brief

## Direction

Makeover By Khushi Kumawat — Premium luxury 3D animated portfolio website for celebrity bridal makeup artist with warm, feminine, celebratory aesthetic.

## Tone

Luxury/refined feminine elegance. Warm cream and terracotta palette with rose accents evokes high-end beauty brands (Charlotte Tilbury, MAC) targeting upscale bridal clientele.

## Differentiation

3D animated floating hero with blurry warm glow effects, celebrity positioning prominent throughout, floating WhatsApp/Instagram action buttons. Premium tech aesthetic with substantive content depth.

## Color Palette

| Token              | OKLCH           | Role                          |
| :----------------- | :-------------- | :---------------------------- |
| background         | 0.98 0.02 70    | Warm cream base               |
| foreground         | 0.18 0.04 40    | Deep warm brown text          |
| primary            | 0.48 0.15 35    | Warm terracotta CTA/accents   |
| accent             | 0.6 0.12 355    | Soft rose highlights          |
| card               | 0.99 0.01 70    | Cream surface                 |
| muted              | 0.92 0.02 70    | Soft neutral section bg       |
| border             | 0.88 0.025 70   | Subtle cream borders          |

## Typography

- Display: Fraunces — elegant serif for hero, section headings, testimonials
- Body: General Sans — clean sans for paragraphs, labels, UI copy
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold`, label `text-sm uppercase tracking-widest`, body `text-base md:text-lg`

## Elevation & Depth

Warm shadow hierarchy: subtle `shadow-warm` for cards, `shadow-warm-lg` for elevated hero elements, `glow-warm` utility for 3D accent glow. Blurry backdrop filters on glass surfaces. Depth through layered 3D animation and intentional z-stacking.

## Structural Zones

| Zone          | Background                    | Border                        | Notes                                     |
| :------------ | :---------------------------- | :---------------------------- | :---------------------------------------- |
| Header        | `bg-background` 0.98 0.02 70  | `border-b border-border`      | Sticky nav with subtle warm underline     |
| Hero          | `bg-primary/5` warm gradient  | —                             | 3D animated elements, blurry glow effects |
| Services      | `bg-background` alternating   | —                             | Card grid with `shadow-warm` borders      |
| Celebrity     | `bg-muted` 0.92 0.02 70       | —                             | Testimonials with rose accents            |
| Why Choose    | `bg-background` with counters | —                             | Animated number reveal, `slide-up`       |
| FAQ           | `bg-muted` accordion           | —                             | `accordion-up/down` animation            |
| Contact/Map   | `bg-primary/10` warm          | —                             | Full-width map, floating buttons nearby   |
| Footer        | `bg-primary` warm terracotta  | `border-t`                    | Warm brown base with light text           |

## Spacing & Rhythm

Spacer: `gap-8 md:gap-12` between major sections. Content grouping: 3-column card grid on desktop, 1 column mobile. Micro: `p-4` labels, `p-6` card interiors, `px-8 py-12` section padding. Breathing room for luxury feel.

## Component Patterns

- Buttons: `bg-primary text-primary-foreground rounded-lg py-3 px-6` with `hover:shadow-warm-lg transition-smooth`
- Cards: `bg-card rounded-lg shadow-warm p-6 border border-border/50` with `hover:shadow-warm-lg` on interaction
- Badges: `bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold` for labels
- Section headers: `font-display text-3xl md:text-5xl text-foreground tracking-tight mb-12`

## Motion

- Entrance: `animate-fade-in 0.6s ease-out` on scroll-triggered sections. `animate-slide-up` for card reveal.
- Hover: `transition-smooth` (0.3s cubic-bezier) on buttons, cards. `animate-float 3s infinite` on 3D hero elements.
- Decorative: `animate-glow-pulse 2s infinite` on accent highlights. `blur-glow` filter on 3D objects. Staggered animations per card (120ms offset).

## Constraints

- No bold/vibrant colors; all OKLCH values in warm undertone range (H: 35-70, C: 0.01-0.17)
- Blurry glow effects: only on hero 3D elements and accent highlights. Not on interactive elements.
- Typography: Fraunces display weight max `font-bold`, General Sans body weight consistent `font-normal` for readability
- Floating buttons (WhatsApp, Instagram) fixed on viewport edge, responsive position
- 3D animations via Three.js/React Three Fiber in hero; Motion library for CSS transitions
- All shadow colors warm-biased (OKLCH H~50-70) not cool greys

## Signature Detail

Warm terracotta glow halo around floating 3D portrait in hero section — 40px blur radius, soft opacity drop-shadow. Reinforces premium luxury aesthetic and celebrity positioning without overwhelming UI.
