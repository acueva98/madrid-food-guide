# Madrid Food Guide

A shortlist of Madrid restaurants from a friend's recommendations: per-person prices, links, filters by price / type / area, favorites, and a sketch map of central Madrid (same approach as Cambridge Eats: an inline SVG with an equirectangular projection, no map tiles or API keys).

Single static page: `index.html`. No build step.

## Run locally
Open `index.html` in a browser, or `npx serve .`

## Deploy
Import the repo in Vercel with Framework Preset **Other**, no build command, output directory `.` (root).

## Editing
- Restaurants live in the `DATA` array.
- Map positions live in `GEO` as `[lat, lng]`; add a third value `1` when only the street/area is known (drawn as a hollow pin). Names missing from `GEO` show "Not on map".
