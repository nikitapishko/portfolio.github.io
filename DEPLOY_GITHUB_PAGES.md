# Publish your portfolio on GitHub Pages

1. **Connect GitHub in Lovable** – Project settings → Git → Connect. Lovable creates a new repository and keeps it in sync.
2. **Turn on Pages** – In the repository on GitHub: Settings → Pages → Source → **GitHub Actions**.
3. **Run the deploy** – Any change pushed to `main` (including Lovable edits) deploys automatically. To run it now: Actions tab → "Deploy to GitHub Pages" → Run workflow.
4. **Open your site** – `https://<your-username>.github.io/<repository-name>/` (the link also appears in Settings → Pages).

## Repository named `<username>.github.io` or a custom domain
Edit `.github/workflows/deploy-pages.yml` and set `BASE_PATH: /`. For a custom domain, add it in Settings → Pages.

## Troubleshooting
- Blank page or missing styles: `BASE_PATH` does not match the site address.
- Workflow fails at "deploy": Pages source is not set to GitHub Actions.
- If your repository's main branch has a different name, update `branches:` in the workflow.
