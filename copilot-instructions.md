# UNIVERSAL FULLSTACK DEVELOPMENT GUIDELINES

## 0. PROJECT CONTEXT & REFERENCES
- **Source of Truth:** For the roadmap, detailed tech stack, and data models, ALWAYS refer to [README_Guidebook.md](README_Guidebook.md).
- **History:** Check [README_Solutions.md](README_Solutions.md) for past technical decisions.

## 1. ARCHITECTURAL PRINCIPLES
- **Stateless Design:** Backend must be stateless to support horizontal scaling.
- **Security:**
    - No hardcoded secrets. Use environment variables.
    - Follow **OWASP Top 10** best practices (Sanitize inputs, protect against CSRF/XSS).
    - Consistent JSON error structure.
- **Performance:**
    - Pagination/sorting for collection endpoints.
    - Avoid N+1 query issues (use `include` with Prisma intelligently).
- **Modularity & Privacy:** Respect modular architecture and "privacy-by-design" approach.

## 2. BACKEND GUIDELINES (NEXT.JS / PRISMA)
- **API Routes:** Keep route handlers lightweight. Delegate business logic to files in `lib/` or dedicated services.
- **Database:**
    - Use Prisma for all DB interactions.
    - Design models to facilitate future migration to PostgreSQL.
- **Validation:** Use Zod for schema validation (client and server).

## 3. FRONTEND GUIDELINES (REACT / TAILWIND)
- **Modularity:** Separate logic (Custom Hooks) from UI (Functional Components).
- **Accessibility (A11y):** Use semantic HTML and `aria-label` where necessary.
- **Styles:**
    - Prefer Tailwind utilities.
    - Keep global CSS limited to base rules.
    - Avoid inline CSS unless absolutely necessary.
- **JavaScript in HTML:** Avoid inserting JavaScript directly into HTML files unless absolutely necessary. Keep JavaScript code in dedicated files, organized and named clearly, and prefer including or importing those scripts from HTML files.
- **Standards:** Strictly follow ESLint and Prettier configurations.

## 4. LANGUAGE & DOCUMENTATION POLICY
- **Code (Variables, Classes, Functions, IDs):** **ENGLISH**.
- **Comments & Documentation:** **FRENCH** (Professional and neutral tone).
- **User Interface (Labels, Buttons, Messages):** **FRENCH**.
- **Commits:** Conventional Commits in English (e.g., `feat(auth): add login page`).
- **Exception for this file:** If the user explicitly asks to add or modify an instruction inside `copilot-instructions.md`, write that instruction in **ENGLISH**. This is the sole exception to the Comments & Documentation rule.

## 5. INTERACTION PROTOCOL
- **Sequential Processing:** For complex tasks, break them into steps. Validate each step.
- **Terminal Commands:**
    - **Transparency:** State **Action**, **Impact**, and **Goal** before providing commands.
    - **Destructive Actions:** Must be explicitly marked with a **WARNING**.
- **Task Tracking:**
    - Suggest entries for `README_Solutions.md` after resolving complex bugs.
    - Update the roadmap in `README_Guidebook.md` once tasks are completed.
- **Review Mode:** Systematically check for edge cases, performance bottlenecks, and security flaws before validating a code suggestion.

## 6. GIT & BRANCHING GUIDELINES

- **Repository Protection**
  - `main` is a protected branch. Direct pushes to `main` are forbidden.
  - Enable branch protection rules: require at least one review, passing CI, and status checks.

- **Branch Naming**
  - Feature branches: `feat/<short-description>`
  - Bugfix branches: `fix/<short-description>`
  - Chore: `chore/<short-description>`
  - Hotfix: `hotfix/<short-description>`
  - Work-in-progress: `wip/<short-description>` (do not merge WIP branches)

- **Work Flow**
  - Create a branch per task/issue. Keep branches small and focused.
  - Always rebase or sync with `main` before opening a PR.
  - Open a Pull Request against `main` when ready for review.
  - PR title should follow Conventional Commits (e.g., `feat(auth): add login page`).
  - Provide a clear PR description, link related issue(s), and list testing steps.

- **PR Requirements**
  - At least one reviewer must approve.
  - All CI checks must pass (lint, type-check, tests).
  - No merge if there are unresolved security or lint errors.
  - Use "Squash and merge" for feature/fix PRs to keep history tidy, unless the team agrees otherwise.

- **Commits and History**
  - Use Conventional Commits for all commit messages.
  - Prefer atomic commits. Squash before merging if necessary.
  - Prefer rebasing your feature branch onto `main` to keep a linear history:
    - `git fetch origin`
    - `git rebase origin/main`
  - If force-pushing is required on your personal branch, use `git push --force-with-lease` only.

- **Local workflow examples**
  - Create feature branch:
    - `git checkout -b feat/short-description`
  - Commit changes:
    - `git add -A`
    - `git commit -m "feat(scope): short description"`
  - Rebase onto latest main before push:
    - `git fetch origin`
    - `git rebase origin/main`
  - Push branch:
    - `git push --set-upstream origin feat/short-description`

- **Merging and Releases**
  - Use semantic version tags for releases (e.g., `v1.2.0`).
  - Create release notes from PR descriptions and changelog entries.
  - For hotfixes, create `hotfix/*` branch and follow the same PR process.

- **Code Review Checklist (minimum)**
  - Lint passes and code follows style rules.
  - Type-checks and tests pass locally.
  - No secrets or hardcoded credentials.
  - Security considerations addressed (input validation, auth checks).
  - Performance and complexity reasonable for change size.

- **Copilot / Automation**
  - When generating or modifying code, follow these branching rules.
  - Suggest PR descriptions and Conventional Commit messages automatically.
  - If asked to create branches or PRs, show commands and explain actions/impact/goal before executing.

- **Misc**
  - Keep PRs small and reviewable.
  - Regularly delete merged branches remotely.
  - Avoid long-lived feature branches; merge or rebase frequently.

### Proactive Branching & Commits

- Proactively suggest creating a new branch when starting a focused task or making many related edits.
- Recommend a branch name following the repo convention (e.g., `feat/...`, `fix/...`, `wip/...`).
- When progress merits saving, propose a minimal atomic commit: staged files, Conventional Commit message, and a short PR title.
- Before pushing, show sync commands (`git fetch origin` + `git rebase origin/main`) and state Action / Impact / Goal.
- Only run git commands after explicit user confirmation; prefer `--force-with-lease` if force is needed.