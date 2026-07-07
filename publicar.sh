#!/usr/bin/env bash
# ============================================================
#  publicar.sh  —  publica los cambios del portfolio (WSL/Linux/Mac)
#  Uso:   ./publicar.sh   (o:  ./publicar.sh "mensaje del cambio")
# ============================================================
set -e
cd "$(dirname "$0")"

if [ -z "$(git status --porcelain)" ]; then
  echo "No hay cambios que publicar. Todo está al día. ✅"
  exit 0
fi

echo "Cambios detectados:"
git status --short

msg="$*"
if [ -z "$msg" ]; then
  read -r -p "Describe el cambio: " msg
fi
[ -z "$msg" ] && msg="Actualizo contenido del portfolio"

git add -A
git commit -m "$msg"
git push

echo ""
echo "Publicado. En 1-2 minutos estará online en:"
echo "  https://ruby570bocadito.github.io/portfolio/"
