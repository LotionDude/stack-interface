import GenericPostBadge from "./GenericPostBadge";
import { LucideTrophy } from "lucide-react";

function AwardedPostBadge() {
  return (
    <GenericPostBadge
      className={
        "bg-[#e0ac04] text-[#fff6b1] dark:bg-[#c88404] dark:text-[#ecce7a]"
      }
      icon={<LucideTrophy className={"icon-size"} strokeWidth={2} />}
      text={"Awarded"}
    ></GenericPostBadge>
  );
}

export default AwardedPostBadge;
