export default function NewActivity() {
  const activitiesData = getActivitiesData();

  const activitiesElement = activitiesData.map((activity) => {
    return (
      <Activity
        key={activity.id}
        subject={activity.subject}
        timeSpent={activity.timeSpent}
        datetime={activity.datetime}
        message={activity.message}
      />
    );
  });

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

        <div className="overflow-auto bg-white">{activitiesElement}</div>
      </div>
    </div>
  );
}

function Activity(props) {
  return (
    <div className="flex flex-col gap-3 border-b border-gray-400 bg-white p-3">
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-3">
          <mark className="rounded-full w-4 aspect-square bg-primary block"></mark>

          <h3 className="text-base text-gray-600 font-bold">{props.subject}</h3>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-1 items-center">
            <i className="icon-alarm text-gray-700 text-sm"></i>
            <mark className="text-gray-700 font-medium text-sm">
              {props.datetime}
            </mark>
          </div>

          <div className="flex gap-1 items-center">
            <i className="icon-stopwatch text-gray-700 text-sm"></i>
            <mark className="text-gray-700 font-medium text-sm">
              {props.timeSpent}
            </mark>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 font-medium">{props.message}</p>
    </div>
  );
}

function getActivitiesData() {
  return [
    {
      id: 1,
      subject: "Matemática",
      datetime: "16:50",
      timeSpent: "50m",
      message:
        "This is my message, This is my message This is my message This is my message",
    },
    {
      id: 2,
      subject: "Português",
      datetime: "12:50",
      timeSpent: "50m",
      message: "This is my message, This is my message, This is my message",
    },
    {
      id: 3,
      subject: "Inglês",
      datetime: "11:50",
      timeSpent: "50m",
      message: "This is my message, This is my message",
    },
    {
      id: 4,
      subject: "Química",
      datetime: "18:20",
      timeSpent: "50m",
      message: "This is my message",
    },
    {
      id: 5,
      subject: "Física",
      datetime: "10:10",
      timeSpent: "50m",
      message:
        "This is my message, This is my message This is my message This is my message",
    },
  ];
}
