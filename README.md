# Arnav Shukla — Systems & AI Engineer

Personal portfolio featuring selected software projects, engineering approaches, experience, and credentials.

Live website: https://arnav-shukla.vercel.app/

## Website

The single-page site uses HTML, CSS custom properties, and vanilla JavaScript in [index.html](index.html). Its existing faceted-glass visual theme includes light and dark modes, a Three.js scene with local GLB models, an agent-loop diagram, GSAP/ScrollTrigger animations, Lenis scrolling, and Vanilla Tilt interactions.

No build step or package installation is required. Serve this folder with any static HTTP server and open its local URL; HTTP serving allows the GLB assets to load. Animation libraries and fonts currently load from external CDNs.

## Featured projects

- **Rural Healthcare Platform:** Next.js PWA with guided workflows in 10+ languages, accessible voice and pictorial controls, PostGIS discovery, and owner-scoped atomic offline replay. FHIR R4 export models NRCES document profiles; national integration and certification remain separate work. Speech depends on available device engines or an optional owned service.
- **Eco-Loop:** A research prototype for multi-zone supervisory HVAC control using a building simulation, an MCP interface, a local LLM provider, and deterministic fallback control. A recorded seasonal study spans 40+ scenarios and 30,000+ timesteps; it concerns simulation experiments, not measured building savings.
- **TalentMatch AI:** A team resume-screening project with a native C++ scoring engine, semantic matching, and an optional XGBoost ranking path. Featured individual contributions cover web/API integration, deployment, error handling, and the browser extension.
- **CampusCart:** A team campus-service marketplace built with Flask and SQLAlchemy/SQLite, with student, vendor, and administrator dashboards, catalogs, order status, print attachments, COD, and a demo wallet.

## Content maintenance

Edit portfolio text, project links, metadata, and presentation in [index.html](index.html). Images, credentials, and the downloadable resume are under `assets/`. The main resume at `assets/Arnav_Shukla_Resume.pdf` and its editable source, [Arnav_Shukla_Resume_2027.tex](assets/Arnav_Shukla_Resume_2027.tex), use the user's final supplied resume as their base. On **28 November 2026**, the internship entry was updated after reviewing both capstone repositories and the local internship materials; the other resume sections were preserved during that revision. See [the internship evidence review](docs/INTERNSHIP_REVIEW.md) for source links and limitations. All resume download buttons use this PDF, with an identical deliverable in `output/pdf/Arnav_Shukla_Resume.pdf`. Project bullets describe completed engineering work with supported lower bounds for scale and validation scope.

Also on **28 November 2026**, resume project bullets and matching portfolio cards gained rounded lower bounds for supported scope, dataset size, test suites and recorded simulation work. [Metric evidence and interview context](docs/RESUME_METRIC_EVIDENCE.md) records the underlying values, sources and verification dates. These are completed-work and capability descriptions; they do not promise that a test suite or deployment has just been rerun or that a particular ATS score will result.

The published source and live website were compared on **26 November 2026** and matched at review time. That comparison predates these updates; publishing this portfolio does not establish runtime validation of the featured applications.
