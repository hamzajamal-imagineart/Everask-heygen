"use client";

import { useState } from "react";
import type { SampleTab } from "./types";

const VERMILION = "#E9482B";

/* The report, part by part. Left: each part's name and what it checks, the
   open one marked by a blue rule. Right: that part's sample on the page's one
   tinted surface. Type and hairlines do the work; vermilion marks the
   business being audited, once. Illustrative figures for a fictional
   practice. */
export function SampleAudit({ tabs }: { tabs: SampleTab[] }) {
  const [at, setAt] = useState(0);
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12">
      <ol role="tablist" aria-label="Report parts" aria-orientation="vertical" className="border-t border-line-soft">
        {tabs.map((t, i) => (
          <li key={t.label} className="border-b border-line-soft">
            <button
              type="button"
              role="tab"
              aria-selected={i === at}
              onClick={() => setAt(i)}
              className="group relative block w-full py-5 pr-2 pl-5 text-left"
            >
              <span aria-hidden className={`absolute top-5 bottom-5 left-0 w-[2px] rounded-full transition-colors ${i === at ? "bg-action" : "bg-transparent group-hover:bg-line"}`} />
              <span className={`t-item transition-colors ${i === at ? "text-ink" : "text-muted group-hover:text-ink"}`}>{t.label}</span>
              <span className={`mt-1.5 block text-[14px] leading-relaxed transition-colors ${i === at ? "text-body" : "text-muted"}`}>{t.summary}</span>
            </button>
          </li>
        ))}
      </ol>

      {/* Every part is laid in the same cell, the closed ones hidden, so the
          surface keeps the height of the tallest and the page never jumps. */}
      <div className="grid min-w-0 rounded-[24px] bg-fill-1 p-5 sm:p-8">
        {tabs.map((t, i) => (
          <div key={t.label} role="tabpanel" aria-label={t.label} aria-hidden={i !== at} className={`min-w-0 [grid-area:1/1] ${i === at ? "" : "invisible"}`}>
            <Part tab={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* One part's sample: a ranked table, a grid of ranks, or a list of checks. */
function Part({ tab }: { tab: SampleTab }) {
  return (
    <>
      <p className="text-[14px] text-muted">{tab.caption}</p>

      {tab.kind === "table" && (() => {
        // Number columns right-aligned: the ones the tab names, else all after the third.
        const num = (c: number) => (tab.numeric ? tab.numeric.includes(c) : c > 2);
        return (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-[14px]">
            <thead>
              <tr className="text-muted">
                {tab.columns.map((c, i) => (
                  <th key={c} className={`pb-3 font-normal ${num(i) ? "text-right" : "pr-4"}`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-line">
              {tab.rows.map((row, r) => {
                const you = r === tab.you;
                return (
                  <tr key={row[1]} className="border-b border-line-soft last:border-0">
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className={`py-3.5 tabular-nums ${num(c) ? "text-right" : "pr-4"} ${c === 1 ? "text-ink" : "text-body"} ${you ? "font-medium text-ink" : ""}`}
                      >
                        {c === 1 && you ? (
                          <span className="inline-flex items-center gap-2">
                            <span aria-hidden className="size-1.5 rounded-full" style={{ backgroundColor: VERMILION }} />
                            {cell}
                          </span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        );
      })()}

      {tab.kind === "grid" && (
        <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
          <ol className="grid w-fit shrink-0 grid-cols-3 gap-1.5" aria-label="Rank at each point">
            {tab.ranks.map((rank, i) => (
              <li
                key={i}
                className="grid size-[72px] place-items-center rounded-xl font-display text-[22px] font-medium tabular-nums sm:size-20"
                // Tints of the brand blue only: deeper where the rank is better.
                style={{
                  backgroundColor: rank <= 3 ? "#0088ff" : rank <= 6 ? "rgb(0 136 255 / 0.28)" : "rgb(0 136 255 / 0.08)",
                  color: rank <= 3 ? "#fff" : "var(--color-ink)",
                }}
              >
                {rank}
              </li>
            ))}
          </ol>
          <div className="max-w-sm">
            <p className="text-[15px] leading-relaxed text-ink">{tab.note}</p>
            {tab.legend && <p className="mt-4 text-[13px] text-muted">{tab.legend}</p>}
          </div>
        </div>
      )}

      {tab.kind === "list" && (
        <dl className="mt-5 border-t border-line">
          {tab.rows.map((row) => (
            <div key={row.label} className="grid gap-1 border-b border-line-soft py-3.5 last:border-0 sm:grid-cols-[200px_1fr] sm:gap-6">
              <dt className="text-[14px] text-muted">{row.label}</dt>
              <dd className="text-[15px] text-ink">
                <span className="font-medium">{row.value}</span>
                {row.note && <span className={`block text-[14px] sm:inline sm:pl-3 ${row.ok === false ? "text-body" : "text-muted"}`}>{row.note}</span>}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </>
  );
}
