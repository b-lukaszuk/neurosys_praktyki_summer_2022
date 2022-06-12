import React, { useState, useEffect } from 'react';

import "./Question.css";

const Question = (props) => {

    // props
    const actionOnSelect = props.actionOnSelect;
    const isDisplayed = props.isDisplayed;
    const question = props.question;

    // inner state
    const [selectedChoice, setSelectedChoice] = useState(0);

    const onSelect = (answer) => {
        setSelectedChoice(answer.id);
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
                <label htmlFor={`answer${answer.id}`}
                    onClick={() => onSelect(answer)}>
                    {answer.answer}
                </label>
            </span>
        );
    };

    useEffect(() => {
        actionOnSelect(question.answers[selectedChoice].isCorrect);
    }, [actionOnSelect, question.answers, selectedChoice]);

    if (isDisplayed) {
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
    } else {
        return null;
    }
}

export default Question;
