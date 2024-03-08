"use client";

export default function page() {
  return (
    <section className="m-auto flex w-11/12 flex-col items-center justify-start gap-4 p-4 md:my-8 lg:my-20 lg:w-full lg:flex-row">
      <h1 className="w-full text-xl font-extrabold md:text-3xl">
        Um pouco sobre mim...
      </h1>
      <div className="h-1 w-full bg-gray-500 lg:h-72 lg:w-1"></div>
      <h2 className="text-sm md:text-xl lg:text-lg">
        Olá! Sou um entusiasta de tecnologia apaixonado por desenvolvimento web.
        Nos últimos dois anos, tenho mergulhado de cabeça no mundo da
        programação, dedicando-me especialmente ao desenvolvimento front-end.
        Aprendi <strong className="font-semibold">HTML</strong>,
        <strong className="font-semibold">CSS</strong> e
        <strong className="font-semibold"> JavaScript</strong>, e desde então
        tenho buscado constantemente aprimorar minhas habilidades em
        <strong className="font-semibold"> React</strong>, explorando as últimas
        tendências e melhores práticas em design e desenvolvimento front-end,
        principalmete com <strong className="font-semibold">NextJs</strong>.
        Também comecei a explorar o mundo do desenvolvimento back-end, me
        dedicado ao estudo de linguagens e frameworks como
        <strong className="font-semibold">Node.js</strong> e
        <strong className="font-semibold"> C#</strong>, buscando entender
        profundamente os princípios fundamentais por trás de cada tecnologia.
      </h2>
    </section>
  );
}
