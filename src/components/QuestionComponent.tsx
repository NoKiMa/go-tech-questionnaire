import React from "react";
import "../App.scss";
import IQuestion from "../models/IQuestion";
import RoundCheckbox from "./RoundCheckbox";

interface QuestionComponentProps {
  question: IQuestion;
  getAnswer: (answer:string|string[]) => void;
}

const QuestionComponent = (props: QuestionComponentProps) => {
  return (
    <div className="question_container">
      <p>
        {props.question.question}{" "}
        {props.question.required ? <span className="required">*</span> : null}
      </p>
      <form>
      {Array.isArray(props.question.options) ? (
        props.question.options.map((option) => (
          <div key={option} className="variant">
            <RoundCheckbox />
            <p className="text_variant">{option}</p>
          </div>
        ))
      ) : (
          <div className="variant_text">
            <input type="text" placeholder="Your answer"/>
          </div>
        
      )}
      </form>
    </div>
  );
};

export default QuestionComponent;
