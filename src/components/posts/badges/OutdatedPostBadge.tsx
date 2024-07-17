import GenericPostBadge from "./GenericPostBadge";
import { LucideCheck, LucideTimerOff } from "lucide-react";

function OutdatedPostBadge() {
  return (
    <GenericPostBadge
      className={
        " bg-[#d67867] text-[#fdcbcb] dark:bg-[#f06c24] dark:text-[#e27575]"
      }
      icon={<LucideTimerOff className={"icon-size"} strokeWidth={2.25} />}
      text={"Outdated"}
    />
  );
}

export default OutdatedPostBadge;
