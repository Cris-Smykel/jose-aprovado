import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { sendRequest } from "../../util/util";

export default function SubjectsHero() {
  const [subjectsData, setSubjectsData] = useState(() => []);

  useEffect(() => {
    getSubjectsData(setSubjectsData);
  }, []);

  const subjectsContents = subjectsData.map((subject) => {
    let hours = Math.floor(subject.timeSpentOn / 3600);
    let minutes = Math.floor((subject.timeSpentOn % 3600) / 60);

    const timeSpentOn = `${hours}h ${minutes}m`;

    return (
      <SubjectsContent
        key={subject.id}
        name={subject.name}
        timeSpentOn={timeSpentOn}
      />
    );
  });

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
              {subjectsContents}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubjectsContent(props) {
  return (
    <li className="pr-4 pl-4">
      <div className="flex justify-between overflow-auto gap-2 items-center p-2 pt-4 pb-4 border-b border-[rgba(0,0,0,0.2)]">
        <div className="flex items-center gap-2">
          <div className="w-4 aspect-square rounded-full bg-primary"></div>
          <h2 className="text-lg font-bold text-gray-500"> {props.name} </h2>
        </div>

        <div className="flex items-center gap-1">
          <i className="icon-stopwatch text-gray-600 text-sm"></i>
          <mark className="text-gray-600 font-medium text-sm">
            {props.timeSpentOn}
          </mark>
        </div>
      </div>
    </li>
  );
}

async function getSubjectsData(setSubjectsData) {
  const requestData = {
    method: "GET",
    path: "/api/v1/subjects",
  };

  try {
    const subjectsResponse = await sendRequest(requestData);

    if (!subjectsResponse.success) {
      console.error("There was a server error");
      return;
    }

    setSubjectsData(() => subjectsResponse.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
