import { PostBadgeVariantType } from "@/components/posts/badges/VariantPostBadge";

interface Post {
  id: string;
  title: string;
  plainContent: string;
  markdownContent: string;
  author: string;
  date: string;
  type: PostType;
  tags?: string[];
  metaTags?: PostBadgeVariantType[];
  authorSrc?: string;
}

type PostType = "GUIDANCE" | "QUESTION" | "ANNOUNCE";

export type { Post, PostType };
