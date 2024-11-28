import React,{useState} from 'react'

export default function Textform(props) {
   const [text, settext] = useState("Enter Text Here");  
   const[count,setWordCount]= useState(3); 

   const handleOnChange=(event)=>{
    settext(event.target.value);
    setWordCount(wordCount(event.target.value));
   }
   const wordCount = (text) => {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word !== '').length;
  };
   const handleUpClick=()=>{
    let newText= text.toUpperCase();
    settext(newText);
    props.showAlert("Converted to UpperCase","success");
   }
   const handleLowClick=()=>{
    let newText= text.toLowerCase();
    settext(newText);
    props.showAlert("Converted to LowerCase","success");
   }
   const HandleClear=()=>{
    settext("")
    setWordCount(0);
    props.showAlert("Text Cleared","success");
   }
   const copyText=()=>{
    let txt= document.getElementById("exampleFormControlTextarea1");
    navigator.clipboard.writeText(txt.value);

    props.showAlert("Copied to clipboard","success");
   }

   const removeSpaces=()=>{
    let newtxt= text.split(/[ ]+/);
    settext(newtxt.join(' '));
   }
   const [isBold,setBold]= useState(false);

   const toggleBold=()=>{
    setBold(!isBold);
   }
   const alternateText=()=>{
    const words = text.split(' ');
    const convertedWords = words.map((word) => {
      const letters = word.split('');
      const convertedLetters = letters.map((letter, index) => {
        if (index % 2 === 0) {
          return letter.toUpperCase();
        } else {
          return letter.toLowerCase();
        }
      });
      return convertedLetters.join('');
    });
    settext(convertedWords.join(' '));

   }
  return (
    <>
    
    <div>
        <h1> {props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'white' : 'grey', color: props.mode==='dark' ?'black' : 'white', fontWeight: isBold ? 'bold' : 'normal'}} rows="6"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2 my-2" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-outline-secondary mx-2 my-2" onClick={handleLowClick}>LowerCase</button>
        <button className="btn btn-outline-success mx-2 my-2" onClick={alternateText}>Alternate text</button>
        <button className="btn btn-outline-danger mx-2 my-2" onClick={copyText}>Copy text</button>
        <button className="btn btn-light mx-2 my-2" onClick={removeSpaces}>Remove extra spaces</button>
        <button className="btn btn-outline-warning mx-2 my-2" onClick={toggleBold} >Bold</button>
        <button className={`btn btn-outline-${props.mode==='dark' ? 'dark' : 'light'} mx-2 my-2`} onClick={HandleClear}>Clear</button>
    </div>
        <div className="container my-3">
            <h1> Your text summary</h1>
            <p>{count} words , {text.length} characters </p>
            <h2>Preview text</h2>
            <p>{text.length>0? text: "Enter something in the textbox to preview it here"}</p>
        </div>
        
    </>
  )
}
