#!/usr/bin/env bash
# Add project bin to user's ~/.bashrc if not already present
set -e
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BASHRC="$HOME/.bashrc"
LINE="export PATH=\"$REPO_ROOT/bin:$PATH\""

if grep -Fxq "$LINE" "$BASHRC"; then
  echo "Line already present in $BASHRC"
else
  echo "Adding project bin to $BASHRC"
  printf "\n# Add project-local binaries\n%s\n" "$LINE" >> "$BASHRC"
  echo "Appended to $BASHRC"
fi

echo "Done. You may need to run: source $BASHRC"
