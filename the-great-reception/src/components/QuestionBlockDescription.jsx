import QuestionLine from "./QuestionLine.jsx";
import TextBlock from  "./TextBlock.jsx";

export default function QuestionBlockDescription( { questionLine }) {
    return (
        <>
            <QuestionLine questionLine={questionLine} />

            <TextBlock />
        </>
    );
}