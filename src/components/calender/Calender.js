import { useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks
} from "date-fns";
import {
    MdOutlineLibraryBooks,
    MdArrowBackIos,
    MdArrowForwardIos,
  } from "react-icons/md";

const Calendar = ({ showDetailsHandle }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType) => {
    //console.log("current week", currentWeek);
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      //console.log(addWeeks(currentMonth, 1));
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
  };

  const renderHeader = () => {
    const dateFormat = "MMM yyyy";
    // console.log("selected day", selectedDate);
    return (
      <div className="d-flex align-items-center justify-content-between my-3 w-100">
        <div className="cursor-pointer" onClick={() => changeWeekHandle("prev")}>
          <MdArrowBackIos />
        </div>
        <span className="fw-bold">{format(currentMonth, dateFormat)}</span>

        <div
          className="cursor-pointer"
          onClick={() => changeWeekHandle("next")}
        >
          <MdArrowForwardIos />
        </div>
      </div>
    );
  };
  const renderCells = () => {
    const weekFormat="ccc";
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    let weekDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              isSameDay(day, new Date())
                ? "today"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
            
          > <span>{format(addDays(weekDate, i), weekFormat)[0].toUpperCase()}</span>
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="d-flex calendar-format" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };
//   const renderFooter = () => {
//     return (
//       <div className="header row flex-middle">
//         <div className="col col-start">
         
//         </div>
//         <div>{currentWeek}</div>
       
//       </div>
//     );
//   };
  return (
    <div className="calendar">
      {renderHeader()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
/**
 * Header:
 * icon for switching to the previous month,
 * formatted date showing current month and year,
 * another icon for switching to next month
 * icons should also handle onClick events to change a month
 */
