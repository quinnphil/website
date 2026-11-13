# PQ Data Analytics

A static landing page for Phil Quinn, built with [Astro](https://astro.build/).

## Getting started

Install Node.js 22.23.4 or newer and run:

```sh
npm install
npm run dev
```

Open the local address printed by Astro. Run `npm run build` to generate the static site in `dist/`, and `npm run preview` to preview the build.

The page content and LinkedIn contact link are in `src/pages/index.astro`.

## Adding bookmarks

Bookmarks appear publicly on the Bookmarks page, even though the repository is private. Add one Markdown (`.md`) file per bookmark in `src/content/bookmarks/`. On GitHub, open that folder, choose **Add file → Create new file** (or **Upload files**), and commit it to `main`. For example:

```markdown
---
title: "A useful technical article"
url: "https://example.com/article"
tags: ["Data", "Python"]
comment: "A short note about why I found it useful."
---
```

Give each file a unique name, such as `useful-article.md`. The title and HTTP(S) URL are required; `tags` and `comment` are optional and can be omitted. Quote text values as shown, particularly if they contain punctuation. Tags are case-sensitive, so use consistent spelling. The site validates the fields during the build; if a file is invalid, GitHub Actions reports an error and does not deploy it. A successful commit to `main` automatically builds and publishes the updated page.

## GitHub Pages

The deployment workflow builds and publishes the site on pushes to `main`. In the repository's **Settings → Pages**, select **GitHub Actions** as the source and set the custom domain to `philquinn.co.uk`. If another GitHub Pages site currently uses that domain, remove it from that site's Pages settings first; this may cause a brief interruption. A private repository requires a GitHub plan that supports Pages from private repositories. The published website itself is public.

The existing apex DNS must point to GitHub Pages. To support `www.philquinn.co.uk` as well, configure a `www` CNAME record pointing to `quinnphil.github.io`. Once the domain and certificate are ready, enable **Enforce HTTPS** in Pages settings. Certificate provisioning can take up to 24 hours.

The Astro configuration uses the custom domain at the root path. To deploy instead at the default project URL, update `site` to `https://quinnphil.github.io` and set `base` to `/website`.
