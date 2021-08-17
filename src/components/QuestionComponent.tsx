import React from "react";
import "../App.scss";
import IQuestion from "../models/IQuestion";
import RoundCheckbox from "./RoundCheckbox";

interface QuestionComponentProps {
  question: IQuestion;
  getAnswer: (answer: string | string[]) => void;
}

const QuestionComponent = (props: QuestionComponentProps) => {
  return (
    <div className="question_container">
      <p>
        {props.question.question}{" "}
        {props.question.required ? <span className="required">*</span> : null}
      </p>
      <form action="#">
        {Array.isArray(props.question.options) ? (
          props.question.options.map((option) => (
            // <div key={option} className="variant">
            //   <RoundCheckbox />
            //   <p className="text_variant">{option}</p>
            // </div>
            <div key={option} className="row option_container">
              <p className="col m1 l1 radio_btn">
                <label>
                  <input
                    className="with-gap"
                    name="group1"
                    type="radio"
                  />
                  <span>{option}</span>
                </label>
              </p>
              {option === "Other" ? (
                <div className="col m4 l8 text_input">
                  <div>
                    <input type="text" className="validate" />
                  </div>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div className="variant_text">
            <input type="text" placeholder="Your answer" />
          </div>
        )}
      </form>
    </div>
  );
};

export default QuestionComponent;
