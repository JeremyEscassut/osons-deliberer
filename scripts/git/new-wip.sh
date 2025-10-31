#!/usr/bin/env bash
set -euo pipefail
# Create and checkout a wip branch: wip/<topic>
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <topic>"
  exit 2
fi
topic="$1"
branch="wip/$topic"
git fetch origin
git checkout -b "$branch"
git push --set-upstream origin "$branch"
echo "Created and pushed $branch"
