# Deploying the site (GitHub Pages)

## Is the code broken?

**No.** The app builds successfully. The site wasn’t working because the **built** app (the `dist/` folder) was never being deployed to GitHub Pages.

## Which branch should I use?

- **`master`** — Use this for all your code. Push your changes here.
- The **website** is published by GitHub Actions from `master`. You do not need a separate branch for the site.

## One-time setup (if the site still doesn’t work)

1. **Turn on GitHub Pages from Actions**
   - Open your repo: **https://github.com/curry-conqueror/NSTEM_Final**
   - Go to **Settings → Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).

2. **Push the workflow**
   - Commit and push the new workflow file (`.github/workflows/deploy-pages.yml`):
   ```bash
   git add .
   git commit -m "Add GitHub Actions deploy to Pages"
   git push origin master
   ```

3. **Wait for the first deploy**
   - Go to the **Actions** tab. The “Deploy to GitHub Pages” workflow should run.
   - When it finishes, the site will be at: **https://curry-conqueror.github.io/NSTEM_Final/**

## After setup

- Every push to **master** will trigger a new build and deploy.
- You don’t need to run `npm run build` or `gh-pages` yourself.
