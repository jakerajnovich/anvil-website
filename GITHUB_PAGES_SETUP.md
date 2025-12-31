# GitHub Pages Deployment Guide for Anvil Propulsion Website

## Prerequisites
- Node.js 18+ installed
- pnpm package manager installed (`npm install -g pnpm`)
- Git installed

## Step 1: Configure Vite for GitHub Pages

Update `vite.config.ts` to set the correct base path:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: '/anvil-website/', // Replace with your repo name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
    },
  },
  server: {
    port: 3000,
  },
});
```

## Step 2: Update package.json Scripts

Add deployment scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "preview": "vite preview --host",
    "predeploy": "pnpm build",
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.1.0"
  }
}
```

## Step 3: Install Dependencies

```bash
cd /path/to/anvil-website
pnpm install
pnpm add -D gh-pages
```

## Step 4: Build the Project

```bash
pnpm build
```

This will create a `dist` folder with the production build.

## Step 5: Deploy to GitHub Pages

### Option A: Using gh-pages package (Recommended)

```bash
pnpm deploy
```

This will automatically:
- Build your project
- Create/update the `gh-pages` branch
- Push the built files to GitHub

### Option B: Manual Deployment

```bash
# Build the project
pnpm build

# Navigate to dist folder
cd dist

# Initialize git (if not already)
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push -f git@github.com:jakerajnovich/anvil-website.git main:gh-pages

cd ..
```

## Step 6: Configure GitHub Repository Settings

1. Go to your repository: https://github.com/jakerajnovich/anvil-website
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

## Step 7: Wait for Deployment

GitHub will automatically deploy your site. This usually takes 1-3 minutes.

Your site will be available at:
**https://jakerajnovich.github.io/anvil-website/**

## Step 8: Update Router Configuration

Since GitHub Pages serves from a subdirectory, update the router base in `client/src/App.tsx`:

```typescript
import { Router } from "wouter";

// Add base prop to Router
<Router base="/anvil-website">
  {/* routes */}
</Router>
```

## Troubleshooting

### Issue: 404 on page refresh
**Solution**: GitHub Pages doesn't support client-side routing by default. Add a `404.html` in the `public` folder that redirects to `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Anvil Propulsion</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/anvil-website'">
  </head>
  <body></body>
</html>
```

### Issue: Assets not loading
**Solution**: Ensure `base` in `vite.config.ts` matches your repository name.

### Issue: CSS not applying
**Solution**: Clear browser cache or use hard refresh (Ctrl+Shift+R / Cmd+Shift+R).

## Custom Domain (Optional)

If you want to use a custom domain like `anvilpropulsion.com`:

1. Add a `CNAME` file to `client/public/` with your domain:
   ```
   anvilpropulsion.com
   ```

2. Configure DNS records with your domain provider:
   - Type: `A` Record
   - Host: `@`
   - Value: GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. Add `www` subdomain:
   - Type: `CNAME`
   - Host: `www`
   - Value: `jakerajnovich.github.io`

4. In GitHub Settings → Pages, add your custom domain

5. Update `vite.config.ts` base to `/`:
   ```typescript
   base: '/',
   ```

## Continuous Deployment

To automatically deploy on every push to main:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Quick Commands Reference

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Deploy to GitHub Pages
pnpm deploy
```

## Notes

- The website is a static React app using Vite
- All images are in `client/public/images/`
- The site uses dark theme by default
- Fonts are loaded from Google Fonts CDN
- No backend server needed for GitHub Pages deployment
