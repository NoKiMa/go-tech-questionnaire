import React from "react";
import "../App.scss";
import IQuestion from "../models/IQuestion";
import RoundCheckbox from "./RoundCheckbox";

interface QuestionComponentProps {
  question: IQuestion;
  // setAnswer(): string | string[];
}

const QuestionComponent = (props: QuestionComponentProps) => {
  return (
    <div className="question_container">
      <p>
        {props.question.question}{" "}
        {props.question.required ? <span className="required">*</span> : null}
      </p>
      {Array.isArray(props.question.options) ? (
        props.question.options.map((option) => (
          <div className="variant">
            <RoundCheckbox />
            <p className="text_variant">{option}</p>
          </div>
        ))
      ) : (
          <div className="variant_text">
            <input type="text" placeholder="Your answer"/>
          </div>
        
      )}
    </div>
  );
};

export default QuestionComponent;
