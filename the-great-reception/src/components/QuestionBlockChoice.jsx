import QuestionLine from "./QuestionLine.jsx"
import { useState } from 'react';


function ButtonChoice( { choices }) {
    return (
        <div>
            {choices.map((choice, index) => (
                <button key={index} onClick>
                    {choice}
                </button>
            ))}
        </div>
    );

}

export default function QuestionBlockChoice( { question }) {


    return (
        <>
            <QuestionLine questionLine={question.questionLine} />
        
            <form>
                <ButtonChoice choices={question.questionChoices}/>
            </form>
        </>
    );
}