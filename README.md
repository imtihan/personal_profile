# Personal Profile Webpage

A clean, interactive personal profile webpage designed for easy hosting on **GitHub Pages**.

## What's Included

- Responsive one-page profile layout
- Hero section with summary and quick stats
- Experience timeline with interactive filtering tabs
- Projects and interests cards
- Light/Dark theme toggle (saved in browser)
- Simple structure (HTML/CSS/JS) with no build step

## Project Structure

- `index.html` – page markup
- `styles.css` – styling and responsive layout
- `script.js` – profile data + interactivity

## Customize Your Profile

Open `script.js` and update the `profileData` object with your real information from your LinkedIn PDF:

- `name`, `headline`, `summary`, `linkedin`
- `stats`
- `skills`
- `experience`
- `projects`
- `interests`

## Run Locally

Because this is a static page, you can run it with a local HTTP server:

```bash
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In your GitHub repository, go to **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Save and wait for deployment.
5. Your site will be available at:
   `https://<your-github-username>.github.io/<repository-name>/`

## Notes

- This project intentionally avoids frameworks for faster loading and simpler hosting.
- For richer branding, add a profile photo and social icon links in `index.html`.
