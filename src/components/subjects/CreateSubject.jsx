import { Link } from "react-router-dom";
import { useState } from "react";

export default function CreateSubject() {
  const [subjectFormValues, setSubjectFormValues] = useState(() => {
    return {
      subject: "",
    };
  });

  return (
    <section className="p-4 pt-10 pb-10">
      <div className="max-w-5xl m-auto">
        <div className="bg-white p-8 pt-10 pb-10 rounded-lg shadow-lg flex flex-col gap-6">
          <article className="pb-5 border-b border-b-[rgba(0,0,0,0.2)] flex flex-col gap-6">
            <Link
              to={"/materias"}
              className="w-36 p-2 bg-secondary text-white text-center rounded-lg cursor-pointer font-medium text-base hover:bg-green-400 transition-all duration-200"
            >
              Voltar
            </Link>

            <h1 className="text-2xl text-gray-600 font-bold">
              Cadastrar matéria
            </h1>
          </article>

          <form onSubmit={(event) => handleSubmit(event, subjectFormValues)}>
            <div className="flex flex-col gap-2 max-w-96">
              <input
                onChange={(event) =>
                  getSubjectFormValues(event, setSubjectFormValues)
                }
                value={subjectFormValues.subject}
                name="subject"
                className="p-3 border border-[rgba(0,0,0,0.2)] rounded-lg font-normal text-base text-gray-600"
                placeholder="Nome da matéria"
              />

              <button
                className="p-2 mt-2 w-36 rounded-lg bg-primary text-white text-base hover:bg-blue-500 transition-all duration-200"
                type="submit"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function handleSubmit(event, subjectFormValues) {
  event.preventDefault();
}

function getSubjectFormValues(event, setSubjectFormValues) {
  const target = event.target;

  setSubjectFormValues((prevSubjectFormValues) => {
    return { ...prevSubjectFormValues, [target.name]: target.value };
  });
}
