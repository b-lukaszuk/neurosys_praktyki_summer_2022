import React, { useState } from 'react';

import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Question from "./Question";
import questions from "../questionsDb/questions";
import TextInput from "../components/TextInput";

import "./ContactForm.css";

const ContactForm = (props) => {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");
    const [isRobot, setIsRobot] = useState(true);
    const [answerCorrect, setAnswerCorrect] = useState(false);
    const getRandQuestionId = () => {
        return Math.floor(Math.random() * (questions.length - 0)) + 0;
    }
    const [questionId, setQuestionId] = useState(getRandQuestionId());
    const onClose = props.onClose;

    const clearAllFields = () => {
        setName("");
        setMail("");
        setPhone("");
        setMsg("")
        setIsRobot(true);
    }

    const toggleIsRobot = () => {
        setIsRobot((prev) => !prev);
    }

    const isTextOk = (pattern, text) => {
        return pattern.test(text);
    }

    const isNameOk = () => {
        return isTextOk(/^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/, name);
    }

    const isMailOk = () => {
        return isTextOk(/^[a-z.]{1,}@([a-z]{1,}\\.)[a-z]{2,4}$/, mail);
    }

    const isPhoneOk = () => {
        return isTextOk(/^[0-9]{6,9}$/, phone);
    }

    const isMsgOk = () => {
        return msg.trim().length > 20 ? true : false;
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

    return (
        // pseudo-form
        <div className="ContactForm">
            <p className="close" onClick={onClose}>&#10006;</p>
            <div className="Form">
                {/* simple regexes written by me, not 100% effective */}
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
                {
                    !isRobot &&
                    <Question actionOnSelect={setAnswerCorrect}
                        question={questions[questionId]} />
                }
            </div>
        </div>
    );
}

export default ContactForm;
