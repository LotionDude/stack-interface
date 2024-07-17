import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";

import AnnouncementEditor from "./AnnouncementEditor";
import { LucidePencil } from "lucide-react";

function Announcement({ className }: ClassName) {
  return (
    <div
      className={cn(
        "flex min-h-2  w-full items-center justify-center gap-2 bg-studio-200 p-2 pb-0 text-base font-light text-studio-700 transition-colors dark:bg-studio-700 dark:text-studio-200",
        className,
      )}
    >
      <div className={""}>Development is smooth! 🎊</div>
      <AnnouncementEditor>
        <LucidePencil className={"icon-size opacity-25"} />
      </AnnouncementEditor>
    </div>
  );
}

export default Announcement;
