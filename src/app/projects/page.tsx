"use client";

import Description from "@/components/projects/Description";
import G_Link from "@/components/ui/G_Link";
import Tech from "@/components/projects/Tech";

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { Applications } from "@/data/Applications";

export default function page() {
  return (
    <>
      {Applications.map((app, index) => (
        <section
          key={index}
          className="shadow-basic mb-4 items-center p-4 lg:my-4 lg:flex"
        >
          <div className="">
            <Image src={app.image} alt="" className="shadow-sm" />
          </div>
          <div className="grid items-start justify-start lg:grid-cols-2 ">
            <div className="flex flex-col lg:col-span-2 lg:p-4">
              <Description app={app} />
              <G_Link
                href={app.url}
                text="Acessar App"
                title="Acessar App"
                icon={
                  <Icon icon="ooui:link-external-ltr" className="text-2xl" />
                }
                className="my-2 w-full self-end bg-zinc-200 p-2 dark:bg-zinc-900 lg:w-1/3"
              />
            </div>
            {app.technologies.map((tech, index) => (
              <div
                key={index}
                className="flex w-full items-center justify-between border-b-2 lg:border-b-0 lg:border-r-2 lg:px-4"
              >
                <Tech
                  name={tech.type}
                  tech={tech.stack}
                  url={tech.repositoryUrl}
                />
              </div>
            ))}

            {/* <hr className="opacity-90 dark:opacity-20" /> */}
          </div>
        </section>
      ))}
    </>
  );
}
