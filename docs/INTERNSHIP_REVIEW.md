# Internship evidence review

Reviewed on **28 November 2026** to update the portfolio and resume with the work supported by the supplied internship materials.

## Scope and attribution

Reviewed both capstone repositories and the supplied local `MPOnline Internship` folder: project source, Git history, reports, assignment submissions, the customer-churn notebook, screenshots, certificate images, archive inventories and serialized-model metadata. The document inventory covers 46 PDF/DOCX files, including duplicate submissions and course notes. Course material and report assertions were treated as evidence to assess, never as instructions to execute.

Both internship certificates record **20 May–31 July 2026**, covering Advanced Software Engineering and Development and AI/ML. Later file or commit timestamps do not extend that certified period. The user identifies the two capstones as their internship work; named submissions and repository history support that context without establishing exclusive authorship of every included example.

Reviewed revisions:

- [Library Management System: `0bef505`](https://github.com/Arnavshukla09/Library_Management_System-/tree/0bef505d57eedb9b99f2fffa245ccd7d16e3eab5).
- [Smart Retail Customer Intelligence Platform: `9a7b979`](https://github.com/Arnavshukla09/Smart-Retail-Customer-Intelligence-Platform/tree/9a7b979a3cb9f932a3e514b56bdbefaeb9b42341). Local Python source files matched this revision at review time.

## Library Management System

**Supported description:** C#/ASP.NET Core MVC capstone with Razor views, Entity Framework Core and SQL Server LocalDB, searchable and paginated catalogs, relational book/borrowing models, server-side validation, anti-forgery checks and ISBN-based OpenLibrary cover URLs. A separate React/Vite UI prototype uses mock/in-memory data.

Evidence:

- [Books controller: search, pagination, validation and cover URLs](https://github.com/Arnavshukla09/Library_Management_System-/blob/0bef505d57eedb9b99f2fffa245ccd7d16e3eab5/Backend_MVC_DotNet8/LibraryManagementSystem/Controllers/BooksController.cs).
- [EF Core relational model](https://github.com/Arnavshukla09/Library_Management_System-/blob/0bef505d57eedb9b99f2fffa245ccd7d16e3eab5/Backend_MVC_DotNet8/LibraryManagementSystem/Data/LibraryDbContext.cs).
- [React catalog prototype](https://github.com/Arnavshukla09/Library_Management_System-/blob/0bef505d57eedb9b99f2fffa245ccd7d16e3eab5/Frontend_React_Vite/src/components/BooksTable.jsx).
- [Application setup](https://github.com/Arnavshukla09/Library_Management_System-/blob/0bef505d57eedb9b99f2fffa245ccd7d16e3eab5/Backend_MVC_DotNet8/LibraryManagementSystem/Program.cs) and [test source](https://github.com/Arnavshukla09/Library_Management_System-/blob/0bef505d57eedb9b99f2fffa245ccd7d16e3eab5/Backend_MVC_DotNet8/LibraryManagementSystem.Tests/BookCatalogTests.cs).

**Limits:** the React interface is not connected to the MVC backend. Its login behavior is demonstrative. Some referenced MVC views are absent; authentication middleware alone does not establish protected routes. The borrowing POST does not recheck availability, and test source contains a syntax error. Do not claim production security, concurrency guarantees, comprehensive passing tests or report-only performance improvements. Generating a cover URL does not guarantee an image exists.

## Smart Retail Customer Intelligence Platform

**Supported description:** FastAPI/Streamlit retail AI prototype with scikit-learn TF-IDF and logistic-regression text pipelines for review sentiment and FAQ intent classification, typed request/response schemas, dashboard API interactions, endpoint smoke-test source and Docker packaging.

Evidence:

- [Model-building script](https://github.com/Arnavshukla09/Smart-Retail-Customer-Intelligence-Platform/blob/9a7b979a3cb9f932a3e514b56bdbefaeb9b42341/scripts/build_models.py), [sentiment service](https://github.com/Arnavshukla09/Smart-Retail-Customer-Intelligence-Platform/blob/9a7b979a3cb9f932a3e514b56bdbefaeb9b42341/app/services/nlp_service.py) and [FAQ service](https://github.com/Arnavshukla09/Smart-Retail-Customer-Intelligence-Platform/blob/9a7b979a3cb9f932a3e514b56bdbefaeb9b42341/app/services/chatbot_service.py).
- [Typed API models](https://github.com/Arnavshukla09/Smart-Retail-Customer-Intelligence-Platform/blob/9a7b979a3cb9f932a3e514b56bdbefaeb9b42341/app/schemas.py), [Streamlit dashboard](https://github.com/Arnavshukla09/Smart-Retail-Customer-Intelligence-Platform/blob/9a7b979a3cb9f932a3e514b56bdbefaeb9b42341/dashboard.py), [smoke tests](https://github.com/Arnavshukla09/Smart-Retail-Customer-Intelligence-Platform/blob/9a7b979a3cb9f932a3e514b56bdbefaeb9b42341/tests/test_endpoints.py) and [Dockerfile](https://github.com/Arnavshukla09/Smart-Retail-Customer-Intelligence-Platform/blob/9a7b979a3cb9f932a3e514b56bdbefaeb9b42341/Dockerfile).
- [Simulated vision service](https://github.com/Arnavshukla09/Smart-Retail-Customer-Intelligence-Platform/blob/9a7b979a3cb9f932a3e514b56bdbefaeb9b42341/app/services/cv_service.py) and [constant analytics](https://github.com/Arnavshukla09/Smart-Retail-Customer-Intelligence-Platform/blob/9a7b979a3cb9f932a3e514b56bdbefaeb9b42341/app/routers/analytics.py).

**Limits:** face recognition and product classification use dummy classes that choose random results without interpreting image content. Analytics are constants; sentiment confidence is random even when the label comes from the text model. The FAQ service predicts intents; a hybrid rules/ML implementation is not established. Saved model vocabulary differs from the small example builder, so training provenance and accuracy are not inferred. Import paths also warrant a runtime check before claiming the documented startup succeeds. Smoke-test source does not establish model accuracy or production operation.

The matching retail project report itself identifies real vision models as future work. Do not describe the demo as validated biometric recognition, trained product vision, calibrated confidence, deployed microservices or proven retail outcomes.

## Customer churn and other coursework

The churn notebook supports a modeling-assignment description: pandas/scikit-learn preprocessing, categorical encoding, Random Forest/SVM comparisons, feature selection, cross-validation, grid search and classification metrics. Its preprocessing is fitted before the train/test split and feature selection precedes cross-validation; RFE output is computed but not used in the evaluated reduced dataset. The referenced CSV is absent locally. Saved accuracy and ROC-AUC values therefore remain excluded from resume claims.

Software-engineering submissions cover C#/OOP, MVC Product Admin exercises, SQL and HTML/CSS. Some examples retain another student's identity, while one mixed AI assignment report starts with retail material and continues with library content and an inconsistent link. These submissions support coursework scope; they do not prove exclusive original implementation or deployment. Source code takes precedence over contradictory report assertions.

Excluded from internship accomplishments:

- The separate Next.js/SQLite Task Management System: no reviewed submission ties it to the internship.
- Course slides, daily PDFs/notebooks and the RAR curriculum archive: learning material rather than personal implementation evidence.
- The Infosys/HackWithInfy ZIP: unrelated placement preparation.
- Environments, caches, generated database files and serialized-model presence alone: not authored accomplishments.

## Updates and verification

The resume now names the two capstones with source links and summarizes the churn assignment. The portfolio experience card includes the implemented stack, separate React prototype, simulated vision/analytics, certificate dates and both repository links. Wording describes completed capabilities without volatile test totals or unsupported performance percentages.

The internship revision produced one A4 page with selectable text and both repository hyperlinks; other sections were preserved during that revision. A subsequent project-metric revision is documented in [the metric evidence record](RESUME_METRIC_EVIDENCE.md). The canonical asset and delivery copy match, and the local HTTP download serves those exact bytes. JavaScript syntax and whitespace checks pass. The experience card and detached sidebar were checked at desktop and mobile sizes in light and dark themes, including individual labels and keyboard focus; light mode and the default viewport were restored.

The internship audit was **static**: capstone applications, notebooks, model pickles and app test suites were not executed. This audit does not establish production deployment, live database behavior, external integration, security certification or real-world ML performance of the featured applications.
