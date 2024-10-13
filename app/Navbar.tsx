import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Links = [
  { name: "Dashboard", path: "/" },
  { name: "Issues", path: "/issues" },
];

function Navbar() {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center ">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {Links.map((link) => (
          <li
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            key={link.path}
          >
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
