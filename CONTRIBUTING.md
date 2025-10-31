# Contributing

Short rules to keep a healthy development workflow.

- Branching: use feature branches (feature/xxx or fix/xxx).
- Commits: use imperative messages and reference issue ids when present.
- Pull Requests: open PRs against `main`. Include a short description and testing notes.
- Code style: run `npx prettier --write .` and `npm run lint` before pushing.
- Tests: add unit tests for logic changes.

Suggested workflow:

1. Create branch: `git checkout -b feature/short-description`
2. Run `make setup`
3. Implement changes, run `make lint` and `make format`
4. Push branch and open PR.

Roles and releases are documented in `RELEASE_PROCESS.md`.
