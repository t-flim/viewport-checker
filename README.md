# Viewport Checker

Small static page that shows the current viewport width/height and the active responsive breakpoint. The background color changes at each breakpoint so you can quickly see what range you’re in while resizing.

## Live Demo

https://thefulim.my/viewport-checker/

## What It Shows

- Viewport size: `Width: ___px, Height: ___px`
- Breakpoint label: `xs | sm | md | lg | xl | xxl`

On browsers that support it, it uses `window.visualViewport` for more accurate mobile viewport measurements.

## Breakpoints

| Label | Min width (px) | Background color |
| --- | ---: | --- |
| xs | 0 | maroon |
| sm | 576 | royalblue |
| md | 768 | seagreen |
| lg | 992 | salmon |
| xl | 1200 | rebeccapurple |
| xxl | 1400 | black |

## Run It

Pick one:

- Open `index.html` directly in a browser.
- Serve the folder locally (recommended for consistent behavior):

```bash
python -m http.server 4173
```

Then open `http://localhost:4173/`.

## Files

- `index.html`: markup for the display panel
- `styles.css`: breakpoint-based background colors + layout styling
- `script.js`: viewport/breakpoint calculation and live updates
