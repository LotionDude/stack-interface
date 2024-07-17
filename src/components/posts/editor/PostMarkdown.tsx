import React from "react";
import {
  Editor,
  rootCtx,
  editorViewOptionsCtx,
  defaultValueCtx,
} from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";

import "@milkdown/theme-nord/style.css";
import { ClassName } from "@/types/overridable";
import { cn } from "@/lib/utils";

const defaultValue = `
### Hello milkdowns
goat
\`test\`
\`\`\`js
const goat = 5
\`\`\`
`;

interface PostMarkdownProps {
  markdownContent: string;
  isEditable: boolean;
}

function MilkdownEditor({ markdownContent, isEditable }: PostMarkdownProps) {
  const { get } = useEditor((root) =>
    Editor.make()
      .config(nord)
      .config((ctx) => {
        ctx.set(rootCtx, root);
      })
      .config((ctx) => {
        ctx.update(editorViewOptionsCtx, (prev) => ({
          ...prev,
          editable: () => isEditable,
        }));
      })
      .config((ctx) => {
        ctx.set(defaultValueCtx, markdownContent);
      })
      .use(commonmark),
  );

  return <Milkdown />;
}

function PostMarkdown({
  markdownContent,
  isEditable,
  className,
}: PostMarkdownProps & ClassName) {
  return (
    <article
      className={cn("prose max-w-none dark:prose-invert", className, "")}
    >
      <MilkdownProvider>
        <MilkdownEditor
          markdownContent={markdownContent}
          isEditable={isEditable}
        />
      </MilkdownProvider>
    </article>
  );
}

export default PostMarkdown;
