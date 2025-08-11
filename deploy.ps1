# PowerShell Deployment script for SMOPS-2026 with cache busting

Write-Host "🚀 Starting SMOPS-2026 deployment with cache busting..." -ForegroundColor Green

# Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "🔄 Cache busting completed!" -ForegroundColor Green
    Write-Host "✅ Ready for deployment to AWS Amplify" -ForegroundColor Green
    
    # Instructions
    Write-Host ""
    Write-Host "📋 Next steps:" -ForegroundColor Cyan
    Write-Host "1. Commit all changes to git" -ForegroundColor White
    Write-Host "2. Push to your repository" -ForegroundColor White
    Write-Host "3. AWS Amplify will automatically deploy with fresh cache" -ForegroundColor White
    Write-Host ""
    Write-Host "🎯 Cache busting features implemented:" -ForegroundColor Cyan
    Write-Host "   ✓ HTTP Cache-Control headers" -ForegroundColor Green
    Write-Host "   ✓ Dynamic timestamp cache busters" -ForegroundColor Green
    Write-Host "   ✓ Service Worker force updates" -ForegroundColor Green
    Write-Host "   ✓ JavaScript anti-cache system" -ForegroundColor Green
    Write-Host "   ✓ Meta tag cache prevention" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed! Please check the errors above." -ForegroundColor Red
    exit 1
}
