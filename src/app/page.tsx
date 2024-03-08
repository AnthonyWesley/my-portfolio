import Links from "@/components/home/Links";
import MySkills from "@/components/home/MySkills";
import PersonalIntroduction from "@/components/home/PersonalIntroduction";

export default function Home() {
  return (
    <div className="my-2 p-2 md:my-6 lg:my-4 lg:p-4 lg:text-lg">
      <PersonalIntroduction />

      <Links />
      <MySkills />
    </div>
  );
}
