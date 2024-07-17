import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";
import { Separator } from "@/components/shade/separator";
import {
  PageLayout,
  PageLayoutContent,
  PageLayoutSeparator,
  PageLayoutTitle,
} from "@/layouts/PageLayout";
import PostPreview from "@/components/posts/preview/PostPreview";
import posts from "@/data/posts.json";
import { Button } from "@/components/shade/button";
import { Link } from "react-router-dom";

function PostsPage({ className }: ClassName) {
  return (
    <PageLayout>
      <PageLayoutTitle>Posts</PageLayoutTitle>
      <PageLayoutContent
        className={"flex flex-row items-center justify-between"}
      >
        <p>231,237 posts</p>
        <Link to={"/createPost"}>
          <Button>Upload post</Button>
        </Link>
      </PageLayoutContent>
      <PageLayoutSeparator className="mt-3" />
      <div
        className={
          " flex flex-col gap-3 divide-y divide-zinc-100 pt-1 dark:divide-zinc-900"
        }
      >
        {posts &&
          posts.map((post, index) => (
            <PostPreview
              key={index}
              post={post}
              className={"transition-divide not-first:pt-2"}
            />
          ))}
      </div>
    </PageLayout>
  );
}

export default PostsPage;
