import React, { useState, useEffect } from "react";
import HeaderComponent from "./components/HeaderComponent";
import QuestionComponent from "./components/QuestionComponent";
import "./App.scss";
// services
import datafetchService from "./services/datafetchService";
//interfaces
import IQuestion from "./models/IQuestion";

function App() {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    datafetchService().then((data) => {
      let res = data;
      setQuestions(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setAnswer = (answer: string | string[]) => {};

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
            <button className="waves-effect waves-light btn submit_btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
