import LastDays from "./LastDays";
import NewActivity from "./NewActivity";
import MostUsed from "./MostUsed";

export default function Hero() {
  return (
    <section className="pt-10 pb-10">
      <div className="p-4 max-w-5xl m-auto flex flex-col items-center gap-10 md:flex-row md:justify-center">
        <div className="flex flex-col gap-10">
          <LastDays />

          <MostUsed />
        </div>

        <NewActivity />
      </div>
    </section>
  );
}
