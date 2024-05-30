import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

function SingleQuestion({ id, title, info, activeId, toggleQuestion }) {
  const isActive = id === activeId;
  return (
    <article className="question">
      <header>
        <h5>{title} </h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {isActive && <p>{info}</p>}
    </article>
  );
}

export default SingleQuestion;
