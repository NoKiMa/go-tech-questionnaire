import React, {useEffect, useState} from "react";
import "../App.scss";
import IAnswer from "../models/IAnswer";
import IQuestion from "../models/IQuestion";

interface QuestionComponentProps {
  question: IQuestion;
  getAnswer: (answer: IAnswer) => void;
}

const QuestionComponent = (props: QuestionComponentProps) => {

  const [answer, setAnswer] = useState<IAnswer>();

  const hendleInput = (e: any) => {
    let answerItem: IAnswer = {
      question: props.question.question,
      answer: e.target.value
    }
     setAnswer(answerItem);
  }

  useEffect(() => {
    if (answer) {
      props.getAnswer(answer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[answer])

  return (
    <div className="question_container">
      <p>
        {props.question.question}{" "}
        {props.question.required ? <span className="required">*</span> : null}
      </p>
      <form action="#">
        {Array.isArray(props.question.options) ? (
          props.question.options.map((option) => (
            <div key={option} className="row option_container">
              <p className="col m1 l1 radio_btn">
                <label>
                  <input
                    className="with-gap"
                    name="group1"
                    type="radio"
                    value={option}
                    onChange={hendleInput}
                  />
                  <span className="option_text">{option}</span>
                </label>
              </p>
              {option === "Other" ? (
                <div className="col m4 l8 text_input">
                  <div>
                    <input type="text" className="validate"  value={""} onChange={hendleInput}/>
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
