import React, {useState} from 'react';

function InputField() {
    const[text , setText] = useState('');
    function handleInputChange(event){
        setText(event.target.value);
    }

  return (
    <div style={{padding:'20px' ,  }}>
        <input type = "text"  value={text} onChange={handleInputChange} placeholder="Type here"  style={{padding:'15px', borderRadius:'10px',color:'orangered'}}/>
        <p style={{color:'blue'}}> Input text: {text}</p>
      
    </div>
  )
}

export default InputField;
