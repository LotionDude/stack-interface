import TagButton from "@/components/tags/TagButton";
import { ClassName } from "@/types/overridable";
import { cn } from "@/lib/utils";
import { Post } from "@/types/post";
import VariantPostBadge from "../badges/VariantPostBadge";
import PostTypeBadge from "../PostType";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/shade/avatar";
import { Link } from "react-router-dom";

interface PostPreviewTitleProps {
  id: string;
  title: string;
  author: string;
  date: string;
}
function PostPreviewTitle({
  id,
  title,
  author,
  date,
  className,
}: PostPreviewTitleProps & ClassName) {
  return (
    <div className={cn("flex h-fit flex-row items-end gap-2 pt-1", className)}>
      <Link
        to={`/posts/${id}`}
        className="cursor-pointer text-lg font-semibold leading-none text-studio-600  hover:underline dark:text-studio-500"
      >
        {title}
      </Link>
      <div className="text-auto-300 flex flex-none flex-row gap-1 text-xs leading-none">
        <p className="cursor-pointer text-studio-800 transition-colors hover:underline dark:text-studio-300">
          {author}
        </p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default PostPreviewTitle;
