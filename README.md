# Atlas Blocks Showcase

A premium Gutenberg showcase block for displaying custom WordPress blocks, products, portfolio pieces, or featured content in a polished split-panel layout.

**Atlas Blocks Showcase** combines a styled content panel with an image carousel, giving site owners a reusable way to present blocks or visual projects with a high-end editorial feel.

---

## Overview

Atlas Blocks Showcase is a custom Gutenberg block built for the Atlas Blocks collection. It is designed to help display custom blocks, website sections, portfolio items, product previews, or visual case studies directly inside the WordPress editor.

The block uses a two-part layout:

- A left content section for the title and description
- A right carousel section for screenshots, previews, or feature images

The front-end preview uses a large rounded pill-style container, while the editing experience uses a cleaner rectangular editor panel so content can be managed more easily.

---

## Screenshot

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/84873520-ea5d-4c92-a6c2-b9691a357c38"
    alt="Main Screenshot Pill Mode"
    width="900"
  />
</p>

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/1a4ff458-3f78-42ee-b881-ad55b7193434"
    alt="Main Screenshot Square Mode"
    width="440"
  />
  <img
    src="https://github.com/user-attachments/assets/371d2188-1900-4d09-8368-30e6b3ccb093"
    alt="Main Screenshot Editor Mode"
    width="440"
  />
</p>

---

## Features

- Custom Gutenberg block for WordPress
- Premium split-panel showcase layout
- Left-side title and description area
- Right-side image carousel
- Previous and next carousel controls
- Carousel navigation that loops through uploaded images
- Separate editor mode and preview mode
- Pill-shaped visual preview
- Optional right side square-shaped adjustment for varied content
- Rectangular editing panel for easier content management
- Upload and manage custom images from the block editor
- Optional image fit mode to prevent images from being cropped
- Custom left-side background color
- Custom right-side carousel background color
- CSS variable support for dynamic front-end colors
- Responsive layout for smaller screens
- Built with React, SCSS, and `@wordpress/scripts`

---

## Block Details

| Item | Details |
| --- | --- |
| Block name | `atlas-blocks/showcase` |
| Display name | `Atlas Blocks Showcase` |
| Suggested repo name | `atlas-showcase` |
| Block type | Custom Gutenberg block |
| Main use case | Showcase custom blocks, screenshots, features, or portfolio items |
| Layout style | Split-panel showcase with image carousel |

---

## Editor Experience

The block is designed so the polished preview and the editing interface are separated.

In preview mode, the user sees the finished showcase design with the rounded pill-style layout. In editing mode, the block switches to a more practical rectangular panel with form controls for managing the content.

This is so the user can know what to expect on the front end while making it easier to edit inside Gutenberg.

### Editable Content

The block supports controls for:

- Showcase title
- Showcase description
- Carousel images
- Image display mode
- Right side display setting (square or rounded)
- Left-side background color
- Right-side background color

---

## Carousel Behavior

The carousel supports multiple uploaded images and uses previous/next buttons to cycle through slides.

Navigation wraps around automatically:

- Clicking next on the last image returns to the first image
- Clicking previous on the first image returns to the last image

The editor preview uses React state to manage the active slide, while the front end can use a small `view.js` script to make the saved carousel interactive outside the editor.

---

## Image Fit Modes

The block includes an image fit option so users can choose how carousel images are displayed.

### Cover Mode

Images fill the carousel area and may be cropped slightly to preserve the design.

### Contain Mode

Images are scaled down so the full image remains visible inside the carousel area. This is useful for screenshots, block previews, UI mockups, or images with important edges that should not be cut off.

---

## Custom Background Colors

The block supports separate background colors for each side of the showcase:

- Left side color
- Right side color

These are output as CSS variables so the editor preview and front end can stay consistent.

---

## Suggested File Structure

```txt
atlas-showcase/
├── build/
├── src/
│   ├── block.json
│   ├── edit.js
│   ├── save.js
│   ├── index.js
│   ├── view.js
│   ├── editor.scss
│   └── style.scss
├── atlas-showcase.php
├── package.json
├── README.md
└── .gitignore
```

---

## Development Setup

Clone the repository into your local WordPress plugins directory:

```bash
cd wp-content/plugins
git clone https://github.com/Atlas-Blocks/atlas-showcase.git
cd atlas-showcase
```

Install dependencies:

```bash
npm install
```

Start the development build:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

Then activate the plugin in the WordPress admin dashboard.

---

## Styling Notes

The showcase layout uses BEM-style class names and SCSS partials for editor and front-end styling.

Key styling ideas include:

- A large pill-shaped preview container
- A neutral base wrapper so editor mode is not forced into the pill shape
- Separate preview and editor wrappers
- Rounded right-side carousel edges
- Smooth shadows and inset highlights for depth
- `object-fit: cover` for full-bleed images
- `object-fit: contain` for uncropped images
- Responsive stacking on smaller screens

Important class patterns include:

```txt
.atlas-blocks-showcase
.atlas-blocks-showcase__preview-shell
.atlas-blocks-showcase__preview-mode
.atlas-blocks-showcase__editor-mode
.atlas-blocks-showcase__content
.atlas-blocks-showcase__carousel
.atlas-blocks-showcase__carousel-inner
.atlas-blocks-showcase__image
.atlas-blocks-showcase__image--contain
.atlas-blocks-showcase__button
.atlas-blocks-showcase__button--prev
.atlas-blocks-showcase__button--next
```

---

## Front-End Interactivity

The saved block outputs all carousel slides and marks the current slide with an active class. A front-end script can then handle the previous and next buttons.

Expected behavior:

- Find each showcase carousel on the page
- Get all slides inside that carousel
- Get the previous and next buttons
- Skip setup if there is only one slide
- Toggle the active slide when a button is clicked
- Wrap around when reaching the beginning or end

---

## Roadmap

Planned or possible improvements:

- Drag-and-drop image reordering
- Autoplay carousel option
- Carousel transition effects
- Button text and button URL fields
- Additional layout presets
- More advanced color and gradient controls
- Border radius controls
- Spacing controls
- Mobile-specific layout options
- Additional showcase templates
- Pattern/demo library for Atlas Blocks products

---

## Use Cases

Atlas Blocks Showcase can be used to display:

- Custom Gutenberg blocks
- WordPress plugin features
- Portfolio projects
- Website sections
- Product previews
- UI screenshots
- Case studies
- Visual feature comparisons

---

## Tech Stack

- WordPress
- Gutenberg Block Editor
- React
- JavaScript
- SCSS
- `@wordpress/scripts`

---

## Author

Created by **Atlas Blocks**. Sole developer: Evan Hatfield.

Atlas Blocks builds individual custom Gutenberg blocks designed to make WordPress pages more flexible, visual, and engaging.

---

## License

```txt
MIT License
```
