import { Separator } from "@/components/shade/separator";
import { cn } from "@/lib/utils";
import { ClassName, Overridable } from "@/types/overridable";

function PageLayoutSeparator({ className }: ClassName) {
  return (
    <Separator
      orientation="horizontal"
      className={cn("transition-colors", className)}
    />
  );
}

function PageLayoutTitle({ children, className }: Overridable) {
  return <div className={cn("text-2xl", className)}>{children}</div>;
}

function PageLayoutContent({ children, className }: Overridable) {
  return <div className={cn("text-base", className)}>{children}</div>;
}

function PageLayout({ children, className }: Overridable) {
  return (
    <div
      className={cn(
        "container flex w-full flex-col gap-1 transition-all 2xl:w-3/5",
        className,
      )}
    >
      {children}
    </div>
  );
}

export {
  PageLayout,
  PageLayoutContent,
  PageLayoutTitle,
  PageLayoutSeparator as PageLayoutSeparator,
};
