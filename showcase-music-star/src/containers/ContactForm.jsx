import React, { useState } from 'react';

import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Question from "./Question";
import questions from "../questionsDb/questions";
import TextInput from "../components/TextInput";

import "./ContactForm.css";

const ContactForm = (props) => {

    // props
    const onClose = props.onClose;
    const isDisplayed = props.isDisplayed;

    // inner state
    const [answerCorrect, setAnswerCorrect] = useState(false);
    const [isRobot, setIsRobot] = useState(true);
    const [mail, setMail] = useState("");
    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [questionId, setQuestionId] = useState(0);

    const clearAllFields = () => {
        setIsRobot(true);
        setMail("");
        setMsg("")
        setName("");
        setPhone("");
    }

    const getRandQuestionId = () => {
        let newQuestionId = questionId;
        while (newQuestionId === questionId) {
            newQuestionId = Math.floor(Math.random() * questions.length);
        }
        return newQuestionId;
    }

    const isTextOk = (pattern, text) => {
        return pattern.test(text);
    }

    const isMailOk = () => {
        return isTextOk(/^[a-z.]{1,}@([a-z]{1,}\\.)[a-z]{2,4}$/, mail);
    }

    const isMsgOk = () => {
        return msg.trim().length > 20 ? true : false;
    }

    const isNameOk = () => {
        return isTextOk(/^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/, name);
    }

    const isPhoneOk = () => {
        return isTextOk(/^[0-9]{6,9}$/, phone);
    }

    const sendForm = () => {
        if (isRobot) {
            window.alert("Zaznacz pole 'Nie jestem Robotem'");
        } else if (!isNameOk() && !isPhoneOk() && !isMailOk()) {
            window.alert("Wprowadzono niepoprawne dane. Popraw input.");
        } else if (!isMsgOk()) {
            window.alert("Wiadomosc jest za krotka (>= 20 znaków)");
        } else if (!answerCorrect) {
            window.alert("Niepoprawna odpowiedź na pytanie. Spróbuj ponownie");
            setQuestionId(getRandQuestionId());
        } else {
            window.alert("Formularz wysłany");
            clearAllFields();
        }
    }

    const toggleIsRobot = () => {
        setIsRobot((prev) => !prev);
    }

    if (isDisplayed) {
        return (
            // pseudo-form
            <div className="ContactForm">
                <p className="close" onClick={onClose}>&#10006;</p>
                <div className="Form">
                    {/* simple regexes written by me, not 100% effective, but they will do */}
                    {/* normally I would just downloaded proper, spacious ones from the internet*/}
                    <TextInput nameIn={"name"}
                        changeHandlerIn={(e) => setName(e.target.value)}
                        labelIn={"Imię i nazwisko"}
                        patternIn={"^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$"}
                        placeholderIn={"Jan Kowalski"}
                        valueIn={name}
                    />
                    <TextInput nameIn={"mail"}
                        changeHandlerIn={(e) => setMail(e.target.value)}
                        labelIn={"E-mail"}
                        patternIn={"^[a-z.]{1,}@([a-z]{1,}\\.)[a-z]{2,4}$"}
                        placeholderIn={"jan.kowalski@wp.pl"}
                        valueIn={mail}
                    />
                    <TextInput nameIn={"phone"}
                        changeHandlerIn={(e) => setPhone(e.target.value)}
                        labelIn={"Nr telefonu"}
                        patternIn={"^[0-9]{6,9}$"}
                        placeholderIn={"555323488"}
                        valueIn={phone}
                    />
                    <label htmlFor="msg">Twoja wiadomość:&nbsp;</label>
                    <br />
                    <textarea name="msg" id="msg"
                        cols="30" rows="10"
                        value={msg}
                        placeholder="wpisz swoją wiadomość"
                        onChange={(e) => setMsg(e.target.value)}
                    />
                    <Checkbox name="robotCheck"
                        displayedText="Nie jestem robotem"
                        checked={!isRobot}
                        onClick={toggleIsRobot}
                    />
                    <Button displayedText="Wyślij formularz"
                        onClick={sendForm} />
                    <Question actionOnSelect={setAnswerCorrect}
                        isDisplayed={!isRobot} question={questions[questionId]} />
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default ContactForm;
