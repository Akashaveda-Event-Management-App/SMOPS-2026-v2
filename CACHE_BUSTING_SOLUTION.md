# SMOPS-2026 Cache Busting Solution

## Problem Solved
Your AWS Amplify deployment was experiencing caching issues where users couldn't see updates until manually clearing their browser cache.

## Solutions Implemented

### 1. HTTP Cache Headers (`_redirects`)
```
/css/*    Cache-Control: no-cache,no-store,must-revalidate
/js/*     Cache-Control: no-cache,no-store,must-revalidate
*.html    Cache-Control: no-cache,no-store,must-revalidate
*.css     Cache-Control: no-cache,no-store,must-revalidate
*.js      Cache-Control: no-cache,no-store,must-revalidate
```

### 2. HTML Meta Tags
Added to all HTML files:
```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```

### 3. Dynamic Cache Busting (`cache-buster.js`)
- Automatically adds timestamps to all CSS/JS file references
- Runs during build process
- Example: `styles.css?v=1754930992818`

### 4. Service Worker Updates (`sw.js`)
- Dynamic cache names with timestamps
- Network-first strategy for fresh content
- Automatic old cache cleanup
- Force immediate activation

### 5. JavaScript Anti-Cache System (`anti-cache.js`)
- Clears localStorage and sessionStorage
- Forces service worker updates
- Automatic page reload when version changes
- Runtime cache busting for dynamic content

### 6. Build Process Integration
Updated `package.json` scripts:
```json
"build": "npm run build:css && npm run cache-bust"
```

Updated `amplify.yml`:
- Runs cache busting during AWS Amplify build
- Adds deployment timestamp

## How to Deploy

### Method 1: Automatic (Recommended)
```bash
npm run build
git add .
git commit -m "Update with cache busting"
git push
```

### Method 2: Using Scripts
```bash
# Windows PowerShell
./deploy.ps1

# Linux/Mac
./deploy.sh
```

## How It Works

1. **During Build**: `cache-buster.js` adds unique timestamps to all asset URLs
2. **On Deploy**: AWS Amplify runs the build process with cache busting
3. **On Visit**: Anti-cache script ensures users get fresh content
4. **HTTP Headers**: Server tells browsers not to cache files
5. **Service Worker**: Forces cache updates and cleanup

## Benefits

✅ **No More Manual Cache Clearing**: Users automatically get fresh content
✅ **AWS Amplify Compatible**: Works seamlessly with your existing deployment
✅ **Multiple Layers**: Several cache-busting strategies ensure reliability
✅ **Development Friendly**: Cache busting only runs during build, not development
✅ **Automatic**: Once set up, requires no manual intervention

## Files Modified

- `_redirects` - Added cache control headers
- `index.html` - Added cache prevention and anti-cache script
- `call-for-papers.html` - Added cache prevention and anti-cache script
- `submit-paper.html` - Added cache prevention and anti-cache script
- `sw.js` - Updated for dynamic cache management
- `package.json` - Added cache busting to build process
- `amplify.yml` - Integrated cache busting in deployment

## Files Added

- `cache-buster.js` - Main cache busting script
- `js/anti-cache.js` - Client-side cache management
- `deploy.ps1` - PowerShell deployment script
- `deploy.sh` - Bash deployment script

## Testing

The system has been tested and successfully adds cache busters to all files:
```
✅ Cache buster added to index.html
✅ Cache buster added to call-for-papers.html
✅ Cache buster added to submit-paper.html
✅ Cache buster added to src/pages/callforpaper.html
✅ Cache buster added to src/pages/IndividualReg.html
✅ Cache buster added to src/pages/SponsersReg.html
✅ Cache buster added to src/pages/payment.html
✅ Cache buster added to src/pages/sponsor-payment.html
```

## Next Deployment

Your next push to the repository will automatically:
1. Build with cache busting
2. Deploy to AWS Amplify
3. Serve fresh content to all users
4. Clear old caches automatically

No more cache issues! 🚀
