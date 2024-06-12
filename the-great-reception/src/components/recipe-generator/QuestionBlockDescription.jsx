import React, { useState } from 'react';
import QuestionLine from "./QuestionLine.jsx";

export default function QuestionBlockDescription({ questionLine, onAnswerUpdate }) {
    const [description, setDescription] = useState("");

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        onAnswerUpdate(questionLine, e.target.value);
    };

    return (
        <>
            <QuestionLine questionLine={questionLine} />
            <textarea value={description} onChange={handleDescriptionChange}></textarea>
        </>
    );
}
