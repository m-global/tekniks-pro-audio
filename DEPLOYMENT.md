# Tekniks Pro Audio - GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

## 🚀 Deployment Setup

### Automatic Deployment (Recommended)

The site will automatically deploy to GitHub Pages whenever you push to the `main` branch. The deployment is handled by GitHub Actions.

**Your site will be available at:** `https://[your-username].github.io/tekniks-pro-audio/`

### Manual Deployment Steps

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor the deployment:**
   - Go to the "Actions" tab in your repository
   - You should see a workflow called "Deploy to GitHub Pages"
   - Wait for it to complete successfully

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (with GitHub Pages base path)
npm run build:prod

# Preview production build locally
npm run preview
```

## 📁 Project Structure

- `.github/workflows/deploy.yml` - GitHub Actions workflow for deployment
- `vite.config.ts` - Vite configuration with GitHub Pages base path
- `public/.nojekyll` - Tells GitHub Pages not to process files with Jekyll
- `dist/` - Production build output (generated automatically)

## 🔧 Configuration Details

- **Base Path:** `/tekniks-pro-audio/` (automatically set for production builds)
- **Build Command:** `npm run build:prod`
- **Deploy Directory:** `dist/`
- **Branch:** `main` (triggers deployment)

## 🐛 Troubleshooting

If deployment fails:

1. Check the GitHub Actions logs in the "Actions" tab
2. Ensure all dependencies are properly installed
3. Verify the build works locally with `npm run build:prod`
4. Make sure GitHub Pages is enabled in repository settings

## 📝 Notes

- The site uses React Router with BrowserRouter, which works perfectly with GitHub Pages
- All assets are properly configured with the correct base path
- The `.nojekyll` file ensures GitHub Pages doesn't try to process the files with Jekyll
