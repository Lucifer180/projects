import { useState } from 'react';
import './Calculator.css';

import React from 'react';

const Calculator = () => {
let [result,setresult]=useState("");


  const handleClick=(e)=>{
    if(result.length>=16){
      setresult("!so much big input");
      return;
    }
    if(result.charAt(0)==="0"){
      result=result.slice(1,result.length)
    }
    setresult(result.concat(e.target.name));
  }
  
  const clear=()=>{
    setresult("");
  }
  const backSpace=()=>{
    setresult(result.slice(0,result.length-1));
  }

  const calculate = () => {
    try {
      result=eval(result).toString()
     
        setresult(eval(result).toString());
      
    } catch (err) {
      setresult("Error");
    }
  }
   return (
    <div className='container'>
<h3 style={{fontSize:"35px",color:"chocolate",borderBottom:"2px solid whitesmoke",marginTop:"10px"}}>calculator</h3>
<form action="">
  <input className='input' type="text" value={result} />
</form>
<div className='keypad'>
<button className='clear color' onClick={clear}>clear</button>
<button onClick={backSpace} className='backspace color'>C</button>
<button className='color' name='/' onClick={handleClick}>/</button>
<button name='7' onClick={handleClick}>7</button>
<button name='8' onClick={handleClick}>8</button>
<button name='9' onClick={handleClick}>9</button>
<button name='*' onClick={handleClick} className='color'>*</button>
<button name='4' onClick={handleClick}>4</button>
<button name='5' onClick={handleClick}>5</button>
<button name='6' onClick={handleClick}>6</button>
<button name='-' onClick={handleClick} className='color'>-</button>
<button name='3' onClick={handleClick}>3</button>
<button name='2' onClick={handleClick}>2</button>
<button name='1' onClick={handleClick}>1</button>
<button name="+" onClick={handleClick} className='color'>+</button>
<button name='0' onClick={handleClick}>0</button>
<button name='.' onClick={handleClick} className='color'>.</button>
<button onClick={calculate} className='equal color'>=</button>
</div>
</div>
  )
}

export default Calculator