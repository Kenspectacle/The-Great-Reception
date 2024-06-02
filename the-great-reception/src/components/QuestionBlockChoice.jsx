import React, { useState } from 'react';
import QuestionLine from "./QuestionLine.jsx";

function ButtonChoice({ choices, onChoiceSelect, selectedChoice }) {
    return (
        <div>
            {choices.map((choice, index) => (
                <button className={`btn ${choice === selectedChoice ? 'btn-primary' : 'btn-outline-primary'}` }
                key={index} 
                onClick={() => onChoiceSelect(choice)}>
                    {choice}
                </button>
            ))}
        </div>
    );
}

export default function QuestionBlockChoice({ question, onAnswerUpdate }) {
    const [selectedChoice, setSelectedChoice] = useState(null);

    const handleChoiceSelect = (choice) => {
        setSelectedChoice(choice);
        onAnswerUpdate(question.questionLine, choice);
    };

    return (
        <>
            <QuestionLine questionLine={question.questionLine} />
            <ButtonChoice 
                choices={question.questionChoices} 
                onChoiceSelect={handleChoiceSelect}
                selectedChoice={selectedChoice} />
        </>
    );
}
