export default function LastDays() {
  const times = getTimesData();

  const timesElement = times.map((time) => {
    return <Times time={time.time} key={time.id} />;
  });

  const staticsData = getStaticsData();

  const staticElemets = staticsData.map((staticData) => {
    return (
      <Statics
        height={staticData.height}
        day={staticData.day}
        key={staticData.id}
      />
    );
  });

  return (
    <div className="shadow-lg max-w-[19rem] border-b-8 rounded-lg border-primary">
      <div className="p-4 bg-white flex items-center gap-2">
        <i className="icon-stats-bars text-4xl text-primary"></i>

        <h2 className="text-lg text-gray-500 font-bold">Últimos 7 dias</h2>
      </div>

      <div className="overflow-auto bg-gray-100">
        <div className="bg-gray-100 p-4 flex gap-4">
          <div>
            <ol className="flex flex-col gap-4">{timesElement}</ol>
          </div>

          <div className="flex items-end h-36 gap-2">{staticElemets}</div>
        </div>
      </div>
    </div>
  );
}

function Times(props) {
  return (
    <li className="flex items-center gap-2">
      <mark className="text-xs text-gray-600 font-medium w-6">
        {props.time}
      </mark>
      <mark>-</mark>
    </li>
  );
}

function getTimesData() {
  return [
    {
      id: 1,
      time: "1h",
    },
    {
      id: 2,
      time: "30m",
    },
    {
      id: 3,
      time: "10m",
    },
  ];
}

function Statics(props) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`${props.height} w-6 bg-primary`}></div>
      <mark className="text-xs text-gray-600 font-medium">{props.day}</mark>
    </div>
  );
}

function getStaticsData() {
  return [
    {
      id: 1,
      height: "h-5",
      day: "seg",
    },
    {
      id: 2,
      height: "h-10",
      day: "ter",
    },
    {
      id: 3,
      height: "h-3",
      day: "qua",
    },
    {
      id: 4,
      height: "h-16",
      day: "qui",
    },
    {
      id: 5,
      height: "h-24",
      day: "sex",
    },
    {
      id: 6,
      height: "h-6",
      day: "sab",
    },
    {
      id: 7,
      height: "h-12",
      day: "hoje",
    },
  ];
}
