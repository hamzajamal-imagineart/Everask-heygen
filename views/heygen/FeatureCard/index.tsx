import { srcSetFor } from "@/lib/responsive";
import { LineIcon } from "../LineIcon";
import type { FeatureCardProps } from "./FeatureCard.types";

export function FeatureCard({ title, text, image, icon }: FeatureCardProps) {
  return (
    <div className="card group flex h-full flex-col p-3">
      {image ? (
        <div className="tile h-[260px]">
          <img src={image} srcSet={srcSetFor(image)} sizes="(min-width: 768px) 50vw, 100vw" loading="lazy" decoding="async" alt="" className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-4 p-5 pt-6 md:p-6">
        {icon ? (
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-tint text-action">
            <LineIcon name={icon} className="size-6" />
          </span>
        ) : null}
        <h3 className="hg-h3 text-[24px] leading-[1.12] text-ink md:text-[26px]">{title}</h3>
        <p className="text-[15px] leading-relaxed text-body">{text}</p>
      </div>
    </div>
  );
}
