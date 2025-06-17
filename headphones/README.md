# Responsive Web Page Project

This project is a responsive web page built with HTML and CSS, designed to adapt seamlessly across desktop and mobile screen sizes. The page layout, styles, and interactions are based on a Figma design, and aim to deliver a smooth user experience with pixel-perfect alignment and responsive behavior.

## Features

- **Responsive Layout:** Automatically adapts to mobile view at screen widths ≤ 480px.
- **Max Content Width:** The main content is centered and constrained to a maximum width of `1000px`.
- **Hover/Active States:**
  - All links: `#FF6565` on hover and active.
  - Buttons: `opacity: 0.9` on hover and active.
- **Custom Fonts:** Uses `Source Sans Pro` and `Spin Cycle OT`. (See font installation section.)

## Design Source

This layout is based on a Figma design. Ensure font fidelity by installing the following:

- [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro)
- [Spin Cycle OT](https://www.fonts.com/font/spin-cycle/spin-cycle-ot) *(You may need to manually install this font if it’s not pre-installed.)*

## Layout Notes

- Some spacing and sizing values were provided as floating point numbers; they’ve been reasonably rounded for better CSS compatibility.
- The page layout is built using semantic HTML5 elements and flexbox/grid for responsive behavior.

##  Mobile Responsiveness

When the viewport width is `480px` or less:
- Layout switches to a mobile-friendly design
- Content stacks vertically
- Navigation and text elements adjust for readability and usability on smaller screens

##  How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Dilahk900/alx_html_css.git
   cd your-repo