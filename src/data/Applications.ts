import responsiveApp from "@/assets/expense-images/expense-responsive.png";

import { ApplicationType } from "./ApplicationType";

export const Applications: ApplicationType[] = [
  {
    title: "Expense Tracker",
    description:
      "Aplicação projetada para ajudar os usuários a monitorar e gerenciar seus gastos financeiros. Ele permite que os usuários registrem suas despesas diárias, categorizem-nas e analisem seus padrões de gastos ao longo do tempo.",
    technologies: [
      {
        type: "Frontend",
        repositoryUrl: "https://github.com/AnthonyWesley/expense-tracker",
        technologiesUsed: ["React", "TypeScript", "Tailwind CSS", "Axios"],
      },
      {
        type: "Backend",
        repositoryUrl: "https://github.com/AnthonyWesley/expense-tracker-api",
        technologiesUsed: ["Node", "PostgreSQL", "Express", "Sequelize"],
      },
    ],
    image: responsiveApp,
    url: "https://expense-tracker-by-awl.netlify.app/",
  },
];
