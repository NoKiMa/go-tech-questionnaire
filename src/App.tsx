import React, { useState, useEffect } from "react";
import HeaderComponent from "./components/HeaderComponent";
import QuestionComponent from "./components/QuestionComponent";
import "./App.scss";
// services
import datafetchService from "./services/datafetchService";
import pushDataService from "./services/pushDataService";
//interfaces
import IQuestion from "./models/IQuestion";
import IAnswer from "./models/IAnswer";

function App() {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [answers, setAnswers] = useState<IAnswer[]>([]);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);

  useEffect(() => {
    datafetchService().then((data) => {
      let res = data;
      setQuestions(res);
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
    setAnswers(newAnswers);
    setIsRefresh(false);
  };

  const submitData = () => {
    let requiredQuestions: string[] = questions
      .filter((item) => item.required)
      .map((item) => item.question);
    let requiredAnswers: string[] = answers
      .filter((item) => item.required)
      .map((item) => item.question);
    if (requiredAnswers.length === requiredQuestions.length) {
      alert("Thank you for your responses");
      pushDataService(answers);
      setIsRefresh(true);
    } else {
      alert("Fild all filds!");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <HeaderComponent />
      </div>
      {questions.map((question) => {
        return (
          <div key={question.id} className="container">
            <QuestionComponent question={question} getAnswer={setAnswer} />
          </div>
        );
      })}
      <div className="container">
        <div className="row">
          <div className="col s12 offset-s5">
            <button
              className="waves-effect waves-light btn submit_btn"
              onClick={submitData}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
