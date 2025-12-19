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