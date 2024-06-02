import QuestionBlockChoice from "./QuestionBlockChoice.jsx"
import QuestionBlockLine from "./QuestionBlockLine.jsx"
import QuestionBlockDescription from "./QuestionBlockDescription.jsx"


class Question {
    constructor(questionLine, questionChoices) {
        this.questionLine = questionLine;
        this.questionChoices = questionChoices;
    }
}

export default function PromptBlock() {
    const question1 = new Question("Q1. What is the occasion of the recipe?", ["Breakfast", "Lunch", "Dinner"]);
    const questionLine2 = "Q2. What is your budget?";
    const questionLine3 = "Q3. What is your cousine preference?";
    const questionLine4 = "Q4. Give us your nutritional preference!";
    
    
    const question2 = new Question(questionLine2, ["Low", "Medium", "High"]);
    
    const questionLine5 = "Q5. How many servings do you want?";
    const questionType5 = "number";
    const questionLine6 = "Describe the recipe you want"

    return (
        <>

            <section>
                <QuestionBlockChoice question={question1} />
                <QuestionBlockChoice question={question2} />
                <QuestionBlockLine questionLine={questionLine3} questionType={"nutritionalPreference"} />
                <QuestionBlockLine questionLine={questionLine4} questionType={"nutritionalPreference"} />
                <QuestionBlockLine questionLine={questionLine5} questionType={questionType5} />
                <QuestionBlockDescription questionLine={questionLine6} />
            </section>
        </>
    )
}
