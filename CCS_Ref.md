# Commands & Common Shell snippets (CCS_Ref)

Essential commands you'll use often:

# Install deps
npm install

# Dev server
npm run dev

# Prisma
npx prisma generate
npx prisma migrate dev --name init

# Format / lint
npx prettier --write .
npm run lint

# Build
npm run build

Keep this file updated with recurring commands and troubleshooting notes.

Project-local clear (clr)
-------------------------
We provide a small executable at `./bin/clr` that clears the terminal and the scrollback buffer.

Use it directly:

```bash
./bin/clr
```

Or add the project `bin` to your PATH for convenience (per-shell):

```bash
export PATH="$PWD/bin:$PATH"
clr   # now works
```

To make it permanent for this project, add the export line to your `~/.bashrc` or source `./bin/clr` as you prefer.
