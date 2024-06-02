import QuestionLine from "./QuestionLine.jsx"
import TextLine from "./TextLine.jsx";

export default function QuestionBlockLine( { questionLine, questionType }) {

    return (
        <>
            <QuestionLine questionLine={questionLine} /> <TextLine questionType={questionType}/>
        </>
    );
}