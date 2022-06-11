import React, { useState } from 'react';

import "./Question.css";

const Question = (props) => {
    const actionOnSelect = props.actionOnSelect;
    const question = props.question;
    const [selectedChoice, setSelectedChoice] = useState(0);
    const onSelect = (answer) => {
        setSelectedChoice(answer.id);
        actionOnSelect(answer.isCorrect);
    };
    const getRadio = (answer) => {
        return (
            <span key={answer.id}>
                <input
                    type="radio"
                    value={answer.answer}
                    name={`answer${answer.id}`}
                    onChange={() => onSelect(answer)}
                    checked={selectedChoice === answer.id}
                />
                <label htmlFor={`answer${answer.is}`}
                    onClick={() => onSelect(answer)}>
                    {answer.answer}
                </label>
            </span>
        );
    };

    return (
        <div className="Question">
            <form action="">
                <fieldset>
                    <legend>{question.question}</legend>
                    {question.answers.map((a) => getRadio(a))}
                </fieldset>
            </form>
        </div>
    );
}

export default Question;
