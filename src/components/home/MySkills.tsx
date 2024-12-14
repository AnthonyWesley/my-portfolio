"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const skills = [
  // Front-end
  { icon: "skill-icons:html", title: "HTML" },
  { icon: "skill-icons:css", title: "CSS" },
  { icon: "skill-icons:javascript", title: "JavaScript" },
  { icon: "skill-icons:typescript", title: "TypeScript" },
  { icon: "skill-icons:react-dark", title: "React" },
  { icon: "skill-icons:nextjs-dark", title: "Next.js" },
  { icon: "skill-icons:tailwindcss-dark", title: "Tailwind CSS" },
  { icon: "skill-icons:styledcomponents", title: "Styled Components" },
  { icon: "simple-icons:react-router", title: "React Router" },
  { icon: "simple-icons:zustand", title: "Zustand" },
  { icon: "simple-icons:apexcharts", title: "ApexCharts" },
  { icon: "simple-icons:react-toastify", title: "React Toastify" },
  { icon: "simple-icons:date-fns", title: "date-fns" },

  // Back-end
  { icon: "skill-icons:nodejs-dark", title: "Node.js" },
  { icon: "skill-icons:expressjs-dark", title: "Express.js" },
  { icon: "simple-icons:fastify", title: "Fastify" },
  { icon: "skill-icons:postgresql-dark", title: "PostgreSQL" },
  { icon: "skill-icons:mongodb", title: "MongoDB" },
  { icon: "skill-icons:prisma", title: "Prisma" },
  { icon: "skill-icons:sequelize-dark", title: "Sequelize" },
  { icon: "simple-icons:jwt", title: "JWT (Json Web Token)" },
  { icon: "simple-icons:bcrypt", title: "BcryptJS" },
  { icon: "simple-icons:ulid", title: "ULID" },
  { icon: "simple-icons:dotenv", title: "Dotenv" },

  // Ferramentas e utilitários
  { icon: "simple-icons:axios", title: "Axios" },
  { icon: "skill-icons:git", title: "Git" },
  { icon: "skill-icons:cs", title: "C#" },
];

export default function MySkills() {
  return (
    <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="col-span-2 my-1 flex items-center justify-between text-lg opacity-50 md:col-span-3 lg:col-span-4 lg:text-2xl">
        <h1 className="w-32 font-extrabold">MY SKILLS</h1>
        <span className="mr-1 flex w-10/12 border-b border-zinc-800 dark:border-zinc-50"></span>
      </div>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="my-1 mr-1 flex items-center justify-center gap-1 rounded-sm border py-4 text-xs"
        >
          <div>{skill.title}</div>
          {/* <div className="text-xl">
            <Icon icon={skill.icon} />
          </div> */}
        </div>
      ))}
      <div className="col-span-2 flex items-center justify-between text-4xl opacity-50 md:col-span-3 lg:col-span-4">
        <span className="mr-1 flex w-full border-b border-zinc-800 dark:border-zinc-50"></span>
        <Icon icon="eos-icons:rotating-gear" />
      </div>
    </div>
  );
}
