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

## GitHub Pages

The deployment workflow builds and publishes the site on pushes to `main`. In the repository's **Settings → Pages**, select **GitHub Actions** as the source and set the custom domain to `philquinn.co.uk`. If another GitHub Pages site currently uses that domain, remove it from that site's Pages settings first; this may cause a brief interruption. A private repository requires a GitHub plan that supports Pages from private repositories. The published website itself is public.

The existing apex DNS must point to GitHub Pages. To support `www.philquinn.co.uk` as well, configure a `www` CNAME record pointing to `quinnphil.github.io`. Once the domain and certificate are ready, enable **Enforce HTTPS** in Pages settings. Certificate provisioning can take up to 24 hours.

The Astro configuration uses the custom domain at the root path. To deploy instead at the default project URL, update `site` to `https://quinnphil.github.io` and set `base` to `/website`.
