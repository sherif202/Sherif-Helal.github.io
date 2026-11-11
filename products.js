/*
  The portfolio's content. To add a product, copy one { ... } block inside
  the right group's "products" list (or add a new group) and edit it.

  pieces: what exists for the product. Give a "url" when there is something
  to open; leave "url" out and the piece shows as not made yet.
  cover:  an image in /covers (first page of the case study). Optional.
*/
window.PORTFOLIO = [
  {
    group: "OVARC",
    about:
      "Payroll and HR for Egyptian companies. Independent work, built from public sources and the OVARC case study. Names, dates and figures in the three delivery portfolios are illustrative examples.",
    products: [
      {
        name: "Rule Watch",
        line: "One decree changes every client's payroll at once. Rule Watch turns each legal change into one versioned rule pack.",
        detail:
          "Every January, Egypt's insured salary band resets. OVARC's compliance engine drafts the rule pack, legal counsel confirms it, and payroll sees the impact on each client before approving, with source, version and undo kept.",
        role: "Product manager, self-initiated",
        status: "Research to PRD, prototype and roadmap, plus a clickable demo on simulated data. Not tested with OVARC.",
        cover: "covers/ovarc-rule-watch.jpg",
        facts: ["19 must-have requirements", "Given / When / Then acceptance criteria", "Rule feed to impact report to approval"],
        pieces: [
          { label: "One-page PRD", url: "https://claude.ai/artifact/FU4A79tkD8ikWRGD2KmyKD" },
          { label: "Detailed PRD", url: "https://claude.ai/artifact/DnjrAc5181Kn4VX1a4BHu1" },
          { label: "Prototype", url: "https://stitch.withgoogle.com/preview/16220401715492585262?node-id=c16ef6e9c8324cfea4287be9b564e18d" },
          { label: "Vision to roadmap", url: "https://claude.ai/artifact/DNWSpp7tFPeZ52zxMbYCuE" }
        ]
      },
      {
        name: "Payroll",
        line: "A monthly run that lands right the first time, in a country where the law changes under you.",
        detail:
          "Seven pages that trace one product from vision and strategy through build-vs-buy, roadmap, PRD, wireframe, user stories and a requirements matrix. The rules engine and a finance-signed golden test suite are built; PDF rendering and SMS are bought.",
        role: "Product manager",
        status: "Illustrative delivery portfolio. Figures are examples, not live results.",
        facts: ["Rules as versioned data", "Golden test suite signed off by finance", "5 user stories for release 1"],
        cover: "covers/ovarc-payroll.jpg",
        pieces: [{ label: "Case study (PDF)", url: "case-studies/ovarc-payroll.pdf" }]
      },
      {
        name: "Leave Management",
        line: "Leave requested, approved and paid correctly, with no email threads and no Excel balance sheet to dispute.",
        detail:
          "Follows one story, Request leave, from the customer problem to the screen an employee opens on his phone. Includes the written decision to split the feature across two releases and what that cut costs HR.",
        role: "Product manager",
        status: "Illustrative delivery portfolio. Figures are examples, not live results.",
        facts: ["Arabic-first, phone-first", "One story split into 5 slices", "Decision record for the release split"],
        cover: "covers/ovarc-leave-management.jpg",
        pieces: [{ label: "Case study (PDF)", url: "case-studies/ovarc-leave-management.pdf" }]
      },
      {
        name: "Platform, Portal and Trust",
        line: "Sign-in, roles, tenant isolation and an audit trail: the product nobody sees and everybody depends on.",
        detail:
          "Identity and penetration testing are bought; tenant isolation and the audit log are built, with a leak test that blocks every merge. Legal counsel is in the room from refinement, not at the end.",
        role: "Product manager",
        status: "Illustrative delivery portfolio. Figures are examples, not live results.",
        facts: ["Leak test on every build", "MFA for every payroll role", "Arabic right-to-left on every screen"],
        cover: "covers/ovarc-platform-trust.jpg",
        pieces: [{ label: "Case study (PDF)", url: "case-studies/ovarc-platform-trust.pdf" }]
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
          "A free, earned-status programme for weekly households in one Dubai zone. It rewards order frequency and basket value equally, and pays an automatic credit when an order is late.",
        role: "Product manager",
        status: "PRD v0.2, a clickable demo on simulated data, and a three-stage pilot plan. No surveys run and no results yet.",
        facts: ["Target: +0.2 repeat orders per active user a month", "Reward cost capped at AED 9.18 per redeemed order", "15 ideas, 1 pilot"],
        cover: "covers/oasis-regulars.jpg",
        pieces: [
          { label: "Case study (PDF)", url: "case-studies/oasis-regulars.pdf" },
          { label: "Financial model", url: "https://claude.ai/artifact/G6TeVJtQL6HWdVsZd6Qcmb" },
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
