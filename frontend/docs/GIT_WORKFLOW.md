# Frontend Git & Branch Workflow

## Branch Strategy

- main → protected
- dev → protected
- fe-riya → frontend working branch

---

## Daily Workflow

### Start of Day
```bash
git checkout dev
git pull origin dev
git checkout fe-riya
git merge dev

#### End of Day
git add .
git commit -m "docs(frontend): update Day 1–2 documentation"
git push origin fe-riya
