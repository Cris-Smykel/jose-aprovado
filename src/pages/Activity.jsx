import Header from "../components/Header";
import NewActivity from "../components/home/NewActivity";
import Calendar from "../components/activities/Calendar";

export default function Activity() {
  return (
    <div>
      <Header />

      <main>
        <section>
          <div className="flex max-w-6xl m-auto flex-col gap-10 items-center p-4 pt-10 pb-10 lg:flex-row lg:items-start lg:gap-6">
            <NewActivity />

            <Calendar />
          </div>
        </section>
      </main>
    </div>
  );
}
