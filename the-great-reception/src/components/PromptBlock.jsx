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
    const question2 = new Question("Q2. What is your cousine preference?", ["Italian", "Asian", "Mexican", "Indian"]);
    const question3 = new Question("Q3. Give us your nutritional preference!", ["Healthy", "High Protein", "Sweet", "Fast Food"]);
    const question4 = new Question("Q4. What is your budget?", ["Low", "Medium", "High"]);
    const questionLine5 = "Q5. How many servings do you want?";
    const questionType5 = "number";
    const questionLine6 = "Describe the recipe you want"

    return (
        <>

            <section>
                <QuestionBlockChoice question={question1} />
                <QuestionBlockChoice question={question2} />
                <QuestionBlockChoice question={question3} />
                <QuestionBlockChoice question={question4} />
                <QuestionBlockLine questionLine={questionLine5} questionType={questionType5} />
                <QuestionBlockDescription questionLine={questionLine6} />
            </section>
        </>
    )
}
