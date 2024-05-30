import React from "react";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;
