import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";
import { Post as PostType } from "@/types/post";
import { LucideChevronDown, LucideChevronUp } from "lucide-react";
import PostMarkdown from "./editor/PostMarkdown";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/shade/avatar";
import TagButtons from "../tags/TagButtons";
import PostComment from "./PostComment";
import { PageLayoutSeparator } from "@/layouts/PageLayout";
import { PostCommentType } from "@/types/comment";

interface PostProps {
  post: PostType;
}

const arrowStyle = () =>
  "cursor-pointer rounded-full border border-border text-lg hover:text-studio-500 transition-border";

function Post({ post, className }: PostProps & ClassName) {
  const comment: PostCommentType = {
    author: "lotion_dude",
    authorSrc:
      "https://i.pinimg.com/564x/e9/91/c7/e991c73a6ed49d9ac163fb4025bd666f.jpg",
    date: "2024-11-03 16:40:23",
    comment: "i AM, the goat.",
  };

  return (
    <div className={"flex flex-row gap-3"}>
      <div className={"flex flex-none flex-col items-center gap-2 text-lg"}>
        <LucideChevronUp className={arrowStyle()} size={35} />
        <p className={"font-bold"}>123</p>
        <LucideChevronDown className={arrowStyle()} size={35} />
      </div>
      <div className={"flex flex-col gap-1.5"}>
        <PostMarkdown
          className={"pl-1"}
          markdownContent={post.markdownContent}
          isEditable={false}
        />

        <TagButtons tags={post.tags} className={"gap-1.5"} />

        <div
          className={
            "flex w-fit flex-row items-center justify-start gap-2 rounded-md bg-studio-100 p-2 leading-none text-studio-700 transition-bg dark:bg-studio-950/35 dark:text-studio-500"
          }
        >
          <Avatar className={"size-12 cursor-pointer select-none"}>
            <AvatarImage className={"object-cover"} src={post.authorSrc} />
            <AvatarFallback className={"transition-bg"}>
              {post.author.slice(0, 3).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className={"flex flex-col justify-between gap-1 text-sm"}>
            <div className={" cursor-pointer hover:underline"}>
              {post.author}
            </div>
            <div className={"text-xs"}>{post.date}</div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-1  text-zinc-400 transition-colors  dark:text-zinc-700">
          <div className="h-px w-3 border-b border-border/75 transition-border"></div>
          <LucideChevronDown className="icon-size cursor-pointer" />
          <p>Comments</p>
          <div className="h-px w-full border-b border-border/75 transition-border"></div>
        </div>

        <div className={""}>
          <PostComment postComment={comment} />
          <PageLayoutSeparator className={"my-1.5 opacity-40"} />
          <PostComment className={"mt-1.5"} postComment={comment} />
          <PageLayoutSeparator className={"my-1 opacity-40"} />
          <PostComment className={"mt-1.5"} postComment={comment} />
          <PageLayoutSeparator className={"my-1.5 opacity-40"} />
          <PostComment className={"mt-1.5"} postComment={comment} />
        </div>
      </div>
    </div>
  );
}

export default Post;
