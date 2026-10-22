import type { SeoPage } from "./types";

const brandName = "EverAsk";

/* SEO: the agent pulls search data from the providers it already calls
   (Monid App Map in the Everask-Slug-Map sheet) and turns it into the
   finished audit, keyword list or report. Ahrefs: domain rating and organic
   keywords. DataForSEO: ranked keywords, keywords for a site, keyword ideas,
   bulk traffic estimation, backlinks and referring domains, Google Maps
   results. Context.dev: reads a page as text. AnyAPI: Google Maps places and
   reviews. Claims stay inside what those calls return: estimates are called
   estimates, and nothing here crawls a whole site or tracks rank daily. */
export const SEO_PAGES: SeoPage[] = [
  {
    url: "/features/seo/local-seo-audit",
    cluster: "seo",
    slug: "local-seo-audit",
    keyword: "local seo audit",
    metrics: { kd: 8, volume: 1700, trafficPotential: 1300, cpc: 8 },
    title: `Local SEO Audit: Map Pack Rank and Reviews | ${brandName}`,
    description:
      `Name your business, your city and the searches that matter. ${brandName} checks where you rank on Google Maps, who beats you and how your reviews compare.`,
    h1: "Local SEO audit",
    subhead: "Where you rank on Google Maps, who beats you, and what to fix first.",
    primaryCta: "Audit my listing",
    promptExample: "Local SEO audit for Harbor Dental in Austin: dentist near me, emergency dentist",
    steps: [
      {
        title: "Name the business and the searches",
        body: "Give the business name, the city or neighbourhood, and the searches your customers type. A few is enough: the service, the service plus near me, the emergency version.",
      },
      {
        title: "It checks the map results",
        body: `${brandName} runs each search on Google Maps for that location and records your position, the businesses ranked above you, and the rating, review count and category of each.`,
      },
      {
        title: "Get the fixes in order",
        body: "You get a short report: where you stand per search, the gap to the businesses above you, and the changes most likely to move you, starting with the cheapest.",
      },
    ],
    features: [
      {
        title: "Your map position, per search",
        body: "Rank for every search you named, not one blended score. Strong for the service but missing on near me reads differently from missing everywhere.",
      },
      {
        title: "The businesses above you",
        body: "Each competitor that outranks you, with their rating, review count and primary category side by side with yours, so the gap is concrete.",
      },
      {
        title: "Review comparison",
        body: "Your average rating and review volume against the local leaders, and what recent reviews keep mentioning, good and bad.",
      },
      {
        title: "Category and listing checks",
        body: "Whether your primary category matches the businesses that win these searches, and which listing details theirs carry that yours does not.",
      },
      {
        title: "Fixes ranked by effort",
        body: "Changes ordered from an afternoon's work to a quarter's, so you start with what costs least and see what the bigger moves are worth.",
      },
      {
        title: "Rerun it next month",
        body: "Ask for the same audit again and compare. The searches and competitors are kept, so the second report shows what moved.",
      },
    ],
    useCases: [
      {
        title: "Owners of a local business",
        body: "A dentist, a plumber or a restaurant checking why the place across town shows up first, without learning an SEO tool to find out.",
      },
      {
        title: "Agencies pitching local clients",
        body: "A one-page audit for a prospect before the first call, showing where they rank and who is taking their searches.",
      },
      {
        title: "Multi-location brands",
        body: "The same searches checked city by city, so the branches that lag stand out and each gets its own fix list.",
      },
    ],
    faqs: [
      {
        q: "What does a local SEO audit check?",
        a: "Where the business ranks in Google Maps results for the searches that matter, which businesses rank above it, and how its rating, review count and category compare with theirs. The output is a prioritised list of fixes.",
      },
      {
        q: "Where does the ranking data come from?",
        a: `${brandName} runs each search through DataForSEO's Google Maps results for the location you name and reads place and review details from Google Maps. It reports what those results show on the day it runs.`,
      },
      {
        q: "Does rank change across the city?",
        a: "Yes. Map results depend on where the searcher is. Name the neighbourhood or area you care about, or ask for several, and each is checked separately.",
      },
      {
        q: "Can it change my Google Business Profile?",
        a: `No. ${brandName} reads public results and tells you what to change. You make the edits in your own profile.`,
      },
      {
        q: "How often should I run a local SEO audit?",
        a: "Monthly is enough for most businesses. Map rankings move with reviews and competitors, so a monthly rerun shows whether the fixes are working.",
      },
    ],
    related: [
      "/features/seo/ai-seo-audit",
      "/features/seo/competitor-keyword-research",
      "/features/reviews/google-reviews-scraper",
      "/features/leads/google-maps-scraper",
    ],
  },
  {
    url: "/features/seo/competitor-keyword-research",
    cluster: "seo",
    slug: "competitor-keyword-research",
    keyword: "competitor keyword research",
    metrics: { kd: 39, volume: 1400, trafficPotential: 74000, cpc: 9 },
    title: `Competitor Keyword Research: What Your Rivals Rank For | ${brandName}`,
    description:
      `Name a competitor's site. ${brandName} lists every keyword it ranks for, with position, volume, difficulty and the page that ranks, sorted into a sheet.`,
    h1: "Competitor keyword research",
    subhead: "Every keyword a rival ranks for, with volume, difficulty and the page that ranks.",
    primaryCta: "Research a competitor",
    promptExample: "Every keyword notion.so ranks for in the top 10, US, sorted by traffic",
    steps: [
      {
        title: "Name the competitor",
        body: "Give one domain or a few. Add the country and any filter you care about: top 10 only, a topic, a minimum volume.",
      },
      {
        title: "It pulls their rankings",
        body: `${brandName} collects the keywords each site ranks for in organic search, with the position, monthly volume, difficulty, cost per click and the URL that ranks.`,
      },
      {
        title: "Get a sheet you can act on",
        body: "The list arrives as a sheet, sorted by estimated traffic and grouped by topic, with the keywords worth targeting flagged at the top.",
      },
    ],
    features: [
      {
        title: "The ranking URL for each keyword",
        body: "See which page wins each keyword, so you know whether a rival ranks with a blog post, a landing page or a tool.",
      },
      {
        title: "Volume, difficulty and CPC",
        body: "Monthly searches, keyword difficulty and paid cost per click on every row, from Ahrefs and DataForSEO, not guessed by a model.",
      },
      {
        title: "Grouped by topic",
        body: "Hundreds of keywords sorted into topic groups, so a long export becomes a short list of themes your rival owns.",
      },
      {
        title: "Filters in plain words",
        body: "Ask for positions 4 to 20, questions only, or anything over 500 searches a month. No filter panels to learn.",
      },
      {
        title: "Several rivals at once",
        body: "Run three competitors in one request and see which keywords they share and which only one of them ranks for.",
      },
      {
        title: "Ready for a brief",
        body: `Turn any topic group into a content brief or a ${brandName} doc for your writers, with the target keyword and the page to beat.`,
      },
    ],
    useCases: [
      {
        title: "Content teams planning a quarter",
        body: "Start from what already ranks in your market instead of a blank keyword tool, and pick the topics where rivals are weakest.",
      },
      {
        title: "SEO agencies onboarding a client",
        body: "A competitor keyword sheet for each rival in the first week, so the strategy call starts from real rankings.",
      },
      {
        title: "Founders entering a market",
        body: "See what the established players get their search traffic from before deciding what to write or build first.",
      },
    ],
    faqs: [
      {
        q: "How do I find the keywords a competitor ranks for?",
        a: `Name their domain. ${brandName} pulls the keywords that domain ranks for in organic search from Ahrefs and DataForSEO, with position, volume, difficulty and the ranking URL for each.`,
      },
      {
        q: "Which country does the data cover?",
        a: "Say the country with the request. Rankings and volumes differ by market, so each run is for one country unless you ask for several.",
      },
      {
        q: "How accurate are the volumes?",
        a: "Search volume and traffic are estimates from the providers' data, good for comparing keywords against each other. For your own site, your analytics remain the source of truth.",
      },
      {
        q: "Can I compare several competitors?",
        a: "Yes. Name up to a handful of domains in one request and the sheet shows each keyword with every rival's position side by side.",
      },
      {
        q: "What is the difference from a keyword gap analysis?",
        a: "Competitor keyword research lists everything a rival ranks for. A keyword gap analysis compares that list with your own site and keeps only the keywords you are missing.",
      },
    ],
    related: [
      "/features/seo/keyword-gap-analysis",
      "/features/seo/traffic-estimator",
      "/features/seo/ai-seo-audit",
      "/features/ads/google-ads-competitor-analysis",
    ],
  },
  {
    url: "/features/seo/ai-seo-audit",
    cluster: "seo",
    slug: "ai-seo-audit",
    keyword: "ai seo audit",
    metrics: { kd: 0, volume: 450, trafficPotential: 100, cpc: 10 },
    title: `AI SEO Audit: A Full Report From One URL | ${brandName}`,
    description:
      `Paste a URL. ${brandName} checks the site's authority, rankings, traffic and backlinks, reads the page itself, and writes a prioritised SEO fix list.`,
    h1: "AI SEO audit",
    subhead: "Paste one URL. Get its authority, rankings, links and a fix list in plain language.",
    primaryCta: "Audit a URL",
    promptExample: "SEO audit of acme.com/pricing, and how it compares with our top two rivals",
    steps: [
      {
        title: "Paste the URL",
        body: "A home page, a product page or a blog post. Add competitors if you want the audit to measure against them.",
      },
      {
        title: "It gathers the data",
        body: `${brandName} pulls the domain's authority and backlinks, the keywords it ranks for and its estimated traffic, then reads the page itself: title, headings, copy and links.`,
      },
      {
        title: "Read the fix list",
        body: "You get a written audit with what is working, what is holding the page back, and the fixes in order of impact, each with the reason behind it.",
      },
    ],
    features: [
      {
        title: "Authority and links",
        body: "Domain rating, referring domains and the strongest backlinks, so you know whether the problem is the page or the site's standing.",
      },
      {
        title: "What it ranks for now",
        body: "The keywords the page and domain already rank for, with positions, so the fixes build on traffic you have instead of guessing at new terms.",
      },
      {
        title: "On-page read",
        body: "The title, meta description, headings and copy checked against the searches the page ranks for and the ones it should.",
      },
      {
        title: "Against your rivals",
        body: "Name competitors and every number sits next to theirs: authority, links, ranking keywords and estimated traffic.",
      },
      {
        title: "Fixes with reasons",
        body: "Each recommendation says what to change, why it matters for this page, and roughly how much work it is.",
      },
      {
        title: "Shareable report",
        body: `The audit arrives as a ${brandName} doc you can send to a client or a developer, with the data tables attached.`,
      },
    ],
    useCases: [
      {
        title: "Marketers inheriting a site",
        body: "A clear picture of where a site stands in search on day one, before deciding what to fix or rewrite.",
      },
      {
        title: "Freelancers and agencies",
        body: "A written audit to send a prospect the same day, with the data behind each point.",
      },
      {
        title: "Founders without an SEO hire",
        body: "Plain-language answers on why a page does not rank and what to do about it, without learning an SEO suite.",
      },
    ],
    faqs: [
      {
        q: "What does an AI SEO audit include?",
        a: "Domain authority and backlinks, the keywords the site ranks for, estimated organic traffic, an on-page read of the URL you paste, and a prioritised list of fixes written in plain language.",
      },
      {
        q: "Where does the data come from?",
        a: `Authority, rankings, traffic and backlink data come from Ahrefs and DataForSEO. ${brandName} reads the page itself with Context.dev. The model writes the analysis; it does not invent the numbers.`,
      },
      {
        q: "Does it crawl my whole site?",
        a: "No. It reads the pages you give it and pulls ranking and link data for the domain. For a technical crawl of every URL, redirects and page speed, use a crawler alongside it.",
      },
      {
        q: "Can I audit a competitor's site?",
        a: "Yes. Any public URL works, and you can audit your page and a rival's in one request to see why theirs ranks higher.",
      },
      {
        q: "Is an AI SEO audit as good as a manual one?",
        a: "It is quick and grounded in real ranking data, which covers most of what a first audit is for. A specialist still adds judgement on strategy, site structure and technical issues a page read cannot see.",
      },
    ],
    related: [
      "/features/seo/local-seo-audit",
      "/features/seo/competitor-keyword-research",
      "/features/seo/traffic-estimator",
      "/features/seo/keyword-gap-analysis",
    ],
  },
  {
    url: "/features/seo/traffic-estimator",
    cluster: "seo",
    slug: "traffic-estimator",
    keyword: "traffic estimator",
    metrics: { kd: 38, volume: 1200, trafficPotential: 1200, cpc: 3 },
    title: `Website Traffic Estimator: Check Any Site's Traffic | ${brandName}`,
    description:
      `Paste a list of websites. ${brandName} estimates each one's monthly search traffic and lays them side by side in a sheet, with the pages and keywords behind it.`,
    h1: "Traffic estimator",
    subhead: "Estimated monthly search traffic for any list of sites, side by side.",
    primaryCta: "Estimate traffic",
    promptExample: "Estimate monthly organic traffic for these 40 competitor domains, US",
    steps: [
      {
        title: "Paste the sites",
        body: "One domain or a few hundred, typed, pasted or uploaded as a sheet. Say the country if it matters.",
      },
      {
        title: "It estimates each one",
        body: `${brandName} pulls the estimated monthly organic search traffic for every domain, with paid search traffic where the data has it.`,
      },
      {
        title: "Compare and dig in",
        body: "The results come back as a sorted sheet. Ask about any row to see the pages and keywords that bring that site its traffic.",
      },
    ],
    features: [
      {
        title: "Hundreds of sites in one go",
        body: "Bulk estimates from DataForSEO cover long lists, so a market map or a prospect list is one request, not an afternoon of lookups.",
      },
      {
        title: "Organic and paid",
        body: "Estimated organic traffic for every site, and paid search traffic where the data has it, in separate columns.",
      },
      {
        title: "The pages behind the number",
        body: "For any site, see the pages that earn the most search traffic and the keywords sending it.",
      },
      {
        title: "Authority alongside",
        body: "Add domain rating from Ahrefs to the sheet, so you can tell a big site from a strong one.",
      },
      {
        title: "Sorted and segmented",
        body: "Ask for the sheet sorted, bucketed by size or split by category, in plain words.",
      },
      {
        title: "Honest about estimates",
        body: "Every figure is labelled as a modelled estimate of search traffic. It is for comparing sites, not for replacing anyone's analytics.",
      },
    ],
    useCases: [
      {
        title: "Sales teams qualifying accounts",
        body: "Rank a prospect list by search traffic to find the companies big enough to need what you sell.",
      },
      {
        title: "Marketers sizing a market",
        body: "See which players in a category get the search traffic, and how far ahead the leader is.",
      },
      {
        title: "Buyers checking a site",
        body: "A quick read on a website's search traffic before buying it, partnering with it or booking an ad on it.",
      },
    ],
    faqs: [
      {
        q: "How do I check a website's traffic?",
        a: `Paste the domain. ${brandName} returns its estimated monthly organic search traffic, plus the pages and keywords that bring it in. Paste a list and every site comes back side by side.`,
      },
      {
        q: "How accurate are traffic estimates?",
        a: "They are modelled from rankings and search volumes, so they track search traffic only and can differ from a site's own analytics. They are reliable for comparing sites against each other.",
      },
      {
        q: "Does it include direct and social traffic?",
        a: "No. The estimate covers search: organic, and paid where the data has it. Direct visits, social and referral traffic are not included.",
      },
      {
        q: "How many sites can I check at once?",
        a: "Long lists work in a single request. Paste them in or upload a sheet and the results come back as one sorted sheet.",
      },
      {
        q: "Can I check traffic by country?",
        a: "Yes. Say the country with the request and the estimate is for search traffic in that market.",
      },
    ],
    related: [
      "/features/seo/competitor-keyword-research",
      "/features/seo/ai-seo-audit",
      "/features/seo/keyword-gap-analysis",
      "/features/leads/lead-enrichment",
    ],
  },
  {
    url: "/features/seo/keyword-gap-analysis",
    cluster: "seo",
    slug: "keyword-gap-analysis",
    keyword: "keyword gap analysis",
    metrics: { kd: 24, volume: 700, trafficPotential: 250, cpc: 4.5 },
    title: `Keyword Gap Analysis: Find What Rivals Rank For | ${brandName}`,
    description:
      `Name your site and your rivals. ${brandName} finds the keywords they rank for and you don't, with volume and difficulty, grouped into pages worth writing.`,
    h1: "Keyword gap analysis",
    subhead: "The keywords your rivals rank for and you don't, grouped into pages to write.",
    primaryCta: "Find my keyword gaps",
    promptExample: "Keyword gap between linear.app and jira, asana, clickup, US, top 20",
    steps: [
      {
        title: "Name your site and rivals",
        body: "Your domain and two to five competitors. Add the country and how deep to look, for example their top 20 positions.",
      },
      {
        title: "It compares the rankings",
        body: `${brandName} pulls the ranked keywords for every domain and keeps the ones where your rivals rank and you do not, or where you rank far behind.`,
      },
      {
        title: "Get the pages to write",
        body: "The gaps come back grouped into topics, each with its total volume, difficulty and the rival page to beat, ready to become briefs.",
      },
    ],
    features: [
      {
        title: "Missing and weak keywords",
        body: "Two lists: keywords you do not rank for at all, and keywords where you sit well behind a rival. Both are opportunities, but not the same work.",
      },
      {
        title: "Shared by several rivals",
        body: "Keywords that two or more competitors rank for rise to the top. When the whole field ranks for a term and you do not, it is rarely chance.",
      },
      {
        title: "Grouped into pages",
        body: "Gaps are grouped into topics a single page could cover, so the output is a list of pages to write, not two thousand rows.",
      },
      {
        title: "Volume and difficulty on each",
        body: "Monthly volume and keyword difficulty from Ahrefs and DataForSEO on every keyword, so easy wins stand out.",
      },
      {
        title: "The page to beat",
        body: "For each topic, the rival URL that ranks best, so the brief starts from what already works.",
      },
      {
        title: "Into briefs and docs",
        body: `Turn any group into a content brief or a ${brandName} doc in the same conversation.`,
      },
    ],
    useCases: [
      {
        title: "Content leads choosing what to write",
        body: "A ranked list of missing topics, so next quarter's calendar comes from demand you are not yet catching.",
      },
      {
        title: "SEO consultants",
        body: "A gap analysis for a client in one request, with the topic groups ready for the strategy deck.",
      },
      {
        title: "Product marketers",
        body: "See the comparison, alternative and use-case searches rivals win, and plan the pages to compete for them.",
      },
    ],
    faqs: [
      {
        q: "What is a keyword gap analysis?",
        a: "A comparison of the keywords your site ranks for with your competitors' keywords, keeping the ones they rank for and you do not. It shows the topics you are missing.",
      },
      {
        q: "How many competitors should I compare?",
        a: "Two to five. Fewer misses patterns; more adds noise. Pick rivals that compete with you in search, not only in sales.",
      },
      {
        q: "Where does the keyword data come from?",
        a: `${brandName} pulls each domain's ranked keywords, volumes and difficulty from Ahrefs and DataForSEO, then compares them. The grouping and recommendations are the agent's; the numbers are the providers'.`,
      },
      {
        q: "Can it find keywords where I rank but poorly?",
        a: "Yes. Besides the keywords you are missing, it lists the ones where a rival ranks well ahead of you, often the faster wins.",
      },
      {
        q: "What do I do with the results?",
        a: "Pick the topic groups with the best volume for their difficulty and write or improve a page for each. Each group can become a brief in the same conversation.",
      },
    ],
    related: [
      "/features/seo/competitor-keyword-research",
      "/features/seo/ai-seo-audit",
      "/features/seo/traffic-estimator",
      "/features/docs/ai-proposal-generator",
    ],
  },
];
