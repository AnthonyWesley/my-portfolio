import { ApplicationType } from "@/data/ApplicationType";

export default function Description({ app }: { app: ApplicationType }) {
  return (
    <div>
      <h1 className="text-xl font-semibold">{app.title}</h1>
      <h2 className="my-2">{app.description}</h2>
    </div>
  );
}
