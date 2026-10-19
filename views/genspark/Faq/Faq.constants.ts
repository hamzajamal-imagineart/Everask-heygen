import type { FaqItem } from "@/views/mag/Faq/Faq.types";

/* Answers from genspark.ai/business and its product pages, credited to Genspark; the first is ours. */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Can I use Genspark inside EverAsk?",
    answer: "Yes. EverAsk connects to Genspark through its API, so you can hand Genspark's agents and office tools a job from your EverAsk workspace and get the finished work back there, alongside the other models you use.",
  },
  {
    question: "What is Super Agent?",
    answer: "Super Agent doesn't just answer, it works. It writes the plan, runs the tools, cites the sources, and drops finished work in your channel. Every step is visible: the plan, the tool calls, the sources, the reasoning. Interrupt anytime; the agent picks up where you left off.",
  },
  {
    question: "What are AI Sheets & Slides?",
    answer: "Docs that think alongside you. A new formula, =ASK(), fills any cell with a reasoned answer, citing the sources it used. Drop a memo and get a story-boarded deck. Works with .xlsx, .pptx, Google Sheets, and Google Slides.",
  },
  {
    question: "Where do Genspark's agents run?",
    answer: "Every task runs on its own isolated cloud computer, with a terminal, browser, files, and network access. Nothing touches your laptop, and nothing leaks between conversations.",
  },
  {
    question: "Does Genspark train on my data?",
    answer: "No. Your prompts, files, and outputs are never used to train foundation models, contractually and technically. Each workspace is isolated and encrypted at rest and in transit.",
  },
  {
    question: "Which models and tools does it use?",
    answer: "Genspark routes each task to the best available frontier model, GPT, Claude, Gemini, and open source, across 70+ models, and connects to 200+ tools and MCP endpoints such as Salesforce, HubSpot, Snowflake, Google Workspace, Microsoft 365 and Slack.",
  },
];
