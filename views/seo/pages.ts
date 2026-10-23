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
        title: "Rank across the whole area",
        body: "The same search checked from several points you choose, so you see where you show up near the door and where you drop out across town.",
      },
      {
        title: "The businesses above you",
        body: "Each competitor that outranks you, with their category, rating, review count and photos side by side with yours, so the gap is concrete.",
      },
      {
        title: "Reviews, read properly",
        body: "Your rating and review count against the leaders, how many new reviews you get a month, which have no reply, and how long you take to answer.",
      },
      {
        title: "Category and profile checks",
        body: "Whether your primary category matches the businesses that win, whether the profile is claimed, and whether hours, phone and website are filled in.",
      },
      {
        title: "Fixes ranked by effort",
        body: "Changes ordered from an afternoon's work to a quarter's, so you start with what costs least and see what the bigger moves are worth.",
      },
    ],
    sample: {
      intro: "Four parts, each built from live Google Maps data. Shown here for a fictional practice in Austin.",
      tabs: [
        {
          kind: "table",
          label: "Map position",
          summary: "Where you rank for each search, who sits above you, and how their category, rating, reviews and photos compare.",
          caption: "dentist near me, Austin, on mobile",
          columns: ["Rank", "Business", "Primary category", "Rating", "Reviews", "Photos"],
          rows: [
            ["1", "Bright Smile Dental", "Dentist", "4.9", "612", "188"],
            ["2", "Lakeview Family Dentistry", "Dentist", "4.8", "431", "142"],
            ["3", "South Congress Dental", "Cosmetic dentist", "4.7", "288", "96"],
            ["4", "Barton Creek Dental", "Dentist", "4.8", "175", "120"],
            ["5", "Harbor Dental", "Dental clinic", "4.6", "94", "23"],
          ],
          you: 4,
        },
        {
          kind: "grid",
          label: "Rank across the area",
          summary: "The same search from points spread over your service area, so a strong spot and a weak one both show.",
          caption: "dentist near me, from nine points 1.5 km apart",
          ranks: [3, 2, 4, 2, 1, 3, 6, 5, 9],
          note: "Top three near the practice, falling to ninth across the river. The fix list starts with what moves the outer points.",
          legend: "Deeper blue is a better rank. The centre square is the practice.",
        },
        {
          kind: "list",
          label: "Your profile",
          summary: "Primary category, claim status, contact details, hours and photos, each against the businesses that win.",
          caption: "Harbor Dental against the top three",
          rows: [
            { label: "Primary category", value: "Dental clinic", note: "Two of the top three use Dentist", ok: false },
            { label: "Profile claimed", value: "Yes", ok: true },
            { label: "Phone and website", value: "Listed", ok: true },
            { label: "Saturday hours", value: "Closed", note: "All of the top three open on Saturday", ok: false },
            { label: "Photos", value: "23", note: "The top three average 142", ok: false },
          ],
        },
        {
          kind: "list",
          label: "Reviews",
          summary: "Rating and volume against the leaders, new reviews per month, unanswered ones and how fast you reply, and what keeps coming up.",
          caption: "Google reviews, newest first",
          rows: [
            { label: "Average rating", value: "4.6", note: "Top three average 4.8" },
            { label: "Total reviews", value: "94", note: "Top three average 444", ok: false },
            { label: "New in the last month", value: "3", note: "Top three average 21", ok: false },
            { label: "Reviews with no reply", value: "12 of the last 30", ok: false },
            { label: "Time to reply", value: "6 days on average", note: "The leader replies within a day", ok: false },
            { label: "Mentioned most", value: "Gentle with nervous patients, hard to reach by phone" },
          ],
        },
      ],
    },
    prompts: [
      { title: "One search, one area", prompt: "Local SEO audit for Harbor Dental in Austin for dentist near me" },
      { title: "Every service you sell", prompt: "Audit our map rank in Leeds for plumber, emergency plumber, boiler repair and drain unblocking" },
      { title: "Rank across the city", prompt: "Check where we rank for physio near me from nine points across central Bristol" },
      { title: "Against one rival", prompt: "Compare our Google profile and reviews with Lakeview Family Dentistry, side by side" },
      { title: "Every branch", prompt: "Run the same local audit for our five Denver locations and rank them by visibility" },
      { title: "Reviews only", prompt: "Read our Google reviews from the last month, lowest rated first, and tell me what to fix" },
    ],
    factorsIntro: "Google says it ranks local results on three things. The audit reads your listing against each.",
    factors: [
      {
        title: "Relevance",
        body: "How well a profile matches the search. Your categories and the services you list carry most of it.",
        check: "Your categories against the businesses that win your searches.",
      },
      {
        title: "Distance",
        body: "How far the business is from the person searching. You cannot move, but you can see where you are strong.",
        check: "Your rank from several points across the area.",
      },
      {
        title: "Prominence",
        body: "How well known the business is. Reviews, ratings and mentions across the web all count.",
        check: "Your reviews and rating against the leaders, how steadily new ones arrive, and how fast you reply.",
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
        a: "Where a business ranks in Google Maps for the searches that matter, which businesses rank above it, and how its category, profile and reviews compare with theirs. The output is a prioritised list of fixes.",
      },
      {
        q: "What is the map pack?",
        a: "The map pack, or local pack, is the block of three businesses with a map that Google shows for searches with local intent, such as dentist near me. The audit reads Google Maps results for each search; the top of those usually matches the pack on Search, though not always.",
      },
      {
        q: "Where does the data come from?",
        a: `Rankings come from DataForSEO's live Google Maps results for the location you name. Place and review details come through AnyAPI's Google Maps endpoints: for each review, its rating, date and text, and the owner's reply with when it was posted. The report shows the map as it is that day.`,
      },
      {
        q: "Why does my ranking change across the city?",
        a: "Distance is one of the three things Google says it ranks local results by, so the same search gives different results a few streets apart. The audit can run each search from exact map points, a grid across your service area, to show where you are strong and where you drop off.",
      },
      {
        q: "What should I fix first?",
        a: "Usually the primary category, then a complete profile: hours, phone, website and photos. After that, replies to reviews and a steady flow of new ones. The audit orders the fixes for your listing, cheapest first.",
      },
      {
        q: "How long does a local SEO audit take?",
        a: "A few minutes for a handful of searches in one area. More searches, or more points across a city, take longer, since each is a separate check.",
      },
      {
        q: "How often should I run a local SEO audit?",
        a: "Monthly is enough for most businesses. Map rankings move with reviews and competitors, so a monthly rerun shows whether the fixes are working.",
      },
      {
        q: "Can it show my worst or most recent reviews?",
        a: "Yes. Reviews can be read newest first or lowest rated first, and limited to the last day, week, month or year, so you can see what changed since your last audit.",
      },
      {
        q: "Can I audit a competitor's listing?",
        a: "Yes. Any business that shows up in Google Maps can be audited, and you can put yours and a rival's side by side in one request.",
      },
      {
        q: "Does it check directory listings like Yelp?",
        a: "No. The audit covers Google Maps: rankings, profiles and Google reviews. Listings on other directories are not part of it.",
      },
      {
        q: "Can it change my Google Business Profile?",
        a: `No. ${brandName} reads public results and tells you what to change. You make the edits in your own profile.`,
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
      `Name a competitor's site. ${brandName} lists the keywords it ranks for, with position, volume, difficulty and the page that ranks, sorted into a sheet.`,
    h1: "Competitor keyword research",
    subhead: "The keywords a rival ranks for, with volume, difficulty and the page that ranks.",
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
        title: "The ranking page for each keyword",
        body: "See which page wins each keyword, so you know whether a rival ranks with a blog post, a landing page or a free tool.",
      },
      {
        title: "Volume, difficulty and cost per click",
        body: "Monthly searches, keyword difficulty and paid cost per click on every row, from Ahrefs and DataForSEO, not guessed by a model.",
      },
      {
        title: "Search intent on every row",
        body: "Each keyword marked as informational, commercial, transactional or navigational, so you can tell research traffic from buyers.",
      },
      {
        title: "Grouped into topics",
        body: "Thousands of rows sorted into the topics a rival owns, each with its traffic and the page that leads it.",
      },
      {
        title: "New and lost keywords",
        body: "Which keywords a rival has started ranking for, and which it has lost, so you see where they are pushing and where they are slipping.",
      },
      {
        title: "Several rivals at once",
        body: "Run three competitors in one request and see which keywords they share and which only one of them owns.",
      },
    ],
    prompts: [
      { title: "One rival, top keywords", prompt: "Every keyword planly.com ranks for in the US top 10, sorted by traffic" },
      { title: "Easy wins only", prompt: "Keywords our rival ranks 4 to 20 for with difficulty under 30" },
      { title: "One page, not the site", prompt: "What keywords does this rival article rank for? Here is the link" },
      { title: "Buyers, not readers", prompt: "Only the commercial and transactional keywords our top competitor ranks for" },
      { title: "What they gained", prompt: "Keywords our competitor started ranking for in the last month" },
      { title: "Three rivals side by side", prompt: "Compare the top keywords of these three competitors and show which they share" },
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
        a: `Name their domain. ${brandName} pulls the keywords that domain ranks for from Ahrefs and DataForSEO, with position, volume, difficulty, intent and the ranking page for each.`,
      },
      {
        q: "Is this every keyword they rank for?",
        a: "No tool sees every keyword. The providers track the keywords people search most, so the list covers almost all of a site's search traffic but not every rare query.",
      },
      {
        q: "Can I research a single page instead of the whole site?",
        a: "Yes. Paste a full page address and the list covers only that page, which helps when a rival's one article or tool takes most of their traffic.",
      },
      {
        q: "What does keyword difficulty mean?",
        a: "A 0 to 100 score for how hard it is to reach the top 10, based on the backlinks of the pages ranking now. It counts links only, so check the live results before you commit.",
      },
      {
        q: "How accurate are the volumes and traffic?",
        a: "Both are estimates. Volume is modelled from ad planner and clickstream data, and traffic multiplies volume by the click-through rate for each position. Use them to compare, not to forecast.",
      },
      {
        q: "Which country does the data cover?",
        a: "Say the country with the request. Rankings and volumes differ by market, so each run is for one country unless you ask for several.",
      },
      {
        q: "Can I see keywords a competitor gained or lost?",
        a: "Yes. Ask for new or lost keywords and the sheet shows where a rival recently started ranking and where it dropped out.",
      },
      {
        q: "Can I compare several competitors?",
        a: "Yes. Name a handful of domains in one request and the sheet shows each keyword with every rival's position side by side.",
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
        body: `${brandName} pulls the domain's authority and backlinks, the keywords it ranks for and its estimated traffic, then reads the page itself: title, description, headings, structured data, links and images.`,
      },
      {
        title: "Read the fix list",
        body: "You get a written audit with what is working, what is holding the page back, and the fixes in order of impact, each with the reason behind it.",
      },
    ],
    features: [
      {
        title: "Authority and links",
        body: "Domain rating, referring domains and the strongest backlinks, with which are followed and which are new or lost.",
      },
      {
        title: "What it ranks for now",
        body: "The keywords the page and domain already rank for, with positions, so the fixes build on traffic you have.",
      },
      {
        title: "The page, read in full",
        body: "Title, meta description, headings, structured data, canonical and robots tags, links and image alt text, checked against what the page should rank for.",
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
        title: "Clear about scope",
        body: "It reads the page you give it, not your whole site, and says so. Page speed and index status are left to the tools that measure them.",
      },
    ],
    prompts: [
      { title: "One page", prompt: "SEO audit of acme.com/pricing" },
      { title: "Against two rivals", prompt: "SEO audit of our pricing page against our top two competitors' pricing pages" },
      { title: "Why they outrank us", prompt: "Why does this rival article rank above ours? Here are both links" },
      { title: "A new page before launch", prompt: "Audit this draft landing page for the keyword invoice software for freelancers" },
      { title: "Links only", prompt: "Who links to our homepage, and which of those links are new or lost this month?" },
      { title: "For a client", prompt: "Write an SEO audit of this client's homepage I can send them as a doc" },
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
        q: "What is an AI SEO audit?",
        a: "An AI agent reads your page and combines it with search data, rankings, backlinks and authority, to write a prioritised list of fixes in plain language.",
      },
      {
        q: "How is it different from a site audit tool?",
        a: "Site audit tools crawl many pages and count issues. This reads one page in depth, adds ranking and link data, and explains what to fix first and why.",
      },
      {
        q: "Where does the data come from?",
        a: `Domain rating and organic keywords come from Ahrefs; ranking keywords, backlinks and traffic estimates from DataForSEO. ${brandName} reads the page itself with Context.dev. The model writes the analysis; it does not invent the numbers.`,
      },
      {
        q: "Does it crawl my whole site?",
        a: "No. It reads the pages you give it and pulls ranking and link data for the domain. For site-wide issues like broken links, redirects and duplicate pages, use a crawler alongside it.",
      },
      {
        q: "Does it check page speed or Core Web Vitals?",
        a: "No. Those need measurements from real visitors. Use PageSpeed Insights or Search Console for them.",
      },
      {
        q: "What is domain rating?",
        a: "Ahrefs’ 0 to 100 score for the strength of a site’s backlinks compared with other sites. It is not a Google metric, and there is no single good score: compare with similar sites.",
      },
      {
        q: "Can I audit a competitor's page?",
        a: "Yes. Any public page works, and you can audit yours and a rival’s in one request to see why theirs ranks higher.",
      },
      {
        q: "Does it work on JavaScript-heavy pages?",
        a: "Yes. The page is rendered before it is read, so content that loads with JavaScript is included.",
      },
      {
        q: "Do I need special optimisation for AI search?",
        a: "Google says no special steps are needed for its AI features: a page that is indexable and useful for search is eligible. The audit focuses on those basics.",
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
        title: "Up to a thousand sites in one go",
        body: "Bulk estimates from DataForSEO take up to 1,000 sites per request, so a market map or a prospect list is one ask, not an afternoon of lookups.",
      },
      {
        title: "Organic and paid, apart",
        body: "Estimated organic and paid search traffic in separate columns, with how many keywords each site ranks for.",
      },
      {
        title: "The pages behind the number",
        body: "For any site, the pages that earn the most search traffic and the keywords sending it.",
      },
      {
        title: "Authority alongside",
        body: "Domain rating from Ahrefs and referring domains from DataForSEO beside the traffic, so a big site and a strong one are easy to tell apart.",
      },
      {
        title: "Any country, any part of a site",
        body: "Estimate for one country or worldwide, and for a whole domain, a subdomain or a single page.",
      },
      {
        title: "Honest about estimates",
        body: "Every figure is labelled as a modelled estimate of search traffic. It is for comparing sites, not for replacing anyone’s analytics.",
      },
    ],
    prompts: [
      { title: "A list of rivals", prompt: "Estimate monthly organic traffic for these 40 competitor domains, US" },
      { title: "Qualify a prospect list", prompt: "Sort this sheet of 300 companies by search traffic and flag the top 50" },
      { title: "One site, in depth", prompt: "How much search traffic does planly.com get, and which pages bring it?" },
      { title: "Size and strength", prompt: "Traffic, domain rating and referring domains for these ten sites, side by side" },
      { title: "Just the blog", prompt: "Estimate traffic for blog.planly.com and help.planly.com separately" },
      { title: "By country", prompt: "Compare these five sites' search traffic in the UK and in Germany" },
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
        a: `Paste the domain. ${brandName} returns its estimated monthly organic and paid search traffic, plus the pages and keywords that bring it in. Paste a list and every site comes back side by side.`,
      },
      {
        q: "How accurate are traffic estimates?",
        a: "They are good for comparing sites and weaker for any single number. Ahrefs’ own study against Search Console data found a median gap of about 50%, with some sites within 5% and others far off.",
      },
      {
        q: "Why doesn't it match my analytics?",
        a: "Analytics counts every visit. The estimate models search clicks only, from rankings, search volume and click-through rates, and misses keywords the providers do not track.",
      },
      {
        q: "Does it include direct and social traffic?",
        a: "No. The estimate covers search: organic, and paid where the site runs ads. Direct visits, social and referral traffic are not included.",
      },
      {
        q: "How many sites can I check at once?",
        a: "Up to 1,000 in a single request. Paste them in or upload a sheet and the results come back as one sorted sheet.",
      },
      {
        q: "Can I check one page or a subdomain?",
        a: "Yes. Each line can be a domain, a subdomain or a single page, so you can size a blog, a help centre or one landing page.",
      },
      {
        q: "Can I check traffic by country?",
        a: "Yes. Say the country with the request and the estimate is for search traffic in that market, or leave it out for worldwide.",
      },
      {
        q: "Where does the data come from?",
        a: "Traffic and keyword counts come from DataForSEO’s bulk traffic estimates. Domain rating comes from Ahrefs, and referring domains from DataForSEO.",
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
        body: "Keywords two or more competitors rank for rise to the top. When the whole field ranks for a term and you do not, it is rarely chance.",
      },
      {
        title: "Grouped into pages",
        body: "Gaps grouped into topics a single page could cover, so the output is a list of pages to write, not two thousand rows.",
      },
      {
        title: "Volume and difficulty on each",
        body: "Monthly volume and keyword difficulty from Ahrefs and DataForSEO on every keyword, so the easy wins stand out.",
      },
      {
        title: "The page to beat",
        body: "For each topic, the rival page that ranks best, so the brief starts from what already works.",
      },
      {
        title: "Real rivals, not giants",
        body: "When it finds your competitors for you, it leaves out sites like Wikipedia and Amazon, so the comparison is with businesses like yours.",
      },
    ],
    prompts: [
      { title: "You against three", prompt: "Keyword gap between linearly.app and jira.com, asana.com and clickup.com, US" },
      { title: "Find the rivals first", prompt: "Who are our search competitors? Then show the keywords they rank for and we don't" },
      { title: "Only the easy ones", prompt: "Our keyword gaps with difficulty under 30 and at least 500 searches a month" },
      { title: "Where we are losing", prompt: "Keywords we rank for but all our rivals beat us on" },
      { title: "Pages, not keywords", prompt: "Group our keyword gaps into pages we should write, biggest first" },
      { title: "Paid gaps", prompt: "Keywords our competitors bid on in Google Ads that we don't" },
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
        a: "A comparison of the keywords your site ranks for with your competitors’ keywords, keeping the ones they rank for and you do not. It shows the topics you are missing.",
      },
      {
        q: "How many competitors should I compare?",
        a: "Two to five. Fewer misses patterns; more adds noise. Pick rivals that compete with you in search, not only in sales.",
      },
      {
        q: "What if I don't know who my search competitors are?",
        a: "Ask it to find them. It lists the domains that share the most ranking keywords with yours, leaving out giants like Wikipedia and Amazon.",
      },
      {
        q: "Where does the keyword data come from?",
        a: `${brandName} compares each rival with your site through DataForSEO, and adds volumes and difficulty from Ahrefs and DataForSEO. The grouping and recommendations are the agent’s; the numbers are the providers’.`,
      },
      {
        q: "Can it find keywords where I rank but poorly?",
        a: "Yes. Besides the keywords you are missing, it lists the ones where a rival ranks well ahead of you, often the faster wins.",
      },
      {
        q: "Does it cover paid keywords too?",
        a: "Yes. Ask for paid search as well and it shows the keywords rivals bid on that you do not.",
      },
      {
        q: "What do I do with the results?",
        a: "Pick the topics with the best volume for their difficulty and write or improve a page for each. Each topic can become a brief in the same conversation.",
      },
      {
        q: "How is this different from competitor keyword research?",
        a: "Competitor keyword research lists everything one rival ranks for. A gap analysis puts your site beside several rivals and keeps only what you are missing or losing.",
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
