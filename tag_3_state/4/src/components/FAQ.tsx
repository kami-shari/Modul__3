import { useState } from "react";

function FAQ() {
  const [answerVisible, setAnswerVisible] = useState(false);
  const [answerVisibleTwo, setAnswerVisibleTwo] = useState(false);

  const changeAnswer = () => {
    setAnswerVisible(!answerVisible);
  };

  const changeAnswerTwo = () => {
    setAnswerVisibleTwo(!answerVisibleTwo);
  };

  return (
    <div>
      <p>Why is React so great?</p>
      <button onClick={changeAnswer}>{answerVisible ? "↑" : "↓"}</button>
      {answerVisible && (
        <div>
          <p>Fast learning curve</p>
          <button onClick={changeAnswerTwo}>
            {answerVisibleTwo ? "↑" : "↓"}
          </button>
          {answerVisibleTwo && (
            <p>
              React is very a simple and lightweight library that only deals
              with the view layer. It is not a beast like other MV* frameworks
              such as Angular or Ember. Any Javascript developer can understand
              the basics and start developing an awesome web application after
              only a couple of days reading tutorial.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default FAQ;
