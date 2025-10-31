#!/usr/bin/env bash
set -euo pipefail
# Create a release branch from develop, run tests, tag and push tag.
# Usage: ./release.sh 1.0.0
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <version>"
  exit 2
fi
version="$1"
release_branch="release/$version"

git fetch origin
git checkout origin/develop -B "$release_branch"
git push --set-upstream origin "$release_branch"

echo "Run tests and checks now. If all good, create annotated tag and push it."
read -p "Create tag v$version and push now? [y/N] " ok
if [ "${ok,,}" = "y" ]; then
  git tag -a "v$version" -m "Release v$version"
  git push origin "v$version"
  if command -v gh >/dev/null 2>&1; then
    gh release create "v$version" --title "v$version" --notes "Release $version"
  else
    echo "gh CLI not found: create GitHub Release via UI or install gh and run: gh release create v$version --title \"v$version\" --notes \"Release $version\""
  fi
else
  echo "Tagging skipped."
fi
