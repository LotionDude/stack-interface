import { ClassName } from "@/types/overridable";
import { cn } from "@/lib/utils";
import { Post } from "@/types/post";
import VariantPostBadge from "../badges/VariantPostBadge";
import PostPreviewTitle from "./PostPreviewTitle";
import PostPreviewSide from "./PostPreviewSide";
import TagButtons from "@/components/tags/TagButtons";

interface PostPreviewProps {
  post: Post;
}
function PostPreview({ post, className }: PostPreviewProps & ClassName) {
  return (
    <div className={cn("flex flex-row gap-5", className)}>
      <PostPreviewSide
        type={post.type}
        author={post.author}
        authorSrc={post.authorSrc}
      />

      <div className={"flex flex-col gap-2"}>
        <PostPreviewTitle
          title={post.title}
          author={post.author}
          date={post.date}
          id={post.id}
        />

        <TagButtons tags={post.tags} />

        <div className={"line-clamp-2 text-sm"}>{post.plainContent}</div>

        {post.metaTags && post.metaTags.length > 0 && (
          <div className={"flex flex-row flex-wrap gap-1 pt-1"}>
            {post.metaTags.map((metaTag, index) => (
              <VariantPostBadge key={index} variant={metaTag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PostPreview;
