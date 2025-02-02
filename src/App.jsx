import { useState } from 'react'
import * as math from 'mathjs';
import './App.css'
import Button from './Component/Button'
import Input from './Component/Input'

const App = ()=> {
  const [text,setText] = useState("");
  const [result,setResult] = useState("");

  const addToText =(val) =>{
    setText((text) => [...text, val + " "]);  
  };

  const resestInput = ()=>{
    setText("");
    setResult("");
  };

  const calculateResult = ()=>{
    const input = text.join("")   //remove commas

    setResult(math.evaluate(input));
  };
 
const buttonColor= "#f2a33c";

  return (
    <>
      <h1 className='h1'>Calculator Using React</h1>
    <div className="app">
      <div className="calc-wrapper">
      <Input text={text} result={result}/>
        <div className="row">
       <Button symbol="7" handleClick={addToText}/>
       <Button symbol="8" handleClick={addToText}/>
       <Button symbol="9" handleClick={addToText}/>
       <Button symbol="*" color={buttonColor} handleClick={addToText}/>
       </div>

       <div className="row">
       <Button symbol="4" handleClick={addToText}/>
       <Button symbol="5" handleClick={addToText}/>
       <Button symbol="6" handleClick={addToText}/>
       <Button symbol="-" color={buttonColor} handleClick={addToText}/>
       </div>

       <div className="row">
       <Button symbol="1" handleClick={addToText}/>
       <Button symbol="2" handleClick={addToText}/>
       <Button symbol="3" handleClick={addToText}/>
       <Button symbol="+" color={buttonColor} handleClick={addToText}/>
       </div>

       <div className="row">
       <Button symbol="." handleClick={addToText}/>
       <Button symbol="0" handleClick={addToText}/>
       <Button symbol="=" handleClick={calculateResult}/>
       <Button symbol="/" color={buttonColor} handleClick={addToText}/>
       </div>
      
      <Button symbol="Clear" color="red" handleClick={resestInput}/>

      </div>
    </div>  
    </>
  )
}

export default App
