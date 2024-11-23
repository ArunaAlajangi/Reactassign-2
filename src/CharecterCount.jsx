import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');

  function handleTextareaChange(event) {
    setText(event.target.value);
  }

  return (
    <div style={{padding:'20px'}}>
      <textarea value={text} onChange={handleTextareaChange} placeholder="typehere" style={{ padding:'15px', borderRadius:'50px',color:'voilet',textColor:'blue'}}/>
      <p style={{color:'purple', fontStyle:'italic', fontSize:'30px'}}>Character count: <strong>{text.length}</strong></p>
    </div>
  );
}

export default CharacterCounter;
