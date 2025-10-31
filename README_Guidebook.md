# Osons Délibérer — Guidebook

<!-- COMPLETED:START -->
## Completed (history)

- [x] Scaffold project files and configs
- [x] Add Prisma schema for User, Claim, ExpertValidation, Vote
- [x] Add Tailwind base theme, styles and components
- [x] Create basic docs & helpers (README_Guidebook, README_Solutions, CCS_Ref)
- [x] Add dev process & CI (Makefile, CONTRIBUTING, CI workflow)

<!-- COMPLETED:END -->

---

<!-- ROADMAP:START -->
## Roadmap (numbered, living)

1. [ ] Implement auth UI and secure sign-up (password hashing) — in progress
2. [ ] Add migrations & seed example data
3. [ ] Implement NextAuth wiring and secure API session integration
4. [ ] Implement API routes (claims, votes) with validation and guards
5. [ ] Add role-based UI gates and minimal dashboard (citizen/expert/admin views)
6. [ ] Add tests (unit + integration) and pre-commit hooks
7. [ ] Prepare migration guide SQLite → PostgreSQL
8. [ ] Release preparation: release branch, tagging and GitHub Release

<!-- ROADMAP:END -->

---

Short, living guide for the prototype: goals, stack, models and roadmap.

## Quick summary
- You are Copilot, assisting in setting up a complete full-stack Next.js project called **"Osons Délibérer"**, a participatory political deliberation platform.
- Full-stack Next.js app (app router)
- TypeScript, Tailwind, NextAuth (credentials), Prisma + SQLite
- Focus: privacy-first, modular, local-first prototype

## 🎯 Goal
Build a scalable, privacy-focused, open-source prototype that can later evolve into a distributed system.  
The main goal is to design a **modular architecture** that supports:
- citizen participation and claims submission,
- expert validation workflows,
- voting and deliberation processes,
- strong data integrity and access control,
- and an AI-ready foundation (for future semantic search and classification).

For now, the focus is **local development**, **simplicity**, and **zero-cost** tools.

---

## Technical stack (free, lightweight)

- Next.js (app router)
- React + TypeScript (strict)
- Tailwind CSS
- NextAuth (credentials provider, JWT sessions)
- Prisma ORM + SQLite (local)
- Dev tools: Git/GitHub, ESLint, Prettier, PostCSS, VSCode (+ recommended extensions)

Future-proofing notes:
- Design Prisma models so migration to PostgreSQL is straightforward.
- Keep API routes modular so a separate backend can replace them later if needed.

---

## Core models (draft)

- User: id, name, email, passwordHash, role (citizen|expert|verifier|admin), timestamps
- Claim: id, title, description, status (pending|under_review|accepted|rejected), domain, authorId, timestamps
- ExpertValidation: id, claimId, expertId, opinion, status, justification, timestamp
- Vote: id, claimId, voterId, choice (yes|no|abstain), timestamp

Later: Audit, Document, AI tagging tables.

---

<!-- PRINCIPLES:START -->
## Development principles
-   Keep code modular, readable and privacy-minded.
-   Prefer minimal, well-documented changes and PRs for traceability.
-   Use environment variables for secrets (see .env.example).
-   Prefer Tailwind utilities for styling; keep global CSS limited to base rules.
-   Always try the simplest solution first. If you need to fix CSS, check or adjust Tailwind style attributes before stacking custom CSS rules.
-   Keep languages grouped properly: global CSS in the main CSS file, JS in JS files, etc. Avoid inline CSS or JS in HTML unless required for proper behavior.
<!-- PRINCIPLES:END -->

<!-- GUIDELINES:START -->
## General guidelines
-   Code, variable names and comments are in English.
-   The user interface (labels, buttons, messages, errors, etc.) is in French.
-   Keep answers and comments concise and precise.
-   Always respect the project’s modular architecture and privacy-by-design approach.
-   Maintain consistency between documentation, file structure and code conventions.
<!-- GUIDELINES:END -->

Notes:
- This file is a living document. Update the roadmap items as tasks complete.
- See `README_Solutions.md` for a log of major problems and their validated solutions.
 