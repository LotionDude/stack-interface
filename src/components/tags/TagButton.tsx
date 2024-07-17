import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";

interface TagButtonProps extends ClassName {
  name: string;
}

function TagButton({ className, name }: TagButtonProps) {
  return (
    <div
      className={cn(
        "flex w-fit cursor-pointer items-center rounded-lg bg-studio-300 bg-opacity-30 px-2 py-0.5 text-sm text-studio-600 transition-colors duration-200 hover:bg-opacity-55 hover:text-studio-800 dark:bg-studio-800 dark:bg-opacity-20 dark:text-studio-500 dark:hover:bg-opacity-35 dark:hover:text-studio-300",
        className,
      )}
    >
      {name ?? "-"}
    </div>
  );
}

export default TagButton;
