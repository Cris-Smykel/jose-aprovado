import { Link } from "react-router-dom";

export default function SubjectsHero() {
  return (
    <section className="p-3 pt-10 pb-10">
      <div className="m-auto max-w-6xl">
        <div className="bg-white p-3 pt-6 pb-6 flex flex-col gap-8 lg:p-7 lg:rounded-lg lg:shadow-lg">
          <Link to={"/materias/criar-materia"}>
            <button
              type="button"
              className="p-4 w-fit pr-10 pl-10 text-base text-white bg-primary rounded-lg border font-normal cursor-pointer border-[rgba(0,0,0,0.1)]"
            >
              Cadastrar nova matéria
            </button>
          </Link>

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl text-gray-700 font-bold">Matérias</h1>

            <ol className="pt-4 pb-4 flex flex-col border-t border-[rgba(0,0,0,0.2)]">
              <li className="pr-4 pl-4">
                <div className="flex justify-between overflow-auto gap-2 items-center p-2 pt-4 pb-4 border-b border-[rgba(0,0,0,0.2)]">
                  <div className="flex items-center gap-2">
                    <div className="w-4 aspect-square rounded-full bg-primary"></div>
                    <h2 className="text-lg font-bold text-gray-500">
                      Matemática
                    </h2>
                  </div>

                  <div className="flex items-center gap-1">
                    <i className="icon-stopwatch text-gray-600 text-sm"></i>
                    <mark className="text-gray-600 font-medium text-sm">
                      1h 50m
                    </mark>
                  </div>
                </div>
              </li>

              <li className="pr-4 pl-4">
                <div className="flex justify-between overflow-auto gap-2 items-center p-2 pt-4 pb-4 border-b border-[rgba(0,0,0,0.2)]">
                  <div className="flex items-center gap-2">
                    <div className="w-4 aspect-square rounded-full bg-primary"></div>
                    <h2 className="text-lg font-bold text-gray-500">
                      Matemática
                    </h2>
                  </div>

                  <div className="flex items-center gap-1">
                    <i className="icon-stopwatch text-gray-600 text-sm"></i>
                    <mark className="text-gray-600 font-medium text-sm">
                      1h 50m
                    </mark>
                  </div>
                </div>
              </li>
              <li className="pr-4 pl-4">
                <div className="flex justify-between overflow-auto gap-2 items-center p-2 pt-4 pb-4 border-b border-[rgba(0,0,0,0.2)]">
                  <div className="flex items-center gap-2">
                    <div className="w-4 aspect-square rounded-full bg-primary"></div>
                    <h2 className="text-lg font-bold text-gray-500">
                      Matemática
                    </h2>
                  </div>

                  <div className="flex items-center gap-1">
                    <i className="icon-stopwatch text-gray-600 text-sm"></i>
                    <mark className="text-gray-600 font-medium text-sm">
                      1h 50m
                    </mark>
                  </div>
                </div>
              </li>
              <li className="pr-4 pl-4">
                <div className="flex justify-between overflow-auto gap-2 items-center p-2 pt-4 pb-4 border-b border-[rgba(0,0,0,0.2)]">
                  <div className="flex items-center gap-2">
                    <div className="w-4 aspect-square rounded-full bg-primary"></div>
                    <h2 className="text-lg font-bold text-gray-500">
                      Matemática
                    </h2>
                  </div>

                  <div className="flex items-center gap-1">
                    <i className="icon-stopwatch text-gray-600 text-sm"></i>
                    <mark className="text-gray-600 font-medium text-sm">
                      1h 50m
                    </mark>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
