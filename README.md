# Web Fundamentals Accordion

A small React + Vite app that presents a clean, interactive accordion for core web development topics: HTML, CSS, and JavaScript.

## Overview

This project is a simple learning-focused UI that lets users expand and collapse sections to reveal short explanations of each topic. It uses accessible accordion behavior with keyboard-friendly buttons and ARIA attributes.

## Features

- Expand/collapse individual content panels
- Clear visual hierarchy with an editorial-style design
- Responsive layout for desktop and mobile screens
- Accessible interactions using `aria-expanded`, `aria-controls`, and `role="region"`
- Lightweight React implementation with Vite for fast local development

## Tech Stack

- React 19
- Vite
- CSS for styling and responsive layout

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure

```text
src/
  App.jsx
  App.css
  accordian.jsx
  main.jsx
```

The `Accordion` component manages the open/closed state for each section and renders the content panels.

## Notes

This app is intended as a front-end UI exercise and can be extended with more topics, animations, or a single-open/always-open accordion pattern.
