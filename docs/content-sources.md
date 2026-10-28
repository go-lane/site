# Content sources and publication notes

Reviewed October 28, 2026.

## Positioning

The owner requested open source, customer ownership of data, a small scalable
architecture, Kubernetes and Docker, offline installation from the start, no
license server, Jira migration assistance, and support-led pricing. Defense is
an important audience, alongside anyone who chooses to self-host. These are the
product commitments expressed on the page. No compliance certification,
performance benchmark, customer count, migration success rate, seat price, or
future subscription plan is asserted.

## Competitor research

[ONES](https://ones.com/) emphasizes project/knowledge management, deployment
choice (cloud, self-hosted, air-gapped), and migration from Jira and Confluence.
Lane's page concentrates on open source, operational simplicity, data ownership,
and human support. It does not repeat ONES's customer, compliance, feature-parity,
pricing, or migration claims. The visual design and copy are original.

[Atlassian's Data Center end-of-life notice](https://www.atlassian.com/licensing/data-center-end-of-life)
identifies March 28, 2029 for the affected Jira Data Center products. The page links
directly to that notice. It says Jira Data Center is reaching end of life, rather
than suggesting that all Jira products are already SaaS-only. Atlassian lists
exceptions and extended-maintenance provisions; use its notice for current terms.

## Product evidence and limitations

The sibling Lane repository's `README.md` and `docs/architecture.md` document an
Apache-2.0 modular Go application with embedded React assets, PostgreSQL, and a
configured OIDC provider. The sibling `lane-helm` repository documents the Helm
chart and local install/upgrade/restore checks. These support the lean-runtime and
deployment story. They do not establish a capacity benchmark or production
certification, and the site makes neither claim.

At implementation time, `go-lane/lane` is private and published production releases
are not established. The page labels early development and directs visitors to
request access. Air-gapped installation and the absence of a license server are
owner-specified product direction, not a claim that this website task performed
an offline product installation. Migration is offered as planning and assistance;
no completed automatic Jira importer or guaranteed full-fidelity import is claimed.

The initial site creation prepared the owner's domain without configuring
hosting, DNS, TLS, repository visibility, product releases, or an email inbox.
The subsequent GitHub Pages publishing workflow is described in the README;
custom-domain setup remains an owner task.
