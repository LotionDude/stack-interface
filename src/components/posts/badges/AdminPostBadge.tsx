import GenericPostBadge from "./GenericPostBadge";
import { LucideCrown } from "lucide-react";

function AdminPostBadge() {
  return (
    <GenericPostBadge
      className={
        "bg-[#c874d4] text-[#f8d2fd] dark:bg-[#b86cc4] dark:text-[#dd84e9]"
      }
      icon={<LucideCrown className={"icon-size"} strokeWidth={2.25} />}
      text={"Admin"}
    />
  );
}

export default AdminPostBadge;
