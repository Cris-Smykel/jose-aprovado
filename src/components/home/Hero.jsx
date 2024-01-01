import LastDays from "./LastDays";
import NewActivity from "./NewActivity";

export default function Hero() {
  return (
    <section className="pt-10">
      <div className="p-4 max-w-6xl m-auto flex flex-col gap-10">
        <LastDays />

        <NewActivity />
      </div>
    </section>
  );
}
