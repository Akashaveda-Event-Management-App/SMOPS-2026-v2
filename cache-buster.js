// Cache Buster Script for SMOPS-2026
// This script adds timestamps to all CSS and JS file references

const fs = require('fs');
const path = require('path');

function addCacheBuster() {
    const timestamp = Date.now();
    const files = [
        'index.html',
        'call-for-papers.html',
        'submit-paper.html',
        'src/pages/callforpaper.html',
        'src/pages/IndividualReg.html',
        'src/pages/SponsersReg.html',
        'src/pages/payment.html',
        'src/pages/sponsor-payment.html'
    ];

    files.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Add timestamp to CSS files (exclude external CDN)
            content = content.replace(
                /href="([^"]*\.css)"/g,
                (match, url) => {
                    if (url.includes('://')) return match; // Skip external URLs
                    return `href="${url}?v=${timestamp}"`;
                }
            );
            
            // Add timestamp to JS files (exclude external CDN)
            content = content.replace(
                /src="([^"]*\.js)"/g,
                (match, url) => {
                    if (url.includes('://')) return match; // Skip external URLs
                    return `src="${url}?v=${timestamp}"`;
                }
            );
            
            fs.writeFileSync(filePath, content);
            console.log(`✅ Cache buster added to ${file}`);
        } else {
            console.log(`⚠️  File not found: ${file}`);
        }
    });
    
    console.log(`🚀 Cache busting completed with timestamp: ${timestamp}`);
}

// Run if called directly
if (require.main === module) {
    addCacheBuster();
}

module.exports = { addCacheBuster };
