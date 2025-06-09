Project Overview
This project is a responsive web layout built using HTML5 and CSS3 (Flexbox). The goal is to replicate a clean, accessible structure inspired by a Figma design, maintaining responsiveness across desktop and mobile screens. The layout uses semantic tags (<header>, <main>, <footer>) and flex container behavior to ensure a flexible and user-friendly experience

Structure Breakdown
HTML Elements
<header>: Contains the logo and navigation bar.

<main>: Flex container with two children:

<article>: Main content area.

<footer>: Footer content and external link.

CSS Highlights
Flexbox used for layout:

body: display: flex; flex-direction: column;

main: display: flex; flex-direction: row; flex: auto;

article: flex: 2; overflow-y: auto;

aside: flex: 1; overflow-y: auto;

Mobile-friendly class: works_on_smartphone is included on the <body> to gracefully degrade the layout on smaller screens.

Fonts & Design
To match the Figma design precisely, you may need the following fonts:

Source Sans Pro – Download from Google Fonts

Spin Cycle OT – [Alternative sources may be needed]

ℹNote: If you don't have the fonts installed locally, the fallback system fonts will be used.

Float Precision
Some Figma spacing or size values may include decimals. You can round these values for practical CSS implementation, unless absolute precision is required.
