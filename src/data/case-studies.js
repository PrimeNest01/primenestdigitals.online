// ============================================================
// PrimeNest Digitals — Case Studies Data
// Used by: case-study.astro (dynamic route)
// ============================================================

export const caseStudies = [
  {
    slug: 'meta-ads-526k',
    title: 'How $41,540 in Meta Ads spend became $526,488 in ecommerce revenue.',
    category: 'Meta Ads',
    client: 'Skincare brand (confidential)',
    market: 'US, Canada, UK',
    timeline: '6 months',
    heroImage: 'gradient', // 'gradient' uses purple gradient placeholder
    summary: 'A skincare brand with strong product, weak funnel. We rebuilt the ad account structure, creative testing cadence, and post-click email flow. Six months. 12.87X ROAS.',
    metrics: [
      { num: '$526K', label: 'Revenue' },
      { num: '12.87X', label: 'ROAS' },
      { num: '6mo', label: 'Timeline' },
      { num: '3', label: 'Markets' },
    ],
    chapters: [
      {
        num: '01',
        title: 'The account was burning spend on a broken funnel.',
        label: 'Diagnosis',
        body: "When we audited the account in February 2026, Meta was delivering clicks. The site was losing them in the first scroll. The cart recovery flow sent one email, 24 hours later, with no segmentation. We pulled 90 days of data and found the leak in three places.\n\nLeak 1: 68% of paid traffic bounced from the product page in under 15 seconds. The page had been designed by a developer, not a copywriter. Headline was the product name. Hero image was a flat product shot.\n\nLeak 2: The cart recovery flow sent one email — a 20% discount — 24 hours after abandonment. No segmentation. No send-time optimisation. 71% of these emails landed at 3 a.m. local time in the recipient's market. Open rate: 4.2%.\n\nLeak 3: Server-side tracking wasn't deployed. The Meta algorithm was optimising against a signal it could only see 38% of the time. It was guessing."
      },
      {
        num: '02',
        title: 'Rebuild the mechanism before scaling the spend.',
        label: 'Strategy',
        body: "We paused scaling for two weeks. Not because we wanted to — because the math demanded it. Scaling a leaking funnel is the most expensive mistake in paid media.\n\nThe rebuild order, in sequence:\n\n- Product page: new copy hierarchy, social proof surfaced above the fold, urgency elements without being sleazy\n- Four-email cart recovery flow: browse → cart → checkout-start → purchase, with send-time optimisation per market\n- Creative testing matrix: six concepts live at any time, rotated weekly, killed at statistical significance not gut feel\n- Server-side tracking via Meta CAPI + browser pixel + enhanced matching — algorithm finally saw 92% of conversions\n\nOnly after all four were live did we turn the spend back up. The instinct was to scale sooner. The math said no."
      },
      {
        num: '03',
        title: 'Test like a portfolio, not a lottery.',
        label: 'Execution',
        body: "Six creatives live at any time. Each had a clear hypothesis: UGC with founder, lifestyle product, before/after, social proof, offer-led, educational. Rotated weekly. Killed when statistical significance said one was outperforming — not when the founder's gut said so.\n\nAudience layering: coldest prospecting looked different from warm retargeting, which looked different from the recent-purchaser nurture. Each piece knew what the other was doing. The creative that worked at the top of the funnel didn't get served at the bottom — because the message needed to be different.\n\nEmail flows segmented by browse, cart, and checkout-start. Each with its own cadence and copy. The flow that recovered a browser was very different from the flow that recovered a checkout-start abandoner."
      },
      {
        num: '04',
        title: '$526,488 in tracked revenue. 12.87X return.',
        label: 'Result',
        body: "Six months. Three markets. One accountable team. The brand now runs profitably on paid acquisition — something it couldn't do before — and the email flow alone contributes 18% of monthly revenue without a single additional dollar of ad spend.\n\nThe numbers, for the record:\n\n- Total ad spend: $41,540 over six months\n- Revenue attributed to paid: $526,488\n- Blended ROAS: 12.87X\n- Email-attributable revenue: 18% of monthly total\n- Average order value: up 22%\n- Repeat purchase rate: up from 11% to 28%\n\nThat's the difference between a funnel and a mechanism. The funnel moved traffic. The mechanism compounds."
      },
    ],
  },
  {
    slug: 'ghl-ai-automation',
    title: 'How ChatGPT + GoHighLevel eliminated manual lead follow-up for a real estate business.',
    category: 'Marketing Automation',
    client: 'Real estate brokerage (confidential)',
    market: 'US — Texas',
    timeline: '3 months',
    heroImage: 'gradient',
    summary: 'A real estate brokerage drowning in unmanaged leads. We built an AI-powered lead qualification system in GoHighLevel — 41% faster response time, 22% higher conversion.',
    metrics: [
      { num: '41%', label: 'Faster response' },
      { num: '22%', label: 'Higher conversion' },
      { num: '3mo', label: 'Timeline' },
      { num: '1', label: 'Market' },
    ],
    chapters: [
      {
        num: '01',
        title: 'The brokerage was drowning in leads and starved for follow-up.',
        label: 'Diagnosis',
        body: "A 12-agent brokerage generating 80+ leads per week through Zillow, Realtor.com, and their own site. The problem: agents were supposed to follow up, but they didn't. Average response time was 14 hours. By the time anyone called, the lead had already moved on.\n\nWe audited 6 months of CRM data. The numbers were brutal:\n\n- 38% of leads were never contacted at all\n- 62% were contacted more than 24 hours after submission\n- 0% were contacted inside the industry-recommended 5-minute window\n- Conversion rate from lead to appointment: 4.1%\n\nThe brokerage wasn't broken. The follow-up system was."
      },
      {
        num: '02',
        title: 'Build the AI assistant that never sleeps.',
        label: 'Strategy',
        body: "We didn't replace the agents — we augmented them. The plan:\n\n- Build an AI lead qualification flow in GoHighLevel that engages every lead inside 30 seconds\n- Use ChatGPT to ask 3–5 qualifying questions (budget, timeline, location, agent preference)\n- Route qualified leads to the right agent via Slack + SMS\n- Send unqualified leads to a nurture sequence so they don't bounce\n- Track everything in a dashboard the broker can see\n\nThe agents would still close the deals. The AI would handle the first 5 minutes."
      },
      {
        num: '03',
        title: 'Live in 3 weeks, refined in 3 months.',
        label: 'Execution',
        body: "Week 1: GoHighLevel CRM setup, integration with Zillow + Realtor.com lead sources, ChatGPT API connection, qualifying questions script.\n\nWeek 2: AI flow built, tested with 100 historical leads, prompt tuned for accuracy and tone.\n\nWeek 3: Soft launch with 25% of new leads. Monitored response time, qualification accuracy, agent feedback. Adjusted the prompt, the routing rules, and the Slack notification format.\n\nWeek 4+: Full launch with all new leads. Monthly refinement based on conversion data."
      },
      {
        num: '04',
        title: '41% faster response. 22% higher conversion.',
        label: 'Result',
        body: "Three months in, the numbers:\n\n- Average response time: 14 hours → 8 minutes (41% faster)\n- Lead-to-appointment conversion: 4.1% → 5.0% (22% higher)\n- Agents now only talk to qualified leads (saves 6+ hours per agent per week)\n- Broker can see in real time which agents are following up, which leads are stuck, and where the pipeline is leaking\n\nThe AI didn't replace the agents. It made them 22% more productive. That's the mechanism."
      },
    ],
  },
  {
    slug: 'mrozinski-construction',
    title: 'How a professional WordPress website helped Mrozinski Construction win new contracts.',
    category: 'Website Design',
    client: 'Mrozinski Construction',
    market: 'Canada — Victoria, BC',
    timeline: '8 weeks',
    heroImage: 'gradient',
    summary: 'A construction company with a 15-year-old WordPress site that no longer reflected their work. We rebuilt the site around their highest-margin services. 6 months later, they\'d won 3 new contracts from organic search.',
    metrics: [
      { num: '3', label: 'New contracts in 6mo' },
      { num: '8wk', label: 'Rebuild timeline' },
      { num: '180%', label: 'Organic traffic lift' },
      { num: '94', label: 'Lighthouse score' },
    ],
    chapters: [
      {
        num: '01',
        title: 'The 15-year-old WordPress site wasn\'t doing the work anymore.',
        label: 'Diagnosis',
        body: "Mrozinski Construction had a website from 2011. It worked technically, but:\n\n- The services list was outdated (they no longer did roofing, but it was the first thing on the page)\n- The project gallery hadn't been updated since 2018\n- No Google Business Profile optimisation\n- No blog, no SEO content\n- Mobile experience was broken (text was unreadable on iPhone)\n- Page speed score: 31/100\n\nThey were still getting referrals — that was their main pipeline — but new construction contracts from search? Zero."
      },
      {
        num: '02',
        title: 'Rebuild around the highest-margin services.',
        label: 'Strategy',
        body: "We didn't rebuild the site as a 1:1 copy. We rebuilt it as a conversion-focused site that reflected what Mrozinski actually does best.\n\nThe plan:\n\n- Audit their last 5 years of projects to find the highest-margin services\n- Build the site around those services (commercial renovations, custom homes, heritage restorations)\n- Drop the services they no longer offered\n- Build a project gallery that was easy to update\n- Add a Google Business Profile optimisation layer\n- Build 4 cornerstone SEO pages (one per service + one per city)\n- Build a simple CMS workflow so the founder could update the gallery himself"
      },
      {
        num: '03',
        title: '8 weeks from kickoff to launch.',
        label: 'Execution',
        body: "Week 1: Discovery. Brand audit, customer interviews, competitor analysis, project portfolio review.\n\nWeek 2–3: Design. Wireframes, design system, high-fidelity mockups, copy drafts (we wrote the copy — not the founder).\n\nWeek 4–6: Build. WordPress development, content migration, image optimisation, schema markup, Google Business Profile setup.\n\nWeek 7: Soft launch. Internal QA, founder review, final fixes.\n\nWeek 8: Public launch. 301 redirects from the old site, sitemap submission to Google, post-launch monitoring."
      },
      {
        num: '04',
        title: '3 new contracts in 6 months — all from organic search.',
        label: 'Result',
        body: "Six months post-launch:\n\n- 3 new construction contracts (commercial renovation, custom home, heritage restoration) — all inbound from organic search\n- 180% lift in organic traffic\n- 94 Lighthouse score (up from 31)\n- Founder updates the project gallery himself once a quarter\n- Google Business Profile generates 4–6 leads per month\n\nThe site paid for itself in the first contract. The mechanism keeps working while Mrozinski keeps building."
      },
    ],
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find(cs => cs.slug === slug);
}
