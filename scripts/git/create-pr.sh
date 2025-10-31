#!/usr/bin/env bash
set -euo pipefail
# Create a PR using gh if available, otherwise print the gh command to run.
if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <from-branch> [to-branch=develop] [title]"
  exit 2
fi
from="$1"
to=${2:-develop}
title=${3:-"PR: $from → $to"}

if command -v gh >/dev/null 2>&1; then
  gh pr create --base "$to" --head "$from" --title "$title" --body "Auto-created PR from $from to $to"
else
  echo "gh CLI not found. Run this command to create the PR manually:"
  echo "gh pr create --base $to --head $from --title \"$title\" --body \"Auto-created PR from $from to $to\""
fi
