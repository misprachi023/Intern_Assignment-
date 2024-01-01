import React, { useState } from "react";
import "../styles/FAQ.css";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
const FAQ = () => {
  const faqDetails = [
    {
      ques: "How does an investor gain access to MF Utility?",
      ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum autem suscipit consequatur dolorem eveniet alias accusantium ipsam, earum quidem adipisci quod deleniti quo quibusdam voluptatum ducimus voluptas nulla sunt animi.",
      plus: plus,
      minus: minus,
    },
    {
      ques: "Will investors be able to have multiple Common Account Numbers?",
      ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum autem suscipit consequatur dolorem eveniet alias accusantium ipsam, earum quidem adipisci quod deleniti quo quibusdam voluptatum ducimus voluptas nulla sunt animi.",
      plus: plus,
      minus: minus,
    },
    {
      ques: "How does an investor gain access to MF Utility?",
      ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum autem suscipit consequatur dolorem eveniet alias accusantium ipsam, earum quidem adipisci quod deleniti quo quibusdam voluptatum ducimus voluptas nulla sunt animi.",
      plus: plus,
      minus: minus,
    },
    {
      ques: "Will investors be able to have multiple Common Account Numbers?",
      ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum autem suscipit consequatur dolorem eveniet alias accusantium ipsam, earum quidem adipisci quod deleniti quo quibusdam voluptatum ducimus voluptas nulla sunt animi.",
      plus: plus,
      minus: minus,
    },
  ];
  const [plusMinusToggle, setPlusMinusToggle] = useState({});

  const plusMinusClickHandle = (index) => {
    // Update the toggle state for the clicked FAQ item
    setPlusMinusToggle((prevToggle) => {
      return {
        ...prevToggle,
        [index]: !prevToggle[index],
      };
    });
  };
  return (
    <>
      <h1 className="faqHeading">FAQ</h1>
      {faqDetails.map((ele, ind) => (
        <div key={ind}>
          <div className="quesDiv">
            <p>{ele.ques}</p>
            <button onClick={() => plusMinusClickHandle(ind)}>
              {!plusMinusToggle[ind] ? (
                <img className="plus" src={ele.plus} alt="plus" />
              ) : (
                <img className="minus" src={ele.minus} alt="minus" />
              )}
            </button>
          </div>
          {plusMinusToggle[ind] && (
            <div className="ansDiv">
              <p>{ele.ans}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};
export default FAQ;
