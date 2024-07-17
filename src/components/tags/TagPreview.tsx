import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";
import TagButton from "./TagButton";

interface TagPreviewProps extends ClassName {
  name: string;
}

function TagPreview({ name, className }: TagPreviewProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 rounded-md border p-2 transition-border",
        className,
      )}
    >
      <TagButton name={name} />
      <p className={"line-clamp-3 pl-0.5 text-sm"}>
        Hey guys Hey guys Hey guys Hey guys Hey guys Hey guys Hey guys Hey guys
        Hey guys Hey guys Hey guys Hey guys
      </p>
      <p>134,213 posts</p>
    </div>
  );
}

export default TagPreview;
