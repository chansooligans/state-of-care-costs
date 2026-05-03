# State of Care Costs

Working Vue app for tracking federal healthcare transparency and cost policy.

The first product shape is a federal-only policy desk with three top-level tabs:

- Latest federal watch: news, rulemaking, enforcement, research, litigation, and market signals.
- Policy library: durable explainers, legislation, statutory anchors, and core principles.
- Reference: source universe, mechanism map, implementation timeline, and glossary.

## Local Development

```sh
npm install
npm run dev
```

## GitHub Pages

This app is configured for GitHub Pages at:

```txt
https://chansooligans.github.io/state-of-care-costs/
```

The deployed static build lives on the `gh-pages` branch. Build with
`GITHUB_PAGES=true` so Vite uses the `/state-of-care-costs/` asset base for
project-page hosting.

In the GitHub repository settings, set Pages to publish from:

```txt
Source: Deploy from a branch
Branch: gh-pages
Folder: /(root)
```

## Scope

Included: federal healthcare transparency and cost policy, including hospital price transparency, Transparency in Coverage, No Surprises/CAA implementation, drug pricing, interoperability, prior authorization, and employer-plan transparency.

Deferred: state laws, provider-specific price lookup, plan-specific estimate integrations, and general healthcare policy news outside transparency/cost impact.

## Source Universe

Primary sources come first: CMS, HHS, DOL EBSA, FTC, Federal Register, Congress.gov, White House, and HHS OIG. The news watch can also include clearly labeled research, journalism, and stakeholder sources such as KFF Health News, Peterson-KFF, AJMC, Axios, and AHA.
