import { cn } from "@/lib/utils";
import { ClassName, Overridable } from "@/types/overridable";
import { Button } from "@/components/shade/button";
import { Input } from "@/components/shade/input";
import { Label } from "@/components/shade/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shade/sheet";

function AnnouncementEditor({ className, children }: Overridable) {
  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger className={"cursor-pointer"} asChild>
          {children}
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit announcement</SheetTitle>
            <SheetDescription>
              Make changes to the announcement here. Click save when you're
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Message
              </Label>
              <Input
                id="name"
                value="Website official release 🎊"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default AnnouncementEditor;
