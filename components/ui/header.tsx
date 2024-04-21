"use client";

import Container from "./container";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-changer";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/app/store/auth.store";
import MenuDrawer from "./header-drawer";
import { AccountSettings } from "./account-menu";
import HeaderLinks from "./header-links";

const Header = () => {
  const pathName = usePathname();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <header className="border-b">
      <Container>
        <div className="relative md:flex sm:px-6 lg:px-8 hidden h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold text-primary">TresEvents</h1>
            </Link>
          </div>
          <div className="flex items-center justify-between space-x-2 md:space-x-4">
            <HeaderLinks
              isAuthenticated={isAuthenticated}
              pathName={pathName}
            />
          </div>
          <div className="flex items-center justify-center space-x-4">
            <ModeToggle />
            {isAuthenticated ? (
              <AccountSettings />
            ) : (
              <Link href={"/signin"}>
                <Button className="rounded-xl dark:text-white">Login</Button>
              </Link>
            )}
          </div>
        </div>
        <div className="flex w-full items-center justify-between md:hidden p-4 py-2">
          <Link href="/" className="">
            <h1 className="text-xl font-bold text-primary">TresEvents</h1>
          </Link>
          <div className="space-x-2">
            <ModeToggle />
            <MenuDrawer pathName={pathName} isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
