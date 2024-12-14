import porkyGoals from "@/assets/expense-images/expense-responsive.png";
import dailyGoals from "@/assets/expense-images/daily-goals-responsive.png";

import { ApplicationType } from "./ApplicationType";

export const Applications: ApplicationType[] = [
  {
    title: "Porky Goals",
    description:
      "Aplicação projetada para ajudar os usuários a monitorar e gerenciar seus gastos financeiros. Ele permite que os usuários registrem suas despesas diárias, categorizem-nas e analisem seus padrões de gastos ao longo do tempo.",
    technologies: [
      {
        type: "Frontend",
        repositoryUrl: "https://github.com/AnthonyWesley/expense-tracker",
        stack: [
          "React",
          "Vite",
          "TypeScript",
          "TailwindCSS",
          "ApexCharts",
          "React-To-Print",
          "Axios",
          "Zustand",
          "React-Router-Dom",
        ],
      },
      {
        type: "Backend",
        repositoryUrl: "https://github.com/AnthonyWesley/expense-tracker-api",
        stack: [
          "Node.js",
          "Express",
          "PostgreSQL",
          "Prisma",
          "BcryptJS",
          "ULID",
          "JWT (Json Web Token)",
        ],
      },
    ],
    image: porkyGoals,
    url: "https://expense-tracker-by-awl.netlify.app/",
  },
  {
    title: "Gerenciador de Metas",
    description:
      "Uma aplicação intuitiva e eficiente para auxiliar usuários a definir, acompanhar e alcançar seus objetivos pessoais e profissionais. Permite criar metas detalhadas, monitorar o progresso e otimizar o planejamento para uma execução mais organizada e motivadora.",
    technologies: [
      {
        type: "Frontend",
        repositoryUrl: "https://github.com/AnthonyWesley/daily-goals",
        stack: [
          "React",
          "Vite",
          "TailwindCSS",
          "date-fns",
          "React Toastify",
          "Axios",
        ],
      },
      {
        type: "Backend",
        repositoryUrl: "https://github.com/AnthonyWesley/daily-goals-api",
        stack: ["Node.js", "Express", "PostgreSQL", "Prisma", "ULID"],
      },
    ],
    image: dailyGoals,
    url: "https://bucolic-belekoy-f1f67a.netlify.app/",
  },
];
