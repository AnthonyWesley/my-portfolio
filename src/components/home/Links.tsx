"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import G_Link from "../ui/G_Link";

const links = [
  {
    name: "git",
    url: "https://github.com/AnthonyWesley",
    icon: "simple-icons:github",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/anthony-wesley-915476256/",
    icon: "simple-icons:linkedin",
  },
  {
    name: "curriculum",
    url: "/Curriculum.pdf",
    icon: "streamline:business-user-curriculum-solid",
  },
];
// "simple-icons:github",
// "simple-icons:linkedin",
// "streamline:business-user-curriculum-solid",

export default function Links() {
  return (
    <div className=" my-6 flex cursor-pointer justify-center gap-3">
      {links.map((link, index) => (
        <G_Link
          key={index}
          href={link.url}
          title={`Ir até o ${link.name.toLocaleUpperCase()}`}
          download={true}
          icon={<Icon icon={link.icon} className="text-5xl" />}
        />
      ))}
    </div>
  );
}
