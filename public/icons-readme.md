# Clipper Favicon and Icon Files

This directory contains the favicon and icon files for the Clipper application.

## Required Files (to be generated):

- favicon-16x16.png (16x16 pixels)
- favicon-32x32.png (32x32 pixels)
- apple-touch-icon.png (180x180 pixels)
- android-chrome-192x192.png (192x192 pixels)
- android-chrome-512x512.png (512x512 pixels)

## Design Guidelines:

- Use the purple to pink gradient (#8B5CF6 to #EC4899)
- Include a video/clip icon symbol
- Maintain brand consistency
- Ensure visibility at small sizes

## Current Files:

- favicon.svg - Scalable vector version
- site.webmanifest - PWA manifest file

To generate PNG versions from the SVG, you can use tools like:

- Online converters (favicon.io, realfavicongenerator.net)
- ImageMagick: `convert favicon.svg -resize 32x32 favicon-32x32.png`
- Design tools (Figma, Sketch, Photoshop)
