import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/shade/navigation-menu";

import { Input } from "@/components/shade/input";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

interface NavPage {
  link: string;
  name: string;
}

function Navbar({ className }: ClassName) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <NavigationMenu>
        <NavigationMenuList>
          <Link to="/">
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
              Main
            </NavigationMenuItem>
          </Link>
          <Link to="/posts">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
              <NavigationMenuContent className={"p-2"}>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </Link>
          <Link to="/tags">
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
              Tags
            </NavigationMenuItem>
          </Link>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList className={"flex-row-reverse gap-2"}>
          <NavigationMenuItem
            className={cn(
              "cursor-pointer underline",
              navigationMenuTriggerStyle(),
            )}
          >
            <NavigationMenuLink>Login</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ThemeToggle />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Input
              className={cn(navigationMenuTriggerStyle(), "h-8 w-80")}
              placeholder={"How to configure my docker"}
            ></Input>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
