import { ClassName } from "@/types/overridable";
import { cn } from "@/lib/utils";
import { PostType } from "@/types/post";
import PostTypeBadge from "../PostTypeBadge";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/shade/avatar";

interface PostPreviewSideProps {
  type: PostType;
  author: string;
  authorSrc: string | undefined;
}
function PostPreviewSide({
  type,
  author,
  authorSrc,
  className,
}: PostPreviewSideProps & ClassName) {
  return (
    <div className={cn("flex flex-none flex-col gap-2", className)}>
      <Avatar className={"size-16 cursor-pointer select-none"}>
        <AvatarImage className={"object-cover"} src={authorSrc} />
        <AvatarFallback className={"transition-bg"}>
          {author.slice(0, 3).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <PostTypeBadge type={type} />
    </div>
  );
}

export default PostPreviewSide;
