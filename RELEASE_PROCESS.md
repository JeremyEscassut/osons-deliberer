# Release process & tagging

Keep releases lightweight and identifiable using Git tags.

Recommended steps for a milestone:

1. Finish work on branch and merge to `main` via PR.
2. Create an annotated tag using semantic versioning, e.g.:

```bash
git tag -a v0.1.0 -m "v0.1.0 — initial prototype"
git push origin v0.1.0
```

3. Create a GitHub Release from the tag (UI or `gh release create v0.1.0`).

Automation note:
- We provide a CI workflow that builds and lints on PRs.
- Optionally, add a GitHub Action to create releases on tags (future task).

Tagging convention:
- Use `vMAJOR.MINOR.PATCH` and keep tags small for milestones (alpha/beta tags allowed).
