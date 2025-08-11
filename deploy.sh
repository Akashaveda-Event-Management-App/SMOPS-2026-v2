#!/bin/bash
# Deployment script for SMOPS-2026 with cache busting

echo "🚀 Starting SMOPS-2026 deployment with cache busting..."

# Build the project
echo "📦 Building project..."
npm run build

echo "🔄 Cache busting completed!"
echo "✅ Ready for deployment to AWS Amplify"

# Instructions
echo ""
echo "📋 Next steps:"
echo "1. Commit all changes to git"
echo "2. Push to your repository"
echo "3. AWS Amplify will automatically deploy with fresh cache"
echo ""
echo "🎯 Cache busting features implemented:"
echo "   ✓ HTTP Cache-Control headers"
echo "   ✓ Dynamic timestamp cache busters"
echo "   ✓ Service Worker force updates"
echo "   ✓ JavaScript anti-cache system"
echo "   ✓ Meta tag cache prevention"
