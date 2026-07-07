# ============================================================
#  publicar.ps1  —  publica los cambios del portfolio en 1 paso
#  Uso:   .\publicar.ps1
#  (o con mensaje directo:   .\publicar.ps1 "arreglo la bio")
# ============================================================

param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]]$Mensaje
)

$ErrorActionPreference = "Stop"

# Colócate en la carpeta del script
Set-Location -Path $PSScriptRoot

# ¿Hay cambios que publicar?
$cambios = git status --porcelain
if (-not $cambios) {
  Write-Host "No hay cambios que publicar. Todo está al día. ✅" -ForegroundColor Green
  exit 0
}

Write-Host "Cambios detectados:" -ForegroundColor Cyan
git status --short

# Mensaje del commit
$texto = ($Mensaje -join " ").Trim()
if (-not $texto) {
  $texto = Read-Host "Describe el cambio (ej: 'añado proyecto nuevo')"
}
if (-not $texto) { $texto = "Actualizo contenido del portfolio" }

# Publicar
git add -A
git commit -m "$texto"
git push

Write-Host ""
Write-Host "Publicado. En 1-2 minutos estará online en:" -ForegroundColor Green
Write-Host "  https://ruby570bocadito.github.io/portfolio/" -ForegroundColor Yellow
Write-Host "Estado del despliegue: https://github.com/Ruby570bocadito/portfolio/actions"
