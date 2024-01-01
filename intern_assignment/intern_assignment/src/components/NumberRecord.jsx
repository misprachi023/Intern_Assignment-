import React from "react";
import "../styles/NumberRecord.css";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const NumberRecord = () => {
  const recordDetails = [
    {
      p1: "Lorem ipsum",
      number: 123,
      plus: faPlus,
      h3: "Lorem ipsum",
      p2: "Lorem ipsum dolor sit, consectetur adipisicing elit. sed diam nomumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      p1: "Lorem ipsum",
      number: 12,
      plus: faPlus,
      h3: "Lorem ipsum",
      p2: "Lorem ipsum dolor sit, consectetur adipisicing elit.  sed diam nomumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
      p1: "Lorem ipsum",
      number: 12,
      plus: faPlus,
      h3: "Lorem ipsum",
      p2: "Lorem ipsum dolor sit, consectetur adipisicing elit.  sed diam nomumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
    },
    {
      p1: "Lorem ipsum",
      number: 123,
      plus: null,
      h3: "Lorem ipsum",
      p2: "Lorem ipsum dolor sit, consectetur adipisicing elit.   sed diam nomumy eirmod tempor invidunt ut",
    },
  ];

  return (
    <div className="numberRecordMainContainer">
      <div className="numberRecordMainDiv">
        {recordDetails.map((card, ind) => (
          <div className="numberRecordDiv" key={ind}>
            <p>{card.p1}</p>
            <div>
              <CountUp className="numberRecordCount" end={card.number} duration={5} />
              <FontAwesomeIcon className="numberRecordSign" icon={card.plus} />
            </div>
            <h3>{card.h3}</h3>
            <p>{card.p2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberRecord;
