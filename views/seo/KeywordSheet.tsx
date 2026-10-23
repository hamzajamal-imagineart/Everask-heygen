"use client";

import { useState } from "react";
import { KEYWORD_SHEET } from "./signature";

const fmt = (n: number) => n.toLocaleString("en-US");

/* Competitor keyword research: the sheet itself, full width, with the views
   people switch between as a quiet segmented control above it. The rows
   filter in place; the sheet keeps its height so nothing below jumps. */
export function KeywordSheet() {
  const [view, setView] = useState(0);
  const { rows, views, site } = KEYWORD_SHEET;
  const shown = rows.filter((r) => (view === 1 ? r.kd <= 30 && r.position >= 4 && r.position <= 20 : view === 2 ? r.intent === "Commercial" || r.intent === "Transactional" : true));
  return (
    <div className="overflow-hidden rounded-[24px] bg-fill-1">
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 pt-5 sm:px-8 sm:pt-7">
        <div role="tablist" aria-label="Views" className="inline-flex rounded-pill bg-white p-1 shadow-[inset_0_0_0_1px_var(--color-line-soft)]">
          {views.map((v, i) => (
            <button
              key={v.label}
              type="button"
              role="tab"
              aria-selected={i === view}
              onClick={() => setView(i)}
              className={`h-8 rounded-pill px-3.5 text-[13px] font-medium transition-colors sm:px-4 sm:text-[14px] ${i === view ? "bg-ink text-white" : "text-muted hover:text-ink"}`}
            >
              {v.label}
            </button>
          ))}
        </div>
        <p className="text-[14px] text-muted">
          {site}, {views[view].note.charAt(0).toLowerCase() + views[view].note.slice(1)}
        </p>
      </div>
      <div className="mt-4 overflow-x-auto px-5 pb-5 sm:px-8 sm:pb-7">
        <table className="w-full min-w-[720px] text-left text-[14px]">
          <thead>
            <tr className="text-muted">
              <th className="pb-3 pr-4 font-normal">Keyword</th>
              <th className="pb-3 pr-4 text-right font-normal">Position</th>
              <th className="pb-3 pr-4 text-right font-normal">Volume</th>
              <th className="pb-3 pr-4 text-right font-normal">KD</th>
              <th className="pb-3 pr-4 text-right font-normal">Traffic</th>
              <th className="pb-3 pr-4 font-normal">Intent</th>
              <th className="pb-3 font-normal">Ranking page</th>
            </tr>
          </thead>
          {/* Fixed height for the longest view, so switching views never moves the page. */}
          <tbody className="border-t border-line" style={{ height: `${rows.length * 49}px` }}>
            {shown.map((r) => (
              <tr key={r.keyword} className="h-[49px] border-b border-line-soft">
                <td className="pr-4 text-ink">{r.keyword}</td>
                <td className="pr-4 text-right tabular-nums text-body">{r.position}</td>
                <td className="pr-4 text-right tabular-nums text-body">{fmt(r.volume)}</td>
                <td className="pr-4 text-right tabular-nums text-body">{r.kd}</td>
                <td className="pr-4 text-right tabular-nums font-medium text-ink">{fmt(r.traffic)}</td>
                <td className="pr-4 text-muted">{r.intent}</td>
                <td className="font-mono text-[13px] text-muted">{r.page}</td>
              </tr>
            ))}
            <tr aria-hidden>
              <td colSpan={7} />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
