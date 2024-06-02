import QuestionLine from "./QuestionLine.jsx"



function ButtonChoice( { choices }) {
    return (
        <div>
            {choices.map((choice, index) => (
                <button key={index}>{choice}</button>
            ))}
        </div>
    );

}

export default function QuestionBlockChoice( { question }) {


    return (
        <>
            <QuestionLine questionLine={question.questionLine} />
        
            <form action="GET">
                <ButtonChoice choices={question.questionChoices}/>
            </form>
        </>
    );
}