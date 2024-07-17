import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";
import TagButton from "./TagButton";

interface TagButtonsProps {
  tags: string[] | undefined;
}

function TagButtons({ className, tags }: TagButtonsProps & ClassName) {
  return (
    <>
      {tags && tags.length > 0 && (
        <div className={cn("flex flex-row flex-wrap gap-1", className)}>
          {tags.map((tag, index) => (
            <TagButton key={index} name={tag} />
          ))}
        </div>
      )}
    </>
  );
}

export default TagButtons;
