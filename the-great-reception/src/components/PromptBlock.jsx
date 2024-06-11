import React, { useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);

  const updateAnswer = (questionLine, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionLine]: answer,
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const dataToSend = {
      input: answers,
    };
    console.log(dataToSend);
    try {
      const response = await fetch(
        "https://api.runpod.ai/v2/myoxqxv0mw5osj/runsync",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            authorization: "VAB1XOJ27C06LI7RX35HFTXY9COMSGVK9HUOJ04V",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        const htmlResponse = responseData.output;
        // Save the HTML response to sessionStorage
        sessionStorage.setItem("recipeHtml", htmlResponse);
        // Redirect to the recipe page
        window.location.href = "/recipe";
      } else {
        console.error("Failed to send data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const question1 = new Question("Q1. What is the occasion of the recipe?", [
    "Breakfast",
    "Lunch",
    "Dinner",
  ]);
  const question2 = new Question("Q2. What is your budget?", [
    "Low",
    "Medium",
    "High",
  ]);

  return (
    <>
      <section>
        <QuestionBlockChoice
          question={question1}
          onAnswerUpdate={updateAnswer}
        />
        <QuestionBlockChoice
          question={question2}
          onAnswerUpdate={updateAnswer}
        />
        <QuestionBlockLine
          questionLine={"Q3. What is your cuisine preference?"}
          questionType={"text"}
          onAnswerUpdate={updateAnswer}
        />
        <QuestionBlockLine
          questionLine={"Q4. Give us your nutritional preference!"}
          questionType={"text"}
          onAnswerUpdate={updateAnswer}
        />
        <QuestionBlockLine
          questionLine={"Q5. How many servings do you want?"}
          questionType={"number"}
          onAnswerUpdate={updateAnswer}
        />
        <QuestionBlockDescription
          questionLine={"description"}
          onAnswerUpdate={updateAnswer}
        />
      </section>
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </>
  );
}
