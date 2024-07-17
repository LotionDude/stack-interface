import AdminPostBadge from "@/components/posts/badges//AdminPostBadge";
import ApprovedPostBadge from "@/components/posts/badges/ApprovedPostBadge";
import AwardedPostBadge from "@/components/posts/badges/AwardedPostBadge";
import OutdatedPostBadge from "@/components/posts/badges/OutdatedPostBadge";
import React from "react";
import GenericPostBadge from "./GenericPostBadge";
import { LucideFileQuestion } from "lucide-react";

const META_TAG_VARIANTS: { [key: string]: React.FC | undefined } = {
  APPROVED: ApprovedPostBadge,
  AWARDED: AwardedPostBadge,
  OUTDATED: OutdatedPostBadge,
  ADMIN: AdminPostBadge,
};

export type PostBadgeVariantType = keyof typeof META_TAG_VARIANTS;

interface VariantPostBadgeProps {
  variant: PostBadgeVariantType;
}

function VariantPostBadge({ variant }: VariantPostBadgeProps) {
  const ComponentToRender = META_TAG_VARIANTS[variant];

  return (
    <>
      {ComponentToRender ? (
        <ComponentToRender />
      ) : (
        <GenericPostBadge
          icon={<LucideFileQuestion className={"icon-size"} />}
          text={`Unknown tag: ${variant}`}
        />
      )}
    </>
  );
}

export default VariantPostBadge;
