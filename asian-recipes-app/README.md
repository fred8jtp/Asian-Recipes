# Asian Kitchen Delights

Interactive browser-based recipe collection focused on **chicken, pork and beef** (no seafood).

## Cuisines included
- Chinese (~25 mains)
- Japanese (~9)
- Thai (~9)
- Korean (~9)
- Vietnamese (~9)
- Large sides & appetizers section

Every recipe has:
- Full ingredient list
- Step-by-step directions
- Practical substitution suggestions

## Features
- Search by name or ingredient
- Filter by cuisine, protein, and type (main / side / appetizer)
- Recipe detail modal with print support
- Favorites saved in browser localStorage
- Fully responsive
- Pure static site – no backend, no build step

## How to view
Simply open `index.html` in any modern browser.

## How to publish
- **GitHub Pages**: push the folder to a repo and enable Pages
- **Netlify / Vercel / Cloudflare Pages**: drag-and-drop the folder or connect the repo
- Any static web host works

## Expanding later
All recipes live in `recipes.js` as a single array of objects.  
To add a new recipe, copy an existing object, change the fields, and give it a unique `id`.  
The UI will pick it up automatically.

## Structure
```
asian-recipes-app/
├── index.html
├── styles.css
├── recipes.js      ← all recipe data (easy to expand)
├── app.js          ← interactivity
└── README.md
```
