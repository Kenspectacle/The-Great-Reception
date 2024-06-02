export default function TextLine ( { questionType }) {

    return (
        <>
            <input type={questionType} className="form-control form-inline" id="exampleInputEmail1" ariaDescribedBy="emailHelp" placeholder="Enter Answer" />
        </>
    );
}
