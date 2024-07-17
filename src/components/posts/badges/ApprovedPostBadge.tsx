import GenericPostBadge from "./GenericPostBadge";
import { LucideCheck } from "lucide-react";

function ApprovedPostBadge() {
  return (
    <GenericPostBadge
      className={
        "bg-[#20a474] text-[#9df5d5] dark:bg-[#289c6c] dark:text-[#20a474]"
      }
      icon={<LucideCheck className={"icon-size"} strokeWidth={3} />}
      text={"Approved"}
    />
  );
}

export default ApprovedPostBadge;
