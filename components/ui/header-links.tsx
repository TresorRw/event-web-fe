import { headerLinks } from "@/lib";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

const HeaderLinks = ({
  isAuthenticated,
  pathName,
}: {
  isAuthenticated: boolean;
  pathName: string;
}) => {
  return (
    <>
      {headerLinks.map((link) => (
        <Link
          key={link.href}
          className={classNames({
            "text-primary": pathName === link.href,
          })}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
      {isAuthenticated ? (
        <Link
          className={classNames({
            "text-primary": pathName === "/my-tickets",
          })}
          href={"/my-tickets"}
        >
          My Tickets
        </Link>
      ) : (
        <Link
          className={classNames({
            "text-primary": pathName === "/contact",
          })}
          href={"/contact"}
        >
          Contact
        </Link>
      )}
    </>
  );
};

export default HeaderLinks;
