import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";
import {
  PageLayout,
  PageLayoutContent,
  PageLayoutSeparator,
  PageLayoutTitle,
} from "@/layouts/PageLayout";
import posts from "@/data/posts.json";
import { Post as PostType } from "@/types/post";
import Post from "@/components/posts/Post";
import { useParams } from "react-router-dom";
import PostTypeBadge from "@/components/posts/PostTypeBadge";
import { LucideDot } from "lucide-react";
import PostComment from "@/components/posts/PostComment";
import { PostCommentType } from "@/types/comment";

function PostPage({ className }: ClassName) {
  const { id } = useParams();

  const post: PostType = posts.find((post) => post.id === id);
  const comment: PostCommentType = {
    author: "lotion_dude",
    authorSrc:
      "https://i.pinimg.com/564x/e9/91/c7/e991c73a6ed49d9ac163fb4025bd666f.jpg",
    date: "2024-11-03 16:40:23",
    comment: "i AM, the goat.",
  };

  return (
    <PageLayout className={"gap-2"}>
      <PageLayoutTitle className={"flex flex-row items-end gap-3 leading-none"}>
        <p>{post.title}</p>
        <PostTypeBadge type={post.type} className={"h-fit px-2 py-0.5"} />
      </PageLayoutTitle>
      <PageLayoutContent className={"mb-1 flex flex-row gap-1"}>
        <p>1,723,871 views</p>
        <LucideDot className={"icon-size"} />
        <p>3 hours ago</p>
      </PageLayoutContent>
      <PageLayoutSeparator className={"mt-3"} />
      <PageLayoutContent className={"flex flex-col pt-1"}>
        <Post post={post} />

        {/* <PageLayoutTitle className={"mt-12"}>Responses</PageLayoutTitle>
        <PageLayoutSeparator className={"my-4"} />
        <Post post={post} />
        <PageLayoutSeparator className={"mb-4 mt-16"} />
        <Post post={post} /> */}
      </PageLayoutContent>
    </PageLayout>
  );
}

export default PostPage;
