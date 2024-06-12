import React, { useState } from 'react';
import QuestionLine from "./QuestionLine.jsx";

export default function QuestionBlockLine({ questionLine, questionType, onAnswerUpdate }) {
    const [answer, setAnswer] = useState("");

    const handleInputChange = (e) => {
        setAnswer(e.target.value);
        onAnswerUpdate(questionLine, e.target.value);
    };

    return (
        <>
            <QuestionLine questionLine={questionLine} />
            <input type={questionType === "number" ? "number" : "text"} value={answer} onChange={handleInputChange} />
        </>
    );
}
