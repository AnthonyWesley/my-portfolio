import { StaticImageData } from "next/image";

type TechnologiesType = {
  type: string;
  repositoryUrl: string;
  stack: string[];
};

export type ApplicationType = {
  title: string;
  description: string;
  technologies: TechnologiesType[];
  image: StaticImageData;
  url: string;
};
