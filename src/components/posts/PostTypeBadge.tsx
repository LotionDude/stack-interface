import { ClassName } from "@/types/overridable";
import { cn } from "@/lib/utils";
import { PostType as PostVariant } from "@/types/post";
import { cva } from "class-variance-authority";

interface PostTypeBadgeProps {
  type: PostVariant;
}

const typeVariants = cva(
  " saturate-[0.75] bg-zinc-200 transition-colors dark:saturate-75",
  {
    variants: {
      type: {
        QUESTION:
          "bg-emerald-200 text-emerald-600 dark:bg-emerald-600/25 dark:text-emerald-500",
        GUIDANCE:
          "bg-amber-200 text-amber-600 dark:bg-amber-600/25 dark:text-amber-500",
        ANNOUNCE:
          "bg-fuchsia-200 text-fuchsia-600 dark:bg-fuchsia-600/25 dark:text-fuchsia-500",
      },
    },
  },
);

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function PostTypeBadge({ type, className }: PostTypeBadgeProps & ClassName) {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center rounded-sm text-xs",
        typeVariants({ type }),
        className,
      )}
    >
      {capitalizeFirstLetter(type)}
    </div>
  );
}

export default PostTypeBadge;
