import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div style={{color:'green', padding:'20px',}}>
      <button style={{backgroundColor:'yellow', padding:'20px', borderRadius:'20px', color:'red',fontWeight:'bold', fontSize:'30px'}} onClick={handleToggleVisibility}>Show/Hide Text</button>
      {isVisible && <p stye={{color:'orange', fontSize:'50px'}}>Toggle me!</p>}
    </div>
  );
}

export default ToggleVisibility;
