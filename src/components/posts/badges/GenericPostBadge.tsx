import { Badge } from "@/components/shade/badge";
import { cn } from "@/lib/utils";
import { ClassName, Overridable } from "@/types/overridable";
import { ReactNode } from "react";

interface GenericPostBadgeProps {
  icon: ReactNode;
  text: ReactNode;
}

function GenericPostBadge({
  icon,
  text,
  className,
}: GenericPostBadgeProps & ClassName) {
  return (
    <Badge
      className={cn(
        "bg-bermuda-200 text-bermuda-700 dark:bg-bermuda-800 dark:text-bermuda-700 flex size-5  flex-row items-center justify-center gap-1 rounded-full bg-opacity-75 p-[13px] text-xs saturate-[1.25] transition-all hover:scale-105 hover:bg-opacity-100 dark:bg-opacity-35 dark:hover:bg-opacity-50",
      )}
    >
      <div className={"text-sm"}>{icon}</div>
    </Badge>
  );
}

export default GenericPostBadge;
