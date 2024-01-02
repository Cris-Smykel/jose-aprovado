import { useState } from "react";

export default function Calendar() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [calendarData, setCalendarDate] = useState(() => {
    return getCalendarData(currentYear, currentMonth);
  });

  let calendarSquares = 35;
  const calendarRows = [];
  let days = [];
  let weekDay = 0;
  const startMonthSquare = calendarData.days[0].dayOfWeek + 1;
  const endMonthSquare = calendarData.days[calendarData.days.length - 1].day;

  const friday = 6;

  if (startMonthSquare >= friday && endMonthSquare > 30) {
    calendarSquares = 42;
  }

  let day = 1;

  for (let square = 1; square <= calendarSquares; square++) {
    weekDay++;

    if (square >= startMonthSquare && day <= endMonthSquare) {
      days.push(<Day key={square} day={day} />);
      day++;
    } else {
      days.push(<NoDay key={square} />);
    }

    if (square % 7 === 0) {
      calendarRows.push(<Days key={square} days={days} />);
      days = [];
      weekDay = 0;
    }
  }

  return (
    <div className="p-4 bg-white w-full flex flex-col gap-4">
      <div className="flex gap-4 items-center justify-between">
        <button
          type="button"
          onClick={() => handleChangeDateClick(setCalendarDate, "less")}
          className="p-2 w-full max-w-20 pr-4 pl-4 text-base font-bold text-gray-600 border rounded-lg border-[rgb(0,0,0,0.1)]"
        >
          ←
        </button>

        <h1 className="text-2xl font-bold text-gray-600 text-center">
          {getMonth(calendarData.month)} de {calendarData.year}
        </h1>

        <button
          type="button"
          onClick={() => handleChangeDateClick(setCalendarDate, "plus")}
          className="p-2 w-full max-w-20 pr-4 pl-4 text-base font-bold text-gray-600 border rounded-lg border-[rgb(0,0,0,0.1)]"
        >
          →
        </button>
      </div>

      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="font-bold text-base text-gray-500">
              <th className="text-left">Dom</th>
              <th className="text-left">Seg</th>
              <th className="text-left">Ter</th>
              <th className="text-left">Qua</th>
              <th className="text-left">Qui</th>
              <th className="text-left">Sex</th>
              <th className="text-left">Sab</th>
            </tr>
          </thead>

          <tbody>{calendarRows}</tbody>
        </table>
      </div>
    </div>
  );
}

function Days(props) {
  return <tr>{props.days}</tr>;
}

function Day(props) {
  return (
    <td>
      <div className="h-28 bg-gray-100 border border-gray-300 p-4 flex flex-col gap-2 justify-between">
        <mark className="font-bold text-gray-500 text-sm">{props.day}</mark>

        <div className="text-xs w-fit text-primary flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <i className="icon-book "> </i>
            <mark className="font-medium text-gray-500">2 ativ.</mark>
          </div>
          <div className="flex items-center gap-1">
            <i className="icon-stopwatch"> </i>
            <mark className="font-medium text-gray-500">2h50m</mark>
          </div>
        </div>
      </div>
    </td>
  );
}

function NoDay() {
  return (
    <td>
      <div className="h-28 bg-gray-100 border border-gray-300 p-4 flex flex-col gap-2 justify-between"></div>
    </td>
  );
}

function getMonth(month) {
  if (month === 1) {
    return "Janeiro";
  }

  if (month === 2) {
    return "Fevereiro";
  }
  if (month === 3) {
    return "Março";
  }

  if (month === 4) {
    return "Abril";
  }

  if (month === 5) {
    return "Maio";
  }

  if (month === 6) {
    return "Junho";
  }
  if (month === 7) {
    return "Julho";
  }

  if (month === 8) {
    return "Agosto";
  }

  if (month === 9) {
    return "Setembro";
  }

  if (month === 10) {
    return "Outubro";
  }

  if (month === 11) {
    return "Novembro";
  }

  if (month === 12) {
    return "Dezembro";
  }

  return "Month error";
}

function handleChangeDateClick(setCalendarDate, operation) {
  setCalendarDate((prevCalendarData) => {
    let newYear = prevCalendarData.year;

    if (operation === "less") {
      let newMonth = prevCalendarData.month - 1;

      if (prevCalendarData.month <= 1) {
        newMonth = 12;
        newYear--;
      }
      return getCalendarData(newYear, newMonth);
    }

    if (operation === "plus") {
      let newMonth = prevCalendarData.month + 1;

      if (prevCalendarData.month >= 12) {
        newMonth = 1;
        newYear++;
      }
      return getCalendarData(newYear, newMonth);
    }
  });
}

function getCalendarData(year, month) {
  const endDate = new Date(year, month, 0);

  const calendarData = {
    year: year,
    month: month,
    days: [],
  };

  for (let day = 1; day <= endDate.getDate(); day++) {
    const currentDate = new Date(year, month - 1, day);
    calendarData.days.push({
      day: day,
      dayOfWeek: currentDate.getDay(),
    });
  }

  return calendarData;
}
