# TryQuotely.com Deployment Guide

## Project Structure (SINGLE SOURCE OF TRUTH)

| Service | Project/Repo | URL |
|---------|--------------|-----|
| **Vercel** | `quotely-site` | https://tryquotely.com |
| **GitHub** | `QuotelyAi/quotely-website` | https://github.com/QuotelyAi/quotely-website |
| **Local Folder** | `quotely-platform/quotely-website` | This folder |

## IMPORTANT: Preventing Duplicate Projects

### Why duplicates happen:
Running `vercel` or `vercel --prod` in a folder that isn't linked creates a NEW project.

### Before ANY deployment, always verify the link:
```bash
cat .vercel/project.json
```

Should show:
```json
{
  "projectId": "prj_N18E70UaV6yA57QwmIce7kJPMua7",
  "orgId": "team_3GeWKpLeV0mZbk1lO00enEGT",
  "projectName": "quotely-site"
}
```

### If .vercel folder is missing or wrong:
```bash
rm -rf .vercel
vercel link --project quotely-site --scope quotely --yes
```

## Deployment Workflow

### Automatic (Recommended)
Just push to GitHub - Vercel auto-deploys:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

### Manual (if needed)
```bash
# ALWAYS verify link first
cat .vercel/project.json

# Then deploy
vercel --prod --yes
```

## Environment Variables

Set in Vercel Dashboard: https://vercel.com/quotely/quotely-site/settings/environment-variables

- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager ID (optional, defaults to GTM-5TFZCD7G)

## Troubleshooting

### "The provided path does not exist"
The Vercel project has wrong Root Directory setting.
1. Go to https://vercel.com/quotely/quotely-site/settings
2. Set Root Directory to empty (just `.`)

### Created wrong project by accident
```bash
# Delete the wrong project
vercel project rm <wrong-project-name> --scope quotely

# Re-link to correct project
rm -rf .vercel
vercel link --project quotely-site --scope quotely --yes
```

### Check current projects
```bash
vercel project ls --scope quotely | grep quotely
```

Should only show:
- `quotely-site` (tryquotely.com)
- `quotely.info` (separate marketing site)

## Git Configuration

This folder is its own git repo, separate from the parent `quotely-platform`.

```
Remote: https://github.com/QuotelyAi/quotely-website
Branch: main
Auto-deploy: Yes (on push to main)
```
