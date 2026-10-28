# Lane · golane.ai

The Lane product landing site. Static HTML, CSS, and a small JavaScript module;
no framework, runtime dependencies, analytics, cookies, or external asset requests.

## Local development

Node 20 or newer is sufficient. There is nothing to install.

```sh
npm run dev       # http://127.0.0.1:4173
npm run check     # assets, internal links, domain, contact
npm run build     # copy public/ to dist/
npm run preview   # serve the production output locally
```

Set `PORT` to choose another local port. Edit `public/`; `dist/` is generated and
ignored. `scripts/serve.mjs` is a loopback-only development server, not a production
server. Run `npm run check` and review desktop and mobile layouts before pushing.

## Hosting

Serve the contents of `dist/` from any static host. Use `npm run build` as the
build command and `dist` as the output directory. The source also works directly
from `public/` when the host does not need a build step.

The canonical URL, sitemap, share metadata, and `CNAME` use `golane.ai`. The CNAME
file is compatible with GitHub Pages but does not configure a host, DNS, or TLS.
There is deliberately no automatic production deployment workflow. Configure
the chosen hosting provider and domain separately.

## Content and assets

- All inquiries go to the owner-approved `support@golane.ai`. Mail links open the
  visitor's email client; no form backend or email delivery is claimed.
- The application is in early development. The primary action requests access;
  do not add a public download link until an accessible release exists.
- The workspace is an explicitly labeled illustration, not a product screenshot.
- `public/assets/lane-mark.svg` is a vector interpretation of the supplied
  three-track Lane mark. The original attachment paths were unavailable on the
  development host. Replace it with an authoritative vector if one is supplied.
- Manrope is self-hosted under the SIL Open Font License. Its license is in
  `public/assets/OFL-Manrope.txt`; the source is
  [Google Fonts](https://github.com/google/fonts/tree/main/ofl/manrope).
- The editable social card is `public/assets/social-card.svg`; its 1200×630 PNG
  export is used by social previews. Keep the two in sync when editing it.
- See [content sources](docs/content-sources.md) for copy provenance and limits.

## Browser acceptance

Check narrow mobile (320/390 px), tablet (768/900 px), and desktop (1440 px).
Verify there is no horizontal overflow; all three deployment tabs respond to
clicks and Left/Right/Home/End keys; mobile navigation closes on section selection
and Escape; contact links keep the right recipient and subject; and the page
loads without third-party network requests or JavaScript errors. Respect reduced
motion and retain visible keyboard focus and the skip link.
