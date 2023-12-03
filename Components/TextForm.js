import React,{useState} from 'react'





export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" +text )
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showAlert("Convert to UpperCase","Success")
    }
    const handleLoClick=()=>{
        console.log("Uppercase was clicked" +text )
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showAlert("Convert to LowerCase","Success")
    }
    const handleChangeClick=()=>{
        console.log("Uppercase was clicked" +text )
        let input1=prompt("Find the word: ")
        let input2=prompt("Enter new word: ")
        let newtext=text.replace(input1,input2 )
        setText(newtext)
    }
    const handleClearClick=()=>{
        console.log("Uppercase was clicked" +text )
        let newtext=""
        setText(newtext)
        props.showAlert("Data has Cleared","Success")
    }


    // const copyText=()=>{
    //     let text=document.getElementById('text')
    //     text.select()
    //     navigator.clipboard.writeText(text.value)


    // }

    const handleOnChange=(event)=>{
        console.log("On Change")
        setText(event.target.value)
    }
    const [text,setText] =useState("")
    // setText("Please type here")   // this is way to set state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'light':'black'}}>

            <h1>{props.heading} </h1 >

            <div className="mb-3">
                <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white'}} id='btnBox'  rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-" onClick={handleUpClick}>Convert to UpperCase</button> 
            <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleChangeClick}>Search Word</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Data</button>
            {/* <button className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy Text</button> */}
           

        </div>

        <div className="container my-4" style={{color: props.mode==='dark'?'light':'black'}}>
            <h2>Your text summary</h2>
            <p> {text.split(' ').length} word, {text.length} characters</p>
            <p> { 0.008 *text.split(' ').length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your something to preview it here"}</p>
            



        </div>
        </>
    )
}
