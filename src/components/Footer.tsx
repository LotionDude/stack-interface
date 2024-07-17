import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";

function Footer({ className }: ClassName) {
  return (
    <div
      className={cn(
        "mt-10 flex h-12 items-center justify-between bg-zinc-100/70 px-12 font-extralight text-zinc-400 transition-colors dark:bg-zinc-900/35 dark:text-zinc-600",
        className,
      )}
    >
      <div>Developed by lotion_dude</div>
      <div>Build 0.0.1</div>
    </div>
  );
}

export default Footer;
