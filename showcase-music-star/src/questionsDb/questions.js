const questions = [
    {
        id: 0, question: "Jaki jest mój ulubiony kolor?",
        answers: [
            { id: 0, answer: "niebieski", isCorrect: false },
            { id: 1, answer: "czerwony", isCorrect: false },
            { id: 2, answer: "zielony", isCorrect: true },
            { id: 3, answer: "beżowy", isCorrect: false },
        ],
    },
    {
        id: 1, question: "Kto jest najlepszym muzykiem?",
        answers: [
            { id: 0, answer: "Whitney Houston", isCorrect: false },
            { id: 1, answer: "Ed Sheeran", isCorrect: true },
            { id: 2, answer: "Jon Bon Jovi", isCorrect: false },
            { id: 3, answer: "The Beatles", isCorrect: false },
        ],
    },
    {
        id: 2, question: "W którym roku się urodziłem?",
        answers: [
            { id: 0, answer: "1987", isCorrect: false },
            { id: 1, answer: "1989", isCorrect: false },
            { id: 2, answer: "1991", isCorrect: true },
            { id: 3, answer: "1993", isCorrect: false },
        ],
    },
    {
        id: 3, question: "Nagrana przeze mnie piosenka do 3 części filmu Hobbit to?",
        answers: [
            { id: 0, answer: "I Wanna Dance With Somebody", isCorrect: false },
            { id: 1, answer: "I'll Make a Man Out of You", isCorrect: false },
            { id: 2, answer: "I Just Called to Say I love You", isCorrect: false },
            { id: 3, answer: "I See Fire", isCorrect: true },
        ],
    },
];

export default questions;