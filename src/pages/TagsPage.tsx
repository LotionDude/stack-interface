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
import TagPreview from "@/components/tags/TagPreview";

function TagsPage({ className }: ClassName) {
  return (
    <PageLayout>
      <PageLayoutTitle>Tags</PageLayoutTitle>
      <PageLayoutContent>231,237 tags</PageLayoutContent>
      <PageLayoutSeparator />
      <div className={"grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"}>
        <TagPreview name="javascript" />
        <TagPreview name="typescript" />
        <TagPreview name="reactjs" />
        <TagPreview name="java" />
        <TagPreview name="docker" />
        <TagPreview name="elasticsearch" />
        <TagPreview name="javascript" />
        <TagPreview name="typescript" />
        <TagPreview name="reactjs" />
        <TagPreview name="java" />
        <TagPreview name="docker" />
        <TagPreview name="elasticsearch" />
      </div>
    </PageLayout>
  );
}

export default TagsPage;
