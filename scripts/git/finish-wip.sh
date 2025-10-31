#!/usr/bin/env bash
set -euo pipefail
# Promote a wip/<topic> branch to feature/<topic> and push it
if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <topic> [base=develop]"
  exit 2
fi
topic="$1"
base=${2:-develop}
wip_branch="wip/$topic"
feature_branch="feature/$topic"

current=$(git rev-parse --abbrev-ref HEAD)
if [ "$current" != "$wip_branch" ]; then
  if git show-ref --verify --quiet refs/heads/$wip_branch; then
    git checkout "$wip_branch"
  else
    echo "Branch $wip_branch not found locally. Try: git fetch origin $wip_branch && git checkout $wip_branch"
    exit 1
  fi
fi

git checkout -b "$feature_branch"
git push --set-upstream origin "$feature_branch"
echo "Created and pushed $feature_branch. You can now open a PR to $base."
