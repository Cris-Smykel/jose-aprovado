export default function LastDays() {
  return (
    <div className="shadow-lg max-w-[19rem] border-b-8 rounded-lg border-primary">
      <div className="p-4 bg-white flex items-center gap-2">
        <i className="icon-stats-bars text-4xl text-primary"></i>

        <h2 className="text-lg text-gray-500 font-bold">Últimos 7 dias</h2>
      </div>

      <div className="overflow-auto bg-gray-100">
        <div className="bg-gray-100 p-4 flex gap-4">
          <div>
            <ol className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <mark className="text-xs text-gray-600 font-medium w-6">
                  1h{" "}
                </mark>
                <mark>-</mark>
              </li>

              <li className="flex items-center gap-2">
                <mark className="text-xs text-gray-600 font-medium w-6">
                  30m
                </mark>
                <mark>-</mark>
              </li>

              <li className="flex items-center gap-2">
                <mark className="text-xs text-gray-600 font-medium w-6">
                  10m
                </mark>
                <mark>-</mark>
              </li>
            </ol>
          </div>

          <div className="flex items-end h-36 gap-2">
            <div className="flex flex-col gap-2">
              <div className="h-10 w-6 bg-primary"></div>
              <mark className="text-xs text-gray-600 font-medium">Seg</mark>
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-20 w-6 bg-primary"></div>
              <mark className="text-xs text-gray-600 font-medium">Ter</mark>
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-16 w-6 bg-primary"></div>
              <mark className="text-xs text-gray-600 font-medium">Qua</mark>
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-28 w-6 bg-primary"></div>
              <mark className="text-xs text-gray-600 font-medium">Qui</mark>
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-4 w-6 bg-primary"></div>
              <mark className="text-xs text-gray-600 font-medium">Sex</mark>
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-12 w-6 bg-primary"></div>
              <mark className="text-xs text-gray-600 font-medium">Sáb</mark>
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-10 w-6 bg-primary"></div>
              <mark className="text-xs text-gray-600 font-medium">Hoje</mark>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
