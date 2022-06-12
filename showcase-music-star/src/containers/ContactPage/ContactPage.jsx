import React, { useState } from 'react';

import Button from "../../components/Button";
import ContactForm from "./ContactForm";

import "./ContactPage.css";

const ContactPage = () => {

    const [displContactForm, setDisplContactForm] = useState(false);

    return (
        <div className="ContactPage">
            <h1>Kontakt</h1>
            <p>Na codzień mieszkam i pracuję w Wielkiej Brytanii.</p>
            <p>Jakkolwiek, jeśli masz dla mnie ciekawą ofertę to jestem dostępny niemal wszędzie.</p>
            <p>Wciśnij przycisk kontaktowy poniżej. Skontaktuj się z moim managerem i przedstaw swoją propozycję.</p>
            <Button onClick={() => setDisplContactForm(true)}
                displayedText={"Kontakt"} />
            <ContactForm isDisplayed={displContactForm}
                onClose={() => setDisplContactForm(false)} />
        </div>
    );
}

export default ContactPage;
