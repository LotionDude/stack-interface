import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shade/avatar";
import { LucideDot } from "lucide-react";
import { PostCommentType } from "@/types/comment";

interface PostCommentProps {
  postComment: PostCommentType;
}

function PostComment({ postComment, className }: PostCommentProps & ClassName) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className={"flex flex-row items-end"}>
        <Avatar className={"size-7 cursor-pointer select-none"}>
          <AvatarImage className={"object-cover"} src={postComment.authorSrc} />
          <AvatarFallback className={"transition-bg"}>cn</AvatarFallback>
        </Avatar>
        <p className={"cursor-pointer pl-1.5 text-studio-600 hover:underline"}>
          {postComment.author}
        </p>
        <LucideDot className={"icon-size h-fit w-fit"} />
        <p className={"text-sm"}>3 hours ago</p>
      </div>
      <p className={"text-xs"}>{postComment.comment}</p>
    </div>
  );
}

export default PostComment;
