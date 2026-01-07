# Frontend Git & Branch Workflow

## Branch Strategy

- main → protected
- dev → protected
-riya/setup-frontend-roadmap → frontend working branch

---

## Daily Workflow

### Start of Day
```bash
git checkout dev
git pull origin dev
git checkout riya/setup-frontend-roadmap
git merge dev

#### End of Day
git add .
<<<<<<< HEAD
git commit -m "docs(frontend): update README.md"
=======
git commit -m "docs(frontend): update Day 1–2 documentation"
>>>>>>> 07d53fd (docs(frontend): update Day 1–2 documentation)
git push origin riya/setup-frontend-roadmap
