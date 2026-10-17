import type { FooterColumnProps } from "./FooterColumn.types";

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="kicker text-white/50">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
