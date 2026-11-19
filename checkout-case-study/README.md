# Demo Web Shop checkout case study

A shop charged first-time buyers a 7.00 fee they never chose, and only showed it on the last page. I found it, proved it from three angles, and planned a fix that ships in three safe releases.

PM case study: why first-time buyers abandon checkout on a live demo store, and a prioritized plan (ICE, 10 user stories, 3 sprints, 3 feature-flagged releases) to fix it. Expert review, competitor teardown (Amazon, Noon, Jumia) and an independent AI second opinion.

**Start here:** [case-study.html](case-study.html) · [Slides (PDF)](Demo-Web-Shop-Checkout-Case-Study.pdf)

| +7.00 | 2/5 | 26 | 3 |
|---|---|---|---|
| fee the buyer never chose, shown only on the last page | how well the checkout serves the goal, rated by an independent AI review tool | findings on 11 screens | releases behind feature flags |

## The problem

Demo Web Shop (demowebshop.tricentis.com) is a live demo online store. I reviewed it as if I were its PM, with one goal: raise checkout completion (carts that become orders). That money is already in the cart, so losing it is the most expensive loss.

I focused on one buyer: a doubtful first-time buyer (example persona "Nour"). She found the product cheaper than on Amazon but has never heard of this shop.

## What I found

- A 7.00 cash-on-delivery fee is pre-selected and appears only on the confirm page. On our 10.00 test order the total jumped to 17.00 (+70%). The fee is flat, so it's +7% on a 100 item and +0.4% on a 1,590 laptop. Small orders feel it most; on large orders the surprise, not the amount, breaks trust.
- No delivery date anywhere in the flow. All three rivals show one, with a countdown.
- Template placeholder text on 4 pages ("Put your shipping & returns information here"), and no currency on prices.
- Guest checkout exists but is hidden behind a small grey button. None of the rivals offer guest checkout at all, so this is the shop's one real edge.

## How I know (and how sure I am)

| Source | What it gave |
|---|---|
| Expert review (Nielsen heuristics + a 1–5 "does this screen serve the goal" score per screen) | 24 findings on 11 real screenshots |
| Competitor teardown: Amazon.eg, Noon, Jumia (screens + help pages) | Benchmark: delivery dates, returns promises, no guest checkout |
| Independent AI second opinion (AI design-review tool, run blind to my notes, then double-checked by a second AI) | Checkout scored 2/5; review rated 26/30 for accuracy; agreed on 7 of 7 problems and added 2 I missed |

**Critical note:** all of this is expert or AI opinion. No real users were interviewed (none were reachable), and I had no analytics. The plan treats every finding as a hypothesis until sprint-1 data and a 5–10 buyer test confirm it.

## What I decided

- Wrote 10 user stories before the evidence, then rewrote them after. One hypothesis was disproved (reviews already existed), two were corrected, two new stories appeared. The difference between v1.0 and v2.0 is the learning.
- Prioritized 7 improvements with ICE (Impact × Confidence × Ease, Itamar Gilad's method), with confidence scored from evidence. The highest-impact fix (real total in the cart) dropped from 3rd to 5th because only one walkthrough backed it. So it's tested with buyers first and built last, not rushed and not dropped.
- 3 two-week sprints (48 points): trust and measurement first, then delivery dates and payment clarity, then the real total behind an A/B test.
- 3 releases behind feature flags: deploy switched off, then internal → 10% → 50% → 100%, with a written rollback rule (checkout completion more than 10% below baseline for 2 days → switch off).

## What I'd challenge in my own work

- The headline number depends on the item. "+70%" is true only for a 10.00 order. I reframed it as "a fee the buyer never chose" after testing it against other prices.
- My walkthrough used a saved address, so it hid the full form a real first-time guest would face. The independent double-check caught this, not me.
- Money figures are illustrative. For example, 1,000 checkouts × 5 points uplift × 1,000 EGP = +50,000 EGP a month. They show the reasoning, not a result.
- The team, dates and capacity are assumptions that a real team would re-estimate.

## Skills shown

Problem framing · persona and JTBD · user-flow mapping · heuristic evaluation · competitor teardown · hypothesis testing · evidence-based prioritization (ICE, Confidence Meter, MoSCoW) · user stories with acceptance criteria · system-impact mapping · sprint planning (DoR, DoD, capacity, dependencies) · release management (feature flags, staged rollout, guardrails, hypercare) · metric trees

## Page map

| File | What it is |
|---|---|
| [case-study.html](case-study.html) | One-page case study (start here) |
| [index.html](index.html) | Playbook hub: all 11 steps, decision log, traced example |
| [personas-stories-v1.html](personas-stories-v1.html) | Persona + 10 stories v1.0, written before the evidence |
| [flow-diagram.html](flow-diagram.html) | User flow, today vs improved |
| [evidence.html](evidence.html) | Evidence log (26 findings) |
| [annotated-walkthrough.html](annotated-walkthrough.html) | 11 real screenshots with pins (personal data blurred) |
| [ai-review.html](ai-review.html) + `ai-review/` | Independent AI second opinion |
| [system-view.html](system-view.html) | Which system parts each change touches |
| [ux-report.html](ux-report.html) | UX evaluation report |
| [improvements.html](improvements.html) | 7 improvements with evidence, metric and target |
| [ice-prioritization.html](ice-prioritization.html) | ICE scoring, every calculation shown |
| [stories-v2.html](stories-v2.html) | 10 stories v2.0 with acceptance criteria |
| [sprint-plan.html](sprint-plan.html) | 3-sprint plan |
| [release-plan.html](release-plan.html) | Release plan v2.0 |
| [deck.html](deck.html) | Source of the PDF slides |

Demo Web Shop is a public demo store by Tricentis. Amazon, Noon and Jumia appear only as competitor screenshots for comparison.
