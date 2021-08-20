import React, { useState, useEffect } from "react";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import QuestionComponent from "./components/QuestionComponent/QuestionComponent";
import "./App.scss";
// services
import datafetchService from "./services/datafetchService";
import pushDataService from "./services/pushDataService";
//interfaces
import ICard from "./models/ICard";
import IAnswer from "./models/IAnswer";
import FooterComponent from "./components/FooterComponent/FooterComponent";

function App() {
  const [cards, setCards] = useState<ICard[]>([]);
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);

  useEffect(() => {
    datafetchService().then((data) => {
      setCards(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isRefresh) {
      window.location.reload();
    }
  }, [isRefresh]);

  const setAnswer = (answer: IAnswer) => {
    let newAnswers: IAnswer[] = answers.filter(
      (item) => item.question !== answer.question
    );
    newAnswers.push(answer);
    console.log("newAnswers", newAnswers);
    setAnswers(newAnswers);
    setIsRefresh(false);
  };

  const isRequierdsFieldsFillUp = () => {
    let requiredQuestionsLength: number = cards.filter(
      (item) => item.required && item.id
    ).length;
    let requiredAnswersLength: number = answers.filter(
      (item) => item.required && item.questionId
    ).length;
    return requiredAnswersLength === requiredQuestionsLength;
  };

  const submitData = () => {
    if (isRequierdsFieldsFillUp()) {
      alert("Thank you for your responses");
      pushDataService(answers);
      setIsRefresh(true);
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <HeaderComponent />
        <div>
          {cards.map((card) => {
            return (
              <div key={card.id}>
                <QuestionComponent card={card} getAnswer={setAnswer} />
              </div>
            );
          })}
        </div>
        <FooterComponent submitData={submitData} />
      </div>
    </div>
  );
}

export default App;
