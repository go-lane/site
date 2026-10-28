# Landing site verification

Verified locally on October 28, 2026.

- `npm run check`, `npm run build`, JavaScript syntax checks, and
  `git diff --check` passed.
- Chromium browser checks passed at 320, 390, 760, 768, 900, 1024, and 1440 px.
  No horizontal page overflow or overlapping issue-preview text was found.
- All deployment tabs were exercised with clicks and Left/Right/Home/End keys.
  Selected state, focus, visible panel, and environment labels were checked.
- Mobile navigation opened and closed, navigated to a section, returned focus
  on Escape, and reset when resized to desktop.
- Every email action targets `support@golane.ai`; migration and early-access
  subjects were checked without sending email.
- Reduced-motion styling and the core content/CTA without JavaScript passed.
- No page JavaScript errors or third-party runtime requests were observed.
- axe-core 4.10.3 found no WCAG 2 A/AA or 2.1 AA rule violations in all three
  deployment states at desktop and mobile sizes. This automated audit is not a
  full accessibility certification.
- Desktop and mobile screenshots were visually reviewed. The social preview
  PNG was exported and inspected at 1200×630.

Browser checks used the existing workspace's Playwright 1.64.1 installation in
an isolated headless Chromium session. Local scripts, raw reports, and screenshots
are in ignored `.local/qa/`. The site's runtime and build require no packages.

No product install, Jira data migration, email delivery, hosted CI, live domain,
DNS, TLS, or production deployment was verified by these website checks.
