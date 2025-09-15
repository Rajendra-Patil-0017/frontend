# PowerShell script to remove redundant theme.css imports
$files = @(
    'src/Components/Footer/Footer.jsx',
    'src/Components/Navbar/Navbar.jsx',
    'src/Context/ShopContext.jsx',
    'src/Pages/Cart.jsx',
    'src/Pages/LoginSingup.jsx',
    'src/Pages/Product.jsx',
    'src/Pages/Shop.jsx'
)

foreach ($file in $files) {
    $fullPath = Join-Path -Path (Get-Location) -ChildPath $file
    $backupPath = "$fullPath.bak"
    
    # Create backup
    Copy-Item -Path $fullPath -Destination $backupPath
    
    # Read content and remove import
    $content = Get-Content -Path $fullPath -Raw
    $newContent = $content -replace "import '\.\./theme\.css';\n", ""
    
    # Write updated content
    Set-Content -Path $fullPath -Value $newContent -NoNewline
    
    Write-Host "Processed $file"
}

Write-Host "All files processed. Backups created with .bak extension"
