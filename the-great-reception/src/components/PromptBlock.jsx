import React, { useState } from 'react';
import QuestionBlockChoice from "./QuestionBlockChoice.jsx";
import QuestionBlockLine from "./QuestionBlockLine.jsx";
import QuestionBlockDescription from "./QuestionBlockDescription.jsx";

class Question {
    constructor(questionLine, questionChoices) {
        this.questionLine = questionLine;
        this.questionChoices = questionChoices;
    }
}

export default function PromptBlock() {
    const [answers, setAnswers] = useState({});

    const updateAnswer = (questionLine, answer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionLine]: answer,
        }));
    };

    const handleSubmit = async () => {
        const dataToSend = {
            input: answers
        };
        console.log(dataToSend);
        try {
            const response = await fetch('https://api.runpod.ai/v2/fkh7xq0s4d43c9/runsync', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'authorization': 'VAB1XOJ27C06LI7RX35HFTXY9COMSGVK9HUOJ04V',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
                const responseData = await response.json();
                //  ToDo Savce recipe in database  
                // Route
                let res = JSON.stringify(responseData.output)
                console.log('Response:', res);
                // const queryString = new URLSearchParams(responseData.output).toString();
                // console.log('querystring:', queryString);
                window.location.href = '/recipe?' + res;
            } else {
                console.error('Failed to send data:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const question1 = new Question("Q1. What is the occasion of the recipe?", ["Breakfast", "Lunch", "Dinner"]);
    const question2 = new Question("Q2. What is your budget?", ["Low", "Medium", "High"]);
    

    return (
        <>
            <section>
                <QuestionBlockChoice question={question1} onAnswerUpdate={updateAnswer} />
                <QuestionBlockChoice question={question2} onAnswerUpdate={updateAnswer} />
                <QuestionBlockLine questionLine={"Q3. What is your cuisine preference?"} questionType={"text"} onAnswerUpdate={updateAnswer} />
                <QuestionBlockLine questionLine={"Q4. Give us your nutritional preference!"} questionType={"text"} onAnswerUpdate={updateAnswer} />
                <QuestionBlockLine questionLine={"Q5. How many servings do you want?"} questionType={"number"} onAnswerUpdate={updateAnswer} />
                <QuestionBlockDescription questionLine={"description"} onAnswerUpdate={updateAnswer} />
            </section>
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}
