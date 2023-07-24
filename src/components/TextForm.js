import React,{useState} from 'react'

export default function TextForm(props) {
    const handleOnClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase",'success')
    }
    const handleClearText = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared text",'success')
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleCopyText = (event) =>{
        let textValue = document.getElementById('exampleFormControlTextarea1');
        navigator.clipboard.writeText(textValue.value);
        props.showAlert("Text Copied",'success')
    }
    const [text, setText] = useState("Enter value");
    return (
        <>
            <div className="container" style={{color : props.mode === 'light'?'black':'white'}}>
                <div className="header">
                    <h1>{props.heading}</h1>
                </div>
                <div className="my-3">
                    <label htmlFor="textArea" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light'?'grey':'white'}}>
                    </textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleOnClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
                <div className="word-count">
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} minutes read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}