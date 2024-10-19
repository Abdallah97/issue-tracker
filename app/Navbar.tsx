"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Links = [
  { name: "Dashboard", path: "/" },
  { name: "Issues", path: "/issues" },
];

function Navbar() {
  const currentPath = usePathname();
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center ">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {Links.map((link) => (
          <li
            className={classNames({
              "text-blue-500": currentPath === link.path,
              "text-black": currentPath !== link.path,
              "hover:text-blue-700": true,
            })}
            key={link.path}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
