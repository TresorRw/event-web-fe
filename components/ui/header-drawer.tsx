import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./button";
import Link from "next/link";
import { AccountSettings } from "./account-menu";
import HeaderLinks from "./header-links";

const MenuDrawer = ({
  pathName,
  isAuthenticated,
}: {
  pathName: string;
  isAuthenticated: boolean;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[320px]">
        <SheetHeader>
          <SheetTitle asChild>
            <h1 className="text-xl text-left font-bold text-primary">
              TresEvents
            </h1>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-5 space-y-2 flex flex-col">
          <HeaderLinks isAuthenticated={isAuthenticated} pathName={pathName} />
          {isAuthenticated ? (
            <AccountSettings />
          ) : (
            <Link href={"/signin"}>
              <Button className="rounded dark:text-white mt-5">Login</Button>
            </Link>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuDrawer;
