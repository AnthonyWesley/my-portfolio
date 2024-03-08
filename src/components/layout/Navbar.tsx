"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "../ui/Logo";
// import { Icon } from "@iconify/react/dist/iconify.js";
const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/projects",
    text: "Projects",
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 font-semibold md:text-sm lg:flex-row-reverse lg:text-lg">
      <ThemeToggle />

      <div className={`hidden gap-4 sm:flex lg:flex`}>
        {links.map((link) => (
          <Link
            key={link.text}
            href={link.href}
            className={`cursor-pointer  ${pathname == link.href ? "border-b-[3px] border-zinc-900 dark:border-zinc-50" : "effect-underline "} `}
          >
            {link.text}
          </Link>
        ))}
      </div>

      <div className={`flex w-full justify-end sm:hidden lg:hidden`}>
        <button
          className={`block focus:outline-none lg:hidden`}
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }  fixed left-0 top-0 z-50 flex h-screen w-64 flex-col items-center justify-start gap-7 bg-zinc-900 px-8 py-4 transition-transform duration-300 ease-in-out lg:translate-x-0`}
        >
          {links.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className={`effect-underline relative cursor-pointer ${
                pathname == link.href
                  ? "border-b text-zinc-50 "
                  : "text-zinc-600 hover:text-zinc-50"
              } `}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
