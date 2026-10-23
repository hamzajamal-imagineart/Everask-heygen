/* Each SEO page's signature section: the one layout built around that
   page's job, so the five pages don't read as one template. Illustrative
   figures for fictional businesses, from the fields the providers return
   (see HANDOFF, 23 Oct 2026). */

export type Intent = "Informational" | "Commercial" | "Transactional" | "Navigational";

/* Competitor keyword research: a sheet with views, and one row explained. */
export const KEYWORD_SHEET = {
  title: "The sheet",
  intro: "One rival’s keywords, with the views people use most. Shown for a fictional project app in the US.",
  site: "planly.com",
  views: [
    { label: "All keywords", note: "Sorted by estimated traffic" },
    { label: "Easy wins", note: "Difficulty 30 or under, rival in positions 4 to 20" },
    { label: "Buyers", note: "Commercial and transactional searches" },
  ],
  rows: [
    { keyword: "project management software", position: 3, volume: 40500, kd: 82, traffic: 3900, intent: "Commercial", page: "/" },
    { keyword: "gantt chart maker", position: 1, volume: 12100, kd: 41, traffic: 3100, intent: "Transactional", page: "/gantt" },
    { keyword: "free project tracker", position: 2, volume: 8100, kd: 35, traffic: 1500, intent: "Transactional", page: "/templates/tracker" },
    { keyword: "team task list app", position: 1, volume: 2900, kd: 22, traffic: 890, intent: "Commercial", page: "/tasks" },
    { keyword: "kanban board online", position: 4, volume: 6600, kd: 38, traffic: 640, intent: "Transactional", page: "/kanban" },
    { keyword: "project timeline template", position: 6, volume: 5400, kd: 18, traffic: 320, intent: "Informational", page: "/templates/timeline" },
    { keyword: "sprint planning tool", position: 9, volume: 2400, kd: 27, traffic: 70, intent: "Commercial", page: "/sprints" },
    { keyword: "resource planning spreadsheet", position: 12, volume: 1900, kd: 14, traffic: 40, intent: "Informational", page: "/blog/resource-planning" },
    { keyword: "client portal software", position: 7, volume: 1600, kd: 29, traffic: 60, intent: "Commercial", page: "/client-portal" },
  ] as { keyword: string; position: number; volume: number; kd: number; traffic: number; intent: Intent; page: string }[],
};

export const ROW_ANATOMY = {
  title: "Reading a row",
  intro: "Every keyword in the sheet carries the same numbers. Here is one, taken apart.",
  row: { keyword: "gantt chart maker", position: "1", volume: "12,100", kd: "41", traffic: "3,100", page: "/gantt" },
  parts: [
    { key: "volume", label: "Volume", body: "Average monthly searches in the country you choose. An estimate, best for comparing keywords." },
    { key: "kd", label: "Difficulty", body: "0 to 100, how hard the top 10 is to reach, from the backlinks of the pages there. It counts links, not content." },
    { key: "traffic", label: "Traffic", body: "Volume times the click-through rate for this position. Sort by it to see where visits really come from." },
    { key: "page", label: "Ranking page", body: "The page that wins the keyword, so you know whether a post, a landing page or a tool is doing the work." },
  ],
};

/* Keyword gap analysis: three columns of gaps, then pages to write. */
export const GAP_BOARD = {
  title: "Your gaps, sorted",
  intro: "Your site against three rivals, split by the work each gap needs. Shown for a fictional project tool in the US.",
  columns: [
    {
      label: "Missing",
      body: "They rank, you don’t at all. Usually a page you have not written.",
      rows: [
        { keyword: "bug tracking software", volume: "9,900", detail: "Best rival 3rd" },
        { keyword: "sprint retrospective template", volume: "4,400", detail: "Best rival 2nd" },
        { keyword: "product roadmap examples", volume: "3,600", detail: "Best rival 1st" },
      ],
    },
    {
      label: "Weak",
      body: "You rank, far behind them. Usually a page that needs work.",
      rows: [
        { keyword: "agile project management", volume: "22,200", detail: "You 18th, rival 2nd" },
        { keyword: "kanban vs scrum", volume: "6,600", detail: "You 14th, rival 1st" },
        { keyword: "product backlog template", volume: "2,900", detail: "You 27th, rival 3rd" },
      ],
    },
    {
      label: "Shared",
      body: "Every rival ranks, you don’t. The strongest signal of real demand.",
      rows: [
        { keyword: "issue tracker for startups", volume: "1,300", detail: "All three in the top 10" },
        { keyword: "release notes template", volume: "1,000", detail: "All three in the top 10" },
        { keyword: "qa test plan example", volume: "880", detail: "All three in the top 10" },
      ],
    },
  ],
};

