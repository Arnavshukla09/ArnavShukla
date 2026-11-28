# Resume metric evidence

Reviewed locally on **28 November 2026**. This note supports the rounded numbers in the portfolio resume. It is a source and saved-evidence review, not a new application test run, database query, deployment check, or benchmark execution.

The `+` figures are conservative lower bounds on the capabilities or evidence identified below. They are intended to remain useful as a project grows; they do not automatically attest future revisions. Recheck a claim when its feature, dataset, or test suite changes substantially. A historical passing report belongs to its recorded revision and environment.

## Rural Healthcare Platform

Reviewed checkout: `C:/Users/aarrn/Desktop/rural health/RURAL-HEALTHCARE-PLATFORM-main`, clean at `df05bdca3767834bf7af09db1e6f797dd94b609f`.

| Resume wording | Supporting evidence | Scope |
| --- | --- | --- |
| **10+ language guided workflows** | [Canonical assistant language registry](https://github.com/Arnavshukla09/RURAL-HEALTHCARE-PLATFORM/blob/df05bdca3767834bf7af09db1e6f797dd94b609f/lib/assistant/languages.ts#L3-L15) defines 13 languages. [Offline pack manifest](https://github.com/Arnavshukla09/RURAL-HEALTHCARE-PLATFORM/blob/df05bdca3767834bf7af09db1e6f797dd94b609f/public/data/assistant/manifest.json) references the 13 corresponding language packs. | Counts guided catalogs and packs, not independently validated speech recognition, pronunciation, clinical quality, or complete offline translation of every page. Device speech support varies. |
| **Documented 10,000+ facility dataset** | [Dataset inventory](https://github.com/Arnavshukla09/RURAL-HEALTHCARE-PLATFORM/blob/df05bdca3767834bf7af09db1e6f797dd94b609f/docs/DATASETS.md#L58-L66) records 10,742 facilities and GiST-indexed PostGIS storage. | A repository-documented dataset size. No current live database count, facility existence check, contact verification, or production query performance measurement was performed in this review. Retain “documented” when presenting this number. |
| **300+ unit tests** | [Testing evidence](https://github.com/Arnavshukla09/RURAL-HEALTHCARE-PLATFORM/blob/df05bdca3767834bf7af09db1e6f797dd94b609f/docs/TESTING.md#L1-L3) records **326 unit tests across 49 files**, passed locally on **24 November 2026**, plus 20 Python service-contract checks. [Changelog](https://github.com/Arnavshukla09/RURAL-HEALTHCARE-PLATFORM/blob/df05bdca3767834bf7af09db1e6f797dd94b609f/docs/CHANGELOG.md) records the same maintenance evidence. | The 20 Python checks are separate from the unit count. This maintenance pass did not rerun database/browser CI. Unit tests do not establish clinical validation, national interoperability certification, or production behavior. |

Suggested phrasing: “Built an offline-first healthcare PWA with **10+ language guided workflows** and PostGIS discovery over a **documented 10,000+ facility dataset**.” A separate quality statement may say “Supported by **300+ unit tests**,” with the dated evidence above available for review.

## Eco-Loop

Reviewed checkout: `C:/Users/aarrn/Desktop/honeywell hack`, HEAD `7960e740b2b701fee644b6144964db25c9919b2d`, with substantial uncommitted backend, frontend, test, and documentation edits. The saved audit, JUnit file, and seasonal benchmark below are tracked and unchanged relative to that HEAD; they describe their recorded runs, not a fresh run of the current worktree.

| Resume wording | Supporting evidence | Scope |
| --- | --- | --- |
| **100+ backend tests** | [Dated project audit](https://github.com/Arnavshukla09/Eco_Loop_Building_Agents/blob/7960e740b2b701fee644b6144964db25c9919b2d/docs/project_audit_2026-11-26.md#L58-L75) records 140 backend cases. The [saved JUnit report](https://github.com/Arnavshukla09/Eco_Loop_Building_Agents/blob/7960e740b2b701fee644b6144964db25c9919b2d/docs/validation/audit-2026-11-26/final-backend-tests.xml) contains 140 cases, zero failures/errors/skips, timestamp **26 November 2026, 00:53 IST**. A read-only AST inventory of the current local `tests/test_*.py` files found **126 test function definitions** on 28 November. | Function definitions and collected/parameterized test cases are different counts. The 126 inventory includes current uncommitted test sources and is not a passing test result. The saved 140-case result must not be attributed to the current modified worktree without rerunning it. |
| **40+ simulation scenarios / 30,000+ timesteps** | [Saved seasonal benchmark JSON](https://github.com/Arnavshukla09/Eco_Loop_Building_Agents/blob/7960e740b2b701fee644b6144964db25c9919b2d/docs/validation/seasonal_benchmark.json) contains **48 completed runs** and **32,256 aggregate timesteps**. This was recomputed from the saved `runs` array, without executing the simulator. The [dated audit](https://github.com/Arnavshukla09/Eco_Loop_Building_Agents/blob/7960e740b2b701fee644b6144964db25c9919b2d/docs/project_audit_2026-11-26.md#L74-L76) records the same totals. | Four seasons × three seeds × four controller modes = 48 runs; each has 672 timesteps over seven simulated days. Modes are fixed, scheduled, rule-based and forecast. These are synthetic simulation experiments, not physical-building trials, annual savings validation, or LLM performance results. |

Local source inventory reference: `C:/Users/aarrn/Desktop/honeywell hack/tests/`, including modified tracked test files and the untracked `test_backend_contracts.py`. No GitHub link is supplied for that current uncommitted inventory.

Suggested phrasing: “Built a five-zone HVAC control research prototype with **100+ backend tests**; evaluated controller behavior across **40+ synthetic simulation scenarios** and **30,000+ timesteps**.” The evaluation phrase refers specifically to the saved seasonal study.

## TalentMatch AI

Reviewed checkout: `C:/Users/aarrn/Desktop/Resume checker/talentmatch-ai-main`, HEAD `3e27cd8c82751089bd32c7ba40e8f51b98377f60`, with extensive uncommitted source and deployment edits.

| Resume wording | Supporting evidence | Scope |
| --- | --- | --- |
| **10,000+ character job-description handling** | The committed [API](https://github.com/Arnavshukla09/talentmatch-ai/blob/3e27cd8c82751089bd32c7ba40e8f51b98377f60/api.py) sets `MAX_JD_CHARS = 15_000`; the committed [extension](https://github.com/Arnavshukla09/talentmatch-ai/blob/3e27cd8c82751089bd32c7ba40e8f51b98377f60/extension/popup.js) enforces a 15,000-character limit. Current local files retain that limit; local `src/pipeline.py:69-71` adds a matching pipeline guard. | A supported input/excerpt capacity, not extraction accuracy on every job board, scoring accuracy, throughput, or a performance benchmark. The precise current maximum is **15,000 characters**, so “up to 15,000 characters” is clearer when space permits. The added pipeline guard is uncommitted. |

Contribution scope follows the [committed contributors table](https://github.com/Arnavshukla09/talentmatch-ai/blob/3e27cd8c82751089bd32c7ba40e8f51b98377f60/README.md): Arnav's listed work covers hosting/deployment, web interface/themes, Chrome/Edge extension, coaching integration, ATS warnings, and benchmarking; the ML pipeline and native C++ engine architecture are credited to Anshuman Pandey. Present the application as a team project. Do not infer individual ownership of the scoring engine from integration work.

Suggested phrasing: “Built the web interface and Chrome/Edge extension with saved resume profiles, ATS warnings, opt-in coaching and job-description extraction supporting **10,000+ characters**.” No UI-test metric is included.

## Interpretation limits

For interviews, explain what each quantity measures: a language pack is a guided catalog; a test count is suite size rather than coverage percentage; a simulation scenario is one season/seed/controller run; a timestep is one update of the synthetic building model; a character figure is an input capacity rather than extraction accuracy. Keep these distinctions when describing the work.

- These numbers support project scope and recorded engineering evidence. They do not promise an ATS pass, a guaranteed match score, ranking quality, hiring outcomes, clinical safety, or energy savings in a real building.
- No current public deployment, extension-store release, external API availability, or remote branch synchronization was verified by this review. GitHub links pin locally verified committed content; they are not claims that current uncommitted work is published.
- Saved reports and documented datasets retain their original evidence dates. Rounded lower bounds reduce needless wording changes as projects grow; they do not replace revalidation after removals or behavioral changes.

## Deliverable checks

The revised resume was compiled and visually inspected as one A4 page. Rounded figures remain selectable and extract correctly; project hyperlinks are present. The canonical asset and delivery copy have identical bytes, and the local HTTP download serves that file. Resume content outside Projects was preserved in this metric revision. The matching portfolio badges and the stronger grey light-mode grid were checked at desktop and mobile widths, with no horizontal overflow or captured browser errors. Dark mode was checked and light mode restored. These are document/site checks, separate from the application evidence above.
