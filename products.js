/*
  The portfolio's content. To add a product, copy one { ... } block inside
  the right group's "products" list (or add a new group) and edit it.

  pieces: what exists for the product. Give a "url" when there is something
  to open; leave "url" out and the piece shows as not made yet.
  cover:  an image in /covers (first page of the case study). Optional.
*/
window.PORTFOLIO = [
  {
    group: "FortyGuard",
    about: "Street-level temperature data sold as a dashboard, an API and an MCP server for AI agents. Independent evaluation for my FortyGuard Product Internship application. Not affiliated with FortyGuard.",
    products: [
      {
        name: "FortyGuard product evaluation: Dashboard, API and MCP",
        line: "The data and the AI assistant are ready. The dashboard isn't yet: it makes a 0.3 °C difference look like a heat emergency.",
        detail:
          "Tested all three products the way a new customer would, over two days, against a written plan and hypotheses. Every check went into an evidence log. The findings are traced to four root causes through a data-systems lens, turned into ten prioritised fixes, and end with one product idea: ring navigation for the reports customers generate.",
        role: "Product evaluator, hiring assessment",
        status: "Hands-on testing on a free trial account. No access to real customers or usage data; segment and timing views are my own reading.",
        facts: ["159 checks and findings logged", "32 serious issues, 21 in the dashboard", "13 places where docs and product disagree", "10 fixes in priority order"],
        cover: "covers/fortyguard-evaluation.jpg",
        pieces: [
          { label: "Overview", url: "fortyguard-evaluation/index.html" },
          { label: "Executive report (PDF)", url: "fortyguard-evaluation/executive-report.pdf" },
          { label: "Full article", url: "fortyguard-evaluation/article.html" },
          { label: "Evidence log", url: "fortyguard-evaluation/evidence/evidence-log.xlsx" }
        ]
      }
    ]
  },
  {
    group: "Demo Web Shop",
    about: "A public demo store by Tricentis, reviewed as if I were its PM. Not affiliated with Tricentis.",
    products: [
      {
        name: "Checkout for first-time buyers",
        line: "A shop charged first-time buyers a 7.00 fee they never chose, and only showed it on the last page.",
        detail:
          "Maps the checkout, finds where a doubtful first-time buyer gives up, and benchmarks Amazon, Noon and Jumia. The findings become 7 improvements ranked with ICE, 10 user stories, 3 sprints and 3 releases behind feature flags with a rollback rule.",
        role: "Product manager",
        status: "Expert review, competitor teardown and an independent AI second opinion. No real users were interviewed and there were no analytics; money figures are examples.",
        facts: ["26 findings on 11 screens", "7 improvements ranked with ICE", "10 user stories, rewritten after the evidence", "3 releases behind feature flags"],
        cover: "covers/demo-web-shop-checkout.jpg",
        pieces: [
          { label: "Case study", url: "checkout-case-study/case-study.html" },
          { label: "Full playbook", url: "checkout-case-study/index.html" },
          { label: "Slides (PDF)", url: "checkout-case-study/Demo-Web-Shop-Checkout-Case-Study.pdf" }
        ]
      }
    ]
  },
  {
    group: "Egyptian HR-tech",
    about:
      "Payroll and HR software for Egyptian companies. Independent work on an Egyptian HR-tech company, built from public sources and a case study. Names, dates and figures in the three delivery portfolios are illustrative examples.",
    products: [
      {
        name: "Rule Watch: payroll-law compliance for Egyptian HR-tech",
        line: "One decree changes every client's payroll at once. Rule Watch turns each legal change into one versioned rule pack.",
        detail:
          "Every January, Egypt's insured salary band resets. The company's compliance engine drafts the rule pack, legal counsel confirms it, and payroll sees the impact on each client before approving, with source, version and undo kept.",
        role: "Product manager, self-initiated",
        status: "Research to PRD, prototype and roadmap, plus a clickable demo on simulated data. Not tested with the company.",
        cover: "covers/hrtech-rule-watch.jpg",
        facts: ["19 must-have requirements", "Given / When / Then acceptance criteria", "Rule feed to impact report to approval"],
        pieces: [
          { label: "One-page PRD", url: "https://claude.ai/artifact/FU4A79tkD8ikWRGD2KmyKD" },
          { label: "Detailed PRD", url: "https://claude.ai/artifact/DnjrAc5181Kn4VX1a4BHu1" },
          { label: "Prototype", url: "https://stitch.withgoogle.com/preview/16220401715492585262?node-id=c16ef6e9c8324cfea4287be9b564e18d" },
          { label: "Vision to roadmap", url: "https://claude.ai/artifact/DNWSpp7tFPeZ52zxMbYCuE" }
        ]
      },
      {
        name: "HR-tech platform: payroll",
        line: "A monthly run that lands right the first time, in a country where the law changes under you.",
        detail:
          "Seven pages that trace one product from vision and strategy through build-vs-buy, roadmap, PRD, wireframe, user stories and a requirements matrix. The rules engine and a finance-signed golden test suite are built; PDF rendering and SMS are bought.",
        role: "Product manager",
        status: "Illustrative delivery portfolio. Figures are examples, not live results.",
        facts: ["Rules as versioned data", "Golden test suite signed off by finance", "5 user stories for release 1"],
        cover: "covers/hrtech-payroll.jpg",
        pieces: [{ label: "Case study (PDF)", url: "case-studies/hrtech-payroll.pdf" }]
      },
      {
        name: "HR-tech platform: leave",
        line: "Leave requested, approved and paid correctly, with no email threads and no Excel balance sheet to dispute.",
        detail:
          "Follows one story, Request leave, from the customer problem to the screen an employee opens on his phone. Includes the written decision to split the feature across two releases and what that cut costs HR.",
        role: "Product manager",
        status: "Illustrative delivery portfolio. Figures are examples, not live results.",
        facts: ["Arabic-first, phone-first", "One story split into 5 slices", "Decision record for the release split"],
        cover: "covers/hrtech-leave-management.jpg",
        pieces: [{ label: "Case study (PDF)", url: "case-studies/hrtech-leave-management.pdf" }]
      },
      {
        name: "HR-tech platform: access control",
        line: "Sign-in, roles, tenant isolation and an audit trail: the product nobody sees and everybody depends on.",
        detail:
          "Identity and penetration testing are bought; tenant isolation and the audit log are built, with a leak test that blocks every merge. Legal counsel is in the room from refinement, not at the end.",
        role: "Product manager",
        status: "Illustrative delivery portfolio. Figures are examples, not live results.",
        facts: ["Leak test on every build", "MFA for every payroll role", "Arabic right-to-left on every screen"],
        cover: "covers/hrtech-platform-trust.jpg",
        pieces: [{ label: "Case study (PDF)", url: "case-studies/hrtech-platform-trust.pdf" }]
      }
    ]
  },
  {
    group: "Nova Bank",
    about: "A fictional Egyptian bank. AI Product Management capstone, November 2026.",
    products: [
      {
        name: "Nova Support Copilot",
        line: "The right answer about your own fee, dispute or card, in your language, with a person one tap away.",
        detail:
          "An AI support copilot that answers from the customer's own records and the bank's rules, in Arabic, English and Franco-Arabic. It is read-only, and hands fraud, complaints and anything it is unsure of to a person.",
        role: "Product manager and builder",
        status: "Built and tested end to end on synthetic data. Stopped before the internal beta; no real users yet.",
        facts: ["106 release-test cases", "13 of 13 fraud cases sent to Fraud", "33 of 34 answers grounded", "16 scored versions"],
        cover: "covers/nova-support-copilot.jpg",
        pieces: [
          { label: "Case study (PDF)", url: "case-studies/nova-support-copilot.pdf" },
          { label: "PRD", url: "https://github.com/sherif202/nova-support-copilot/blob/main/docs/01-PRD.md" },
          { label: "Shadow-run results", url: "https://github.com/sherif202/nova-support-copilot/blob/main/docs/stages/shadow-run-results.md" },
          { label: "Code on GitHub", url: "https://github.com/sherif202/nova-support-copilot" }
        ]
      }
    ]
  },
  {
    group: "Ijar",
    arabic: "ايجار",
    about: "My own Stage 0 venture in Egypt's informal rental market. Founder and PM, started November 2026.",
    products: [
      {
        name: "Re-letting a flat from abroad",
        line: "A WhatsApp agreement, payment and settlement ledger for Egyptians in the Gulf who rent out a flat in Cairo or Giza.",
        detail:
          "The owner pays half a broker's fee, only when the tenant moves in. Both sides confirm a dated move-in video and checklist with one word, and disputes are settled from that record within 48 hours.",
        role: "Founder and product manager",
        status: "Stage 0, run by hand on WhatsApp and one shared sheet. No owner has replied to the survey yet.",
        facts: ["15 ideas, 1 built by hand", "Evidence library of 16 user and 22 market sources", "Pass mark: 1 owner still using the ledger a month later"],
        cover: "covers/ijar.jpg",
        pieces: [
          { label: "Case study (PDF)", url: "case-studies/ijar.pdf" },
          { label: "Discovery report", url: "https://claude.ai/artifact/1gxEqrXxHUUgSxabQVMbSG" },
          { label: "Prototype", url: "https://claude.ai/artifact/G8bxL2jKz7FZEqkbzFRMT9" },
          { label: "All documents", url: "https://claude.ai/artifact/LpM28VT7pRJA5XM26VPdDc" }
        ]
      }
    ]
  },
  {
    group: "Oasis Express",
    about: "A sample quick-commerce company in the UAE, Saudi Arabia, Egypt and Kuwait.",
    products: [
      {
        name: "Oasis Regulars",
        line: "Loyalty you earn, not loyalty you pay for.",
        detail:
          "A free, earned-status programme for weekly households in one Dubai zone. It rewards order frequency and basket value equally, pays an automatic credit when an order is late, and gives Gold customers 4 free deliveries a month within 4 km. Every document, from the brief to the validation audit, is traced and readable in the browser.",
        role: "Product manager",
        status: "Fictional course case. PRD v0.2, cost models on assumed data, app screens with 21 edge cases, and a Test & Learn validation audit. No surveys run and no results yet.",
        facts: ["19 documents traced from brief to test card", "Reward cost capped at AED 9.18 per redeemed order", "Gold 4, Silver 1 free deliveries a month", "Validation audit: 22/40, 36/40 with three fixes"],
        cover: "covers/oasis-regulars.jpg",
        pieces: [
          { label: "Project map (all documents)", url: "oasis-regulars/index.html" },
          { label: "PRD v0.2", url: "oasis-regulars/index.html#prd" },
          { label: "Rewards and pricing", url: "oasis-regulars/index.html#pricing" },
          { label: "App screens", url: "oasis-regulars/index.html#screens" },
          { label: "Area selection", url: "oasis-regulars/index.html#areas" },
          { label: "Validation audit", url: "oasis-regulars/index.html#audit" },
          { label: "Case study deck", url: "oasis-regulars/index.html#deck" },
          { label: "Slides (PDF)", url: "case-studies/oasis-regulars.pdf" },
          { label: "Demo code on GitHub", url: "https://github.com/sherif202/oasis-rewards-demo" }
        ]
      }
    ]
  },
  {
    group: "Careem",
    about: "A practice build for a ride-hailing and delivery support team. Not affiliated with Careem.",
    products: [
      {
        name: "Support Triage",
        line: "Paste incoming rider complaints and see the most urgent ones first.",
        detail:
          "A one-page internal dashboard for a support agent. Each complaint gets a category (Safety, Payment, Driver, App or Other) and a one-line reason it is urgent, with safety cases marked in red.",
        status: "Interface only. It shows five fixed example cards; no AI model is connected yet.",
        facts: ["5 complaint categories", "Safety flagged first"],
        pieces: [{ label: "Code on GitHub", url: "https://github.com/sherif202/Careem_-triage-" }]
      }
    ]
  },
  {
    group: "Data and analytics",
    about: "Earlier analytics projects, 2024 to 2025.",
    products: [
      {
        name: "University evaluation system",
        line: "Moves a university's teaching evaluations from Excel sheets and forms to a data pipeline with dashboards.",
        detail:
          "An SSIS pipeline loads the Excel data into SQL Server and a data warehouse, a sentiment model reads the open-ended feedback as positive, negative or neutral, and Power BI shows the results.",
        status: "Pipeline files, sentiment notebook and report are in the repository.",
        facts: ["SSIS and SQL Server", "Sentiment analysis", "Power BI"],
        pieces: [{ label: "Repository", url: "https://github.com/sherif202/Evaluation-System-Digitalization" }]
      },
      {
        name: "Olist e-commerce analysis",
        line: "Brazilian marketplace orders from 2016 to 2018, cleaned in SQL and modelled in Power BI.",
        detail:
          "Covers data-quality fixes, ten descriptive questions on revenue, products, customers and sellers, customer segmentation, and a six-month sales forecast by product category.",
        status: "SQL scripts and the final report are in the repository.",
        facts: ["SQL data cleaning", "Customer segmentation", "6-month sales forecast"],
        pieces: [{ label: "Repository", url: "https://github.com/sherif202/Olist-" }]
      }
    ]
  }
];
