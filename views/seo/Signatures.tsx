import { Glyph } from "./Icons";
import { KeywordSheet } from "./KeywordSheet";
import { Section } from "./Section";
import { ANNOTATED_PAGE, FORMULA, GAP_BOARD, KEYWORD_SHEET, PAGES_TO_WRITE, ROW_ANATOMY, SCOPE, TRAFFIC_BARS } from "./signature";

const VERMILION = "#E9482B";
const fmt = (n: number) => n.toLocaleString("en-US");

/* ───────── Competitor keyword research ───────── */

export function SheetSection() {
  return (
    <Section id="sheet" title={KEYWORD_SHEET.title} intro={KEYWORD_SHEET.intro}>
      <KeywordSheet />
    </Section>
  );
}

/* One keyword row set large, each number labelled from above by a short
   hairline, its meaning set below in the same column. */
export function RowAnatomy() {
  const { row, parts } = ROW_ANATOMY;
  const cells: { key: string; value: string; wide?: boolean }[] = [
    { key: "keyword", value: row.keyword, wide: true },
    { key: "volume", value: row.volume },
    { key: "kd", value: row.kd },
    { key: "traffic", value: row.traffic },
    { key: "page", value: row.page },
  ];
  return (
    <Section id="reading-a-row" title={ROW_ANATOMY.title} intro={ROW_ANATOMY.intro}>
      <div className="overflow-x-auto">
        <div className="grid min-w-[760px] grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-x-6">
          {cells.map((c) => {
            const part = parts.find((p) => p.key === c.key);
            return (
              <div key={c.key} className="flex flex-col">
                <span className={`h-5 text-[13px] ${part ? "text-action" : "text-transparent"}`}>{part?.label ?? "."}</span>
                <span aria-hidden className={`mx-0 my-2 h-6 w-px ${part ? "bg-action" : "bg-transparent"}`} />
                <span className={`border-y border-line py-5 font-display text-[22px] font-medium tracking-[-0.01em] text-ink tabular-nums sm:text-[26px] ${c.key === "page" ? "font-mono text-[18px] sm:text-[20px]" : ""}`}>
                  {c.value}
                </span>
                {part && <p className="mt-4 text-[14px] leading-relaxed text-muted">{part.body}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ───────── Keyword gap analysis ───────── */

/* Three columns, one per kind of gap: the name in the serif, what it means,
   then its keywords as hairline rows. Separated by vertical rules. */
export function GapBoard() {
  return (
    <Section id="gaps" title={GAP_BOARD.title} intro={GAP_BOARD.intro}>
      <div className="grid border-t border-line-soft lg:grid-cols-3">
        {GAP_BOARD.columns.map((col, i) => (
          <div key={col.label} className={`py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0 ${i > 0 ? "border-t border-line-soft lg:border-t-0 lg:border-l" : ""}`}>
            <h3 className="font-serif text-[40px] leading-none font-normal italic text-ink">{col.label}</h3>
            <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-muted">{col.body}</p>
            <ul className="mt-6 border-t border-line-soft">
              {col.rows.map((r) => (
                <li key={r.keyword} className="border-b border-line-soft py-3.5">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[15px] text-ink">{r.keyword}</span>
                    <span className="shrink-0 text-[14px] tabular-nums text-body">{r.volume}</span>
                  </div>
                  <span className="mt-0.5 block text-[13px] text-muted">{r.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* Topics as rows with a bar for their total searches: tints of the brand
   blue only, the biggest at full strength. */
export function PagesToWrite() {
  const max = Math.max(...PAGES_TO_WRITE.rows.map((r) => r.searches));
  return (
    <Section id="pages-to-write" title={PAGES_TO_WRITE.title} intro={PAGES_TO_WRITE.intro}>
      <ul className="border-t border-line-soft">
        {PAGES_TO_WRITE.rows.map((r, i) => (
          <li key={r.topic} className="grid items-center gap-2 border-b border-line-soft py-5 sm:grid-cols-[minmax(0,3fr)_minmax(0,6fr)_minmax(0,3fr)] sm:gap-8">
            <span className="t-item">{r.topic}</span>
            <span className="flex items-center gap-3">
              <span className="h-2 rounded-full" style={{ width: `${(r.searches / max) * 100}%`, backgroundColor: i === 0 ? "#0088ff" : "rgb(0 136 255 / 0.35)" }} />
              <span className="shrink-0 text-[14px] tabular-nums text-ink">{fmt(r.searches)}</span>
            </span>
            <span className="text-[14px] leading-relaxed text-muted">{r.note}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ───────── Traffic estimator ───────── */

/* Sites as horizontal bars on the one tinted surface: organic solid blue,
   paid a tint after it, the figure and domain rating at the end. The site
   you are sizing yourself against is marked once in vermilion. */
export function TrafficBars() {
  const max = Math.max(...TRAFFIC_BARS.rows.map((r) => r.organic + r.paid));
  return (
    <Section id="sites" title={TRAFFIC_BARS.title} intro={TRAFFIC_BARS.intro}>
      <div className="rounded-[24px] bg-fill-1 p-5 sm:p-8">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="size-2.5 rounded-sm bg-action" />
            Organic
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-2.5 rounded-sm" style={{ backgroundColor: "rgb(0 136 255 / 0.35)" }} />
            Paid
          </span>
        </div>
        <ul className="mt-5">
          {TRAFFIC_BARS.rows.map((r) => (
            <li key={r.site} className="grid grid-cols-[minmax(0,120px)_1fr] items-center gap-3 py-2.5 sm:grid-cols-[180px_1fr_150px] sm:gap-6">
              <span className={`flex items-center gap-2 truncate text-[14px] ${r.you ? "font-medium text-ink" : "text-body"}`}>
                {r.you && <span aria-hidden className="size-1.5 shrink-0 rounded-full" style={{ backgroundColor: VERMILION }} />}
                {r.site}
              </span>
              <span className="flex h-3 overflow-hidden rounded-full" style={{ width: `${((r.organic + r.paid) / max) * 100}%`, minWidth: 6 }}>
                <span className="h-full bg-action" style={{ width: `${(r.organic / (r.organic + r.paid)) * 100}%` }} />
                {r.paid > 0 && <span className="h-full flex-1" style={{ backgroundColor: "rgb(0 136 255 / 0.35)" }} />}
              </span>
              <span className="col-start-2 text-[13px] tabular-nums text-muted sm:col-start-auto sm:text-right sm:text-[14px]">
                <span className="text-ink">{fmt(r.organic + r.paid)}</span> · DR {r.dr}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* The estimate as an equation: three terms in the serif with the operators
   between them, each term's meaning set below it. */
export function Formula() {
  const parts = [...FORMULA.terms, FORMULA.result];
  return (
    <Section id="formula" title={FORMULA.title} intro={FORMULA.intro}>
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-x-5">
        {parts.map((t, i) => (
          <li key={t.label} className="contents">
            <div className={i === parts.length - 1 ? "lg:border-l lg:border-line-soft lg:pl-5" : ""}>
              <span className={`font-serif text-[36px] leading-none font-normal italic ${i === parts.length - 1 ? "text-action" : "text-ink"}`}>{t.label}</span>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">{t.body}</p>
            </div>
            {i < parts.length - 1 && (
              <span aria-hidden className="hidden pt-1 font-serif text-[36px] leading-none text-muted lg:block">
                {i === parts.length - 2 ? "=" : "×"}
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ───────── AI SEO audit ───────── */

/* A small blue tag naming the finding a part of the wireframe belongs to. */
function Mark({ id, className = "" }: { id: string; className?: string }) {
  const label = ANNOTATED_PAGE.findings.find((f) => f.id === id)!.label;
  return (
    <span className={`absolute z-10 inline-flex items-center gap-1.5 rounded-pill bg-action px-2 py-0.5 text-[11px] font-medium whitespace-nowrap text-white shadow-sm ${className}`}>{label}</span>
  );
}

/* A wireframe of the page, front-on in a browser frame, each part it read
   marked by a small blue tag; the findings sit beside it with the same tags. */
export function AnnotatedPage() {
  return (
    <Section id="on-the-page" title={ANNOTATED_PAGE.title} intro={ANNOTATED_PAGE.intro}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
        <div className="rounded-[24px] bg-fill-1 p-4 sm:p-8">
          <div className="overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_rgb(0_20_60/0.06),0_12px_32px_rgb(0_40_120/0.08)]">
            <div className="flex items-center gap-2 border-b border-line-soft px-4 py-2.5">
              <span className="flex gap-1.5">
                <span className="size-2 rounded-full bg-fill-2" />
                <span className="size-2 rounded-full bg-fill-2" />
                <span className="size-2 rounded-full bg-fill-2" />
              </span>
              <span className="ml-2 flex-1 truncate rounded-md bg-fill-1 px-3 py-1 text-[12px] text-muted">{ANNOTATED_PAGE.url}</span>
            </div>
            <div className="relative space-y-5 p-5 sm:p-7">
              {/* The page head, which visitors don't see but search engines read first. */}
              <div className="relative rounded-lg border border-dashed border-line px-3 pt-4 pb-3">
                <span className="absolute -top-2 left-3 bg-white px-1 text-[11px] text-muted">Page head</span>
                <Mark id="title" className="-top-3 right-3" />
                <div className="h-2.5 w-1/3 rounded bg-ink/60" />
                <div className="relative mt-2.5 h-2 w-3/4 rounded border border-dashed border-line" />
                <Mark id="description" className="top-[30px] right-3" />
              </div>
              <div className="relative pt-3">
                <Mark id="h1" className="-top-1 right-0" />
                <div className="h-5 w-2/3 rounded bg-ink/80" />
                <div className="mt-3 h-2.5 w-11/12 rounded bg-fill-2" />
                <div className="mt-2 h-2.5 w-4/5 rounded bg-fill-2" />
              </div>
              <div className="relative grid grid-cols-3 gap-3">
                <Mark id="plans" className="-top-3 left-1/2 -translate-x-1/2" />
                {[0, 1, 2].map((n) => (
                  <div key={n} className={`rounded-lg border p-3 ${n === 1 ? "border-action" : "border-line-soft"}`}>
                    <div className="h-2.5 w-1/2 rounded bg-fill-2" />
                    <div className="mt-3 h-4 w-2/3 rounded bg-ink/70" />
                    <div className="mt-3 space-y-1.5">
                      <div className="h-2 rounded bg-fill-2" />
                      <div className="h-2 w-5/6 rounded bg-fill-2" />
                      <div className="h-2 w-4/6 rounded bg-fill-2" />
                    </div>
                    <div className={`mt-4 h-6 rounded-md ${n === 1 ? "bg-action" : "bg-fill-2"}`} />
                  </div>
                ))}
              </div>
              <div className="relative grid grid-cols-2 gap-3">
                <Mark id="images" className="-top-3 right-3" />
                <div className="aspect-[16/9] rounded-lg bg-[rgb(0_136_255/0.12)]" />
                <div className="aspect-[16/9] rounded-lg bg-[rgb(0_136_255/0.12)]" />
              </div>
            </div>
          </div>
        </div>
        <dl className="border-t border-line-soft self-start">
          {ANNOTATED_PAGE.findings.map((f) => (
            <div key={f.id} className="border-b border-line-soft py-4">
              <dt className="flex items-center gap-2.5">
                <span className="rounded-pill bg-action px-2 py-0.5 text-[11px] font-medium text-white">{f.label}</span>
                <span className="text-[15px] font-medium text-ink">{f.value}</span>
              </dt>
              <dd className={`mt-1.5 text-[14px] leading-relaxed ${f.ok ? "text-muted" : "text-body"}`}>{f.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

/* What the audit reads beside what it leaves to other tools: two columns of
   hairline rows, the second quieter. */
export function Scope() {
  return (
    <Section id="scope" title={SCOPE.title}>
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-14">
        {[SCOPE.reads, SCOPE.leaves].map((col, i) => (
          <div key={col.label}>
            <h3 className="t-item">{col.label}</h3>
            <ul className="mt-3 border-t border-line-soft">
              {col.items.map((item) => (
                <li key={item} className={`flex gap-3 border-b border-line-soft py-3.5 text-[15px] leading-snug ${i === 0 ? "text-ink" : "text-muted"}`}>
                  <span className={`mt-[3px] shrink-0 ${i === 0 ? "text-action" : "text-muted"}`}>
                    {i === 0 ? <Glyph name="check" className="size-4" /> : <span className="mt-[8px] block h-px w-3 bg-current" />}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
