export default function NewActivity() {
  return (
    <div className="shadow-lg max-w-[30rem] border-b-8 rounded-lg border-primary">
      <div className="p-4 bg-white flex items-center gap-4">
        <i
          className="icon-calendar
         text-4xl text-primary"
        ></i>

        <h2 className="text-lg text-gray-500 font-bold">Atividades recentes</h2>
      </div>

      <div className="bg-gray-100  p-4 flex flex-col gap-4">
        <div className="flex items-end gap-4">
          <h3 className="font-medium text-lg text-gray-700">Hoje</h3>

          <mark className="text-gray-600 font-medium text-xs">
            31 de dezembro de 2023
          </mark>
        </div>

        <div className="overflow-auto bg-white">
          <div className="flex flex-col gap-3 border-b border-gray-400 bg-white p-3">
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-3">
                <mark className="rounded-full w-4 aspect-square bg-primary block"></mark>

                <h3 className="text-base text-gray-600 font-bold">
                  Matemática
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-1 items-center">
                  <i className="icon-alarm text-gray-700 text-sm"></i>
                  <mark className="text-gray-700 font-medium text-sm">
                    16:30
                  </mark>
                </div>

                <div className="flex gap-1 items-center">
                  <i className="icon-stopwatch text-gray-700 text-sm"></i>
                  <mark className="text-gray-700 font-medium text-sm">1h</mark>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
              earum?
            </p>
          </div>

          <div className="flex flex-col gap-3 border-b border-gray-400 bg-white p-3">
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-3">
                <mark className="rounded-full w-4 aspect-square bg-primary block"></mark>

                <h3 className="text-base text-gray-600 font-bold">
                  Matemática
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-1 items-center">
                  <i className="icon-alarm text-gray-700 text-sm"></i>
                  <mark className="text-gray-700 font-medium text-sm">
                    16:30
                  </mark>
                </div>

                <div className="flex gap-1 items-center">
                  <i className="icon-stopwatch text-gray-700 text-sm"></i>
                  <mark className="text-gray-700 font-medium text-sm">1h</mark>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
              earum?
            </p>
          </div>

          <div className="flex flex-col gap-3 border-b border-gray-400 bg-white p-3">
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-3">
                <mark className="rounded-full w-4 aspect-square bg-primary block"></mark>

                <h3 className="text-base text-gray-600 font-bold">
                  Matemática
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-1 items-center">
                  <i className="icon-alarm text-gray-700 text-sm"></i>
                  <mark className="text-gray-700 font-medium text-sm">
                    16:30
                  </mark>
                </div>

                <div className="flex gap-1 items-center">
                  <i className="icon-stopwatch text-gray-700 text-sm"></i>
                  <mark className="text-gray-700 font-medium text-sm">1h</mark>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
              earum?
            </p>
          </div>

          <div className="flex flex-col gap-3 border-b border-gray-400 bg-white p-3">
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-3">
                <mark className="rounded-full w-4 aspect-square bg-primary block"></mark>

                <h3 className="text-base text-gray-600 font-bold">
                  Matemática
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-1 items-center">
                  <i className="icon-alarm text-gray-700 text-sm"></i>
                  <mark className="text-gray-700 font-medium text-sm">
                    16:30
                  </mark>
                </div>

                <div className="flex gap-1 items-center">
                  <i className="icon-stopwatch text-gray-700 text-sm"></i>
                  <mark className="text-gray-700 font-medium text-sm">1h</mark>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
              earum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
