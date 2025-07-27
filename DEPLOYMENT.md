# SMOPS-2026 Deployment Guide

## AWS Amplify Deployment

This project is configured for deployment on AWS Amplify with automatic CI/CD.

### Prerequisites
- AWS Account
- GitHub/GitLab repository (or direct upload)
- Node.js and npm (for local development)

### Deployment Steps

#### Method 1: GitHub Integration (Recommended)
1. Push your code to a GitHub repository
2. Go to AWS Amplify Console
3. Choose "Host web app" > "GitHub"
4. Select your repository and branch
5. Amplify will auto-detect the build settings from `amplify.yml`
6. Review and deploy

#### Method 2: Direct Upload
1. Go to AWS Amplify Console
2. Choose "Host web app" > "Deploy without Git provider"
3. Drag and drop your project folder or upload as ZIP
4. Deploy

### Build Configuration
The project uses:
- `amplify.yml` for build configuration
- `_redirects` for URL redirects and SPA routing
- Static HTML/CSS/JS files with no build process required

### Environment Variables (if needed)
No environment variables are required for this static site.

### Custom Domain (Optional)
1. In Amplify console, go to "Domain management"
2. Add your custom domain
3. Configure DNS settings as instructed

### Monitoring
- Amplify provides built-in monitoring and logs
- Check the "Monitoring" tab in your app dashboard

## Local Development
```bash
npm install
npm start
# or
npm run dev
```

## Project Structure
```
smops-2026/
├── index.html          # Main HTML file
├── assets/            # Images and media
├── css/              # Stylesheets
├── js/               # JavaScript files
├── src/pages/        # Additional HTML pages
├── amplify.yml       # Amplify build configuration
├── _redirects        # URL redirect rules
└── package.json      # Node.js dependencies
```

## Support
For deployment issues, check AWS Amplify documentation or contact the development team.
