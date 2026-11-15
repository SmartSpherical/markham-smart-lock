#!/bin/bash
# Publishes this folder to GitHub Pages using your GitHub CLI login.
set -e
cd "$(dirname "$0")"
REPO=markham-smart-lock
git init -q -b main 2>/dev/null || true
git add index.html README.md assets publish.sh
git commit -q -m "Markham Smart Lock website" || true
gh repo create "$REPO" --public --source=. --remote=origin --push
OWNER=$(gh api user --jq .login)
gh api -X POST "repos/$OWNER/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" >/dev/null
echo
echo "Done! Your site will be live in about a minute at:"
echo "  https://$OWNER.github.io/$REPO/"
