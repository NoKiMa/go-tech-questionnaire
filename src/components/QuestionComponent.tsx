import React, { useEffect, useState } from "react";
import "../App.scss";
import IAnswer from "../models/IAnswer";
import ICard from "../models/ICard";

interface QuestionComponentProps {
  card: ICard;
  getAnswer: (answer: IAnswer) => void;
}

const QuestionComponent = (props: QuestionComponentProps) => {
  const [answer, setAnswer] = useState<IAnswer>();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [textInput, setTextInput] = useState<string>("");

  useEffect(() => {
    let answerItem: IAnswer = {
      question: props.card.question,
      answer: textInput,
      required: props.card.required,
      questionId: props.card.id,
    };
    if (textInput === "") {
      if (!props.card.required) {
        setAnswer(answerItem);
      }
    } else {
      setAnswer(answerItem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textInput]);

  useEffect(() => {
    if (answer) {
      props.getAnswer(answer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer]);

  const hendleInput = (e: any) => {
    let answerItem: IAnswer = {
      question: props.card.question,
      answer: e.target.value,
      required: props.card.required,
      questionId: props.card.id,
    };
    setTextInput("");
    setAnswer(answerItem);
    setIsDisabled(true);
  };

  const hendleFocusOnText = () => {
    setIsDisabled(false);
  };

  const hendleText = (e: any) => {
    setTextInput(e.target.value);
  };

  const renderCard = (card: ICard) => {
    switch (card.type) {
      case "radio":
        return Array.isArray(card.answerOptions)
          ? card.answerOptions.map((option) => (
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
              </div>
            ))
          : null;
      case "text":
        return (
          <div className="variant_text">
            <input
              type="text"
              placeholder="Your answer"
              value={textInput}
              onChange={hendleText}
            />
          </div>
        );
      case "radioWithText":
        return Array.isArray(card.answerOptions)
          ? card.answerOptions.map((option) => (
              <div key={option} className="row option_container">
                <p className="col m1 l1 radio_btn">
                  <label>
                    <input
                      className="with-gap"
                      name="group1"
                      type="radio"
                      value={option}
                      onChange={
                        option === "Other" ? hendleFocusOnText : hendleInput
                      }
                    />
                    <span className="option_text">{option}</span>
                  </label>
                </p>
                {option === "Other" ? (
                  <div className="col m4 l8 text_input">
                    <div>
                      <input
                        type="text"
                        className="validate"
                        value={textInput}
                        onChange={hendleText}
                        disabled={isDisabled}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            ))
          : null;
    }
  };

  return (
    <div className="question_container">
      <p>
        {props.card.question}{" "}
        {props.card.required ? <span className="required">*</span> : null}
      </p>
      <form>{renderCard(props.card)}</form>
    </div>
  );
};

export default QuestionComponent;
