import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import G_Link from "../ui/G_Link";

type TechProps = {
  tech: string[];
  name: string;
  url: string;
};
export default function Tech({ tech, name, url }: TechProps) {
  return (
    <div className="my-2 flex flex-col items-start justify-center gap-1 text-sm">
      <div className="flex w-full items-center justify-between text-base font-bold">
        {name}{" "}
        <G_Link
          href={url}
          title="Ir até o repositório..."
          icon={<Icon icon="simple-icons:github" className="text-4xl" />}
        />
      </div>{" "}
      <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4 md:justify-between lg:grid-cols-2 ">
        {tech.map((item: any, index) => (
          <div key={index} className="flex w-56 items-center gap-2 rounded-sm">
            <Icon icon="eos-icons:rotating-gear" /> {item}
          </div>
        ))}
      </div>
    </div>
  );
}
