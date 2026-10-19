import { magConfig } from "../config";

/* EverAsk's "Start building" pill after the sections (components/landing/StartBuilding.tsx), here straight into EverAsk. */
export function StartBuilding() {
  return (
    <div className="flex justify-center pb-20">
      <a href={magConfig.links.start} className="btn-primary !h-11 !px-6 text-[15px]">
        Start creating
      </a>
    </div>
  );
}
