import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";
import { LucideMoon, LucideSun } from "lucide-react";

function ThemeToggle({ className }: ClassName) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className={cn(
        "relative ml-8 flex cursor-pointer items-center justify-between ",
        className,
      )}
    >
      <LucideMoon
        className={"absolute right-0 my-auto opacity-100 dark:opacity-0"}
      />
      <LucideSun
        className={"absolute right-0 my-auto opacity-0 dark:opacity-100"}
      />
    </div>
  );
}

export default ThemeToggle;
