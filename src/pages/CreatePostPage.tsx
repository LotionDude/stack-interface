import PostMarkdown from "@/components/posts/editor/PostMarkdown";
import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";

function CreatePostPage({ className }: ClassName) {
  return (
    <div>
      <PostMarkdown
        markdownContent={"# hey"}
        isEditable={true}
        className={"w-full"}
      />
    </div>
  );
}

export default CreatePostPage;
