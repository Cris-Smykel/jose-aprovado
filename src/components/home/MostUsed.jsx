export default function MostUsed() {
  return (
    <div className="shadow-lg max-w-[19rem] border-b-8 rounded-lg border-primary">
      <div className="p-4 bg-white flex items-center gap-4">
        <i className="icon-book text-4xl text-primary"></i>

        <h2 className="text-lg text-gray-500 font-bold">
          Matérias mais estudadas
        </h2>
      </div>

      <div className=" bg-gray-100 p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full w-3 aspect-square bg-primary  cursor-pointer"></div>

            <mark className="text-gray-500 font-medium text-sm">Hoje</mark>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full w-3 aspect-square bg-white border-gray-500 border cursor-pointer"></div>

            <mark className="text-gray-500 font-medium text-sm">Semana</mark>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full w-3 aspect-square bg-white border-gray-500 border cursor-pointer"></div>

            <mark className="text-gray-500 font-medium text-sm">Mês</mark>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-3 border-b border-gray-400 bg-white p-3">
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-3">
                <mark className="rounded-full w-3 aspect-square bg-primary block"></mark>

                <h3 className="text-sm text-gray-600 font-medium">
                  Matemática
                </h3>
              </div>

              <div className="flex gap-1 items-center">
                <i className="icon-stopwatch text-gray-700 text-xs"></i>
                <mark className="text-gray-700 font-medium text-xs">1h</mark>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-b border-gray-400 bg-white p-3">
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-3">
                <mark className="rounded-full w-3 aspect-square bg-primary block"></mark>

                <h3 className="text-sm text-gray-600 font-medium">
                  Matemática
                </h3>
              </div>

              <div className="flex gap-1 items-center">
                <i className="icon-stopwatch text-gray-700 text-xs"></i>
                <mark className="text-gray-700 font-medium text-xs">1h</mark>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-b border-gray-400 bg-white p-3">
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-3">
                <mark className="rounded-full w-3 aspect-square bg-primary block"></mark>

                <h3 className="text-sm text-gray-600 font-medium">
                  Matemática
                </h3>
              </div>

              <div className="flex gap-1 items-center">
                <i className="icon-stopwatch text-gray-700 text-xs"></i>
                <mark className="text-gray-700 font-medium text-xs">1h</mark>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-b border-gray-400 bg-white p-3">
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-3">
                <mark className="rounded-full w-3 aspect-square bg-primary block"></mark>

                <h3 className="text-sm text-gray-600 font-medium">
                  Matemática
                </h3>
              </div>

              <div className="flex gap-1 items-center">
                <i className="icon-stopwatch text-gray-700 text-xs"></i>
                <mark className="text-gray-700 font-medium text-xs">1h</mark>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-b border-gray-400 bg-white p-3">
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-3">
                <mark className="rounded-full w-3 aspect-square bg-primary block"></mark>

                <h3 className="text-sm text-gray-600 font-medium">
                  Matemática
                </h3>
              </div>

              <div className="flex gap-1 items-center">
                <i className="icon-stopwatch text-gray-700 text-xs"></i>
                <mark className="text-gray-700 font-medium text-xs">1h</mark>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
