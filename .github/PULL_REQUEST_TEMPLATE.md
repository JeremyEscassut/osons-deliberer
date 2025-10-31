# Pull Request — self-review checklist

Please run this checklist before merging (self-review):

- [ ] I ran `npm run lint` and fixed lint issues.
- [ ] I ran `npx prettier --write .` for formatting.
- [ ] I ran unit tests (if any) and they pass.
- [ ] I updated Prisma migrations or added a note if a migration is required.
- [ ] I updated `README_Guidebook.md` or relevant docs if public behavior changed.
- [ ] No secrets, credentials or personal data are committed.
- [ ] I verified the app starts locally (`make dev` / `npm run dev`).
- [ ] I added or updated tests for new logic where appropriate.

Notes:
- If you are the only reviewer, perform a self-review and check these boxes explicitly.
