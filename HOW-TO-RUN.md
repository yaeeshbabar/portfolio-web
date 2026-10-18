# How to run Yaeesh's Portfolio 2.0

1. Install Node.js 18 or newer from https://nodejs.org
2. Unzip this folder and open a terminal inside it.
3. Install packages:
   npm install
4. Start it locally:
   npm run dev
   Then open the address it prints (usually http://localhost:5173).
5. Build for hosting:
   npm run build
   Upload the generated `dist` folder to Netlify or your host.

## Deploying on Vercel
Push this folder to a GitHub repo and import it in Vercel. The included
`vercel.json` tells Vercel to run `npm run build` and serve the `dist`
folder, so the "No Output Directory named 'build' found" error goes away.
If you set it up by hand: Framework Preset = Vite, Output Directory = dist.

## Editing content
All text, experience, skills and projects live in `src/data/portfolio.js`.
Add a project like this inside the `projects` array:

  { title: "My App", description: "...", tech: ["React", "Node.js"],
    image: "https://.../thumbnail.png", live: "https://...", github: "https://github.com/..." }

Project thumbnails live in `public/projects/`, experience logos in
`public/experience/`. The remaining images and videos in `public/img` and
`public/videos` are still the Zentry template's game art; replace them with
your own before going live.
