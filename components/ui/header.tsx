"use client";

import Container from "./container";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-changer";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/app/store/auth.store";

const Header = () => {
  const pathName = usePathname();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <header className="border-b">
      <Container>
        <div className="relative sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold text-primary">TresEvents</h1>
            </Link>
          </div>
          <div className="flex items-center justify-between space-x-2 md:space-x-4">
            <Link
              className={classNames({
                "text-primary": pathName === "/events",
              })}
              href={"/events"}
            >
              Events
            </Link>
            <Link
              className={classNames({
                "text-primary": pathName === "/discover",
              })}
              href={"/discover"}
            >
              Discover
            </Link>
            <Link
              className={classNames({
                "text-primary": pathName === "/contact",
              })}
              href={"/contact"}
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <ModeToggle />
            {isAuthenticated ? (
              <Link href="/in/profile">
                <Button className="rounded-xl dark:text-white">Profile</Button>
              </Link>
            ) : (
              <Link href={"/signin"}>
                <Button className="rounded-xl dark:text-white">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
