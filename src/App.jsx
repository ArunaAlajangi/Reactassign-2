import { useState } from "react";
import ToggleVisibility from "./Toggle";

import InputField from "./Input";
import CharacterCounter from "./CharecterCount";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <InputField/>
      <ToggleVisibility />
      <CharacterCounter/>
      
        
    </div>
   
  );
}

export default App;
