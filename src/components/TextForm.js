import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUPclick=()=>{
        console.log("handleupclicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase done","success");
    }
    const handleUPchange=(event)=>{
        console.log("handleupchanged");
        setText(event.target.value);
    }
    const handleLOclick=()=>{
        setText(text.toLowerCase());
        props.showAlert("LowerCase done","success");
    }
    const handleclearclick=()=>{
        setText("");
        props.showAlert("Text cleared","success");
    }
    const handlecopyclick=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied","success");
    }
    const handleExtraSpace=()=>{
        let text2=text.replace(/\s{2,}/g, ' ').trim();
        setText(text2);
        props.showAlert("Extra Spaces Removed","success");
        //let text2=text.split(' ').filter(word => word).join(' ');
    }
    const [text,setText]=useState("");
    return (
        
        <div>
            <div className="container">
                <h1>{props.heading}</h1>
                
                <div className="mb-3">
                <textarea className="form-control" value={text} style={props.mode==='light'?{color:'#041a30',backgroundColor:'white'}:{color:'white',backgroundColor:'#041a30'}}  onChange={handleUPchange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUPclick}>Change to upper case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLOclick}>Change to Lower case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopyclick}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Clear extra spaces</button>
                <div className="container my-3">
                    <h2>Your text summary</h2>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}word {text.length} characters</p>
                </div>
                
            </div>
            
        </div>
    )
}