export const PAGES_TO_WRITE = {
  title: "Pages to write",
  intro: "The gaps grouped into topics one page could cover, biggest first.",
  rows: [
    { topic: "Bug tracking", searches: 15400, note: "9 keywords, difficulty above 50, a longer job" },
    { topic: "Retrospectives", searches: 11200, note: "14 keywords, the page to beat is on Rival A" },
    { topic: "Roadmaps", searches: 8900, note: "22 keywords, the page to beat is on Rival A" },
    { topic: "Backlog", searches: 4100, note: "7 keywords, you already rank: improve the page" },
  ],
};

/* Traffic estimator: sites as bars, and the estimate as an equation. */
export const TRAFFIC_BARS = {
  title: "Sites, side by side",
  intro: "Estimated monthly visits from search, organic and paid. Shown for fictional project tools in the US.",
  rows: [
    { site: "planly.com", organic: 182000, paid: 12400, dr: 74 },
    { site: "taskhive.io", organic: 96500, paid: 0, dr: 61 },
    { site: "boardly.app", organic: 41200, paid: 3100, dr: 58 },
    { site: "linearly.app", organic: 22800, paid: 1200, dr: 46, you: true },
    { site: "rivala.com", organic: 18900, paid: 0, dr: 39 },
    { site: "sprintdesk.co", organic: 7400, paid: 900, dr: 33 },
  ],
};

export const FORMULA = {
  title: "Where the number comes from",
  intro: "Every search traffic estimate is built the same way. Knowing how tells you how far to trust it.",
  terms: [
    { label: "Rankings", body: "Every keyword the site ranks for in the top 100, and its position. Untracked keywords are missing." },
    { label: "Volume", body: "Monthly searches for each keyword in the chosen country, itself modelled from ad and clickstream data." },
    { label: "Click-through", body: "The share of searchers who click each position. Higher spots take far more of the clicks." },
  ],
  result: { label: "Estimate", body: "Added up across every keyword. Strong for comparing sites, loose for any single number." },
};

/* AI SEO audit: the page with its findings pinned, and what it can and can't see. */
export const ANNOTATED_PAGE = {
  title: "What it finds on the page",
  intro: "The page is read the way a search engine reads it. Shown for a fictional pricing page.",
  url: "acme.com/pricing",
  findings: [
    { id: "title", label: "Title", value: "Pricing | Acme", note: "Leaves out the term buyers search: project software pricing" },
    { id: "description", label: "Meta description", value: "Missing", note: "Google will write its own snippet" },
    { id: "h1", label: "Headings", value: "One H1, six H2s", note: "A clear outline, no change needed", ok: true },
    { id: "plans", label: "Structured data", value: "None", note: "Rival pages mark up their plans and FAQs" },
    { id: "images", label: "Images", value: "4 of 9 without alt text", note: "Plan screenshots have no description" },
  ] as { id: "title" | "description" | "h1" | "plans" | "images"; label: string; value: string; note: string; ok?: boolean }[],
};

export const SCOPE = {
  title: "What it reads, and what it leaves",
  reads: {
    label: "It reads",
    items: [
      "The page: title, description, headings, structured data, links and images",
      "The keywords the page and domain rank for, with positions",
      "Estimated search traffic",
      "Domain rating, referring domains and the backlinks to the page",
      "The same for any rival you name",
    ],
  },
  leaves: {
    label: "It leaves to other tools",
    items: [
      "Every other page on your site: use a crawler for site-wide issues",
      "Page speed and Core Web Vitals: use PageSpeed Insights",
      "Whether Google has indexed the page: use Search Console",
    ],
  },
};
