import React from "react";
import "../styles/Examination.css";
import calendar from "../assets/event.svg";

const Examination = () => {
  const examDetails = [
    { calImg: calendar, date: "02th October 2014", level: "Level 1 exam" },
    { calImg: calendar, date: "Nov-Dec 2016", level: "Level 2" },
    { calImg: calendar, date: "Ongoing this year", level: "Level 3 (Grad)" },
  ];
  return (
    <div className="examinationMaiDiv">
      <div className="examinationDiv">
        <h3>Upcoming Examinations</h3>
        <p>Enquire about the examinatoin & register for the exam</p>
      </div>
      <div className="examinationDateMainDiv">
        {examDetails.map((ele, ind) => (
          <div className="examinationDateDiv" key={ind}>
            <img className="calendarImg" src={ele.calImg} alt="calendar" />
            <div className="dateDiv">
              <h4>{ele.date}</h4>
              <p>{ele.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Examination;
