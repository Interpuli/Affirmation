import './App.css';
import affirmations from "./affirmations";

import { useState, useEffect } from "react";

const App = () => {
  const [affirmation, setAffirmation] = useState(affirmations[0]);
  
  useEffect(() => {
    const todayIndex = new Date().getDate() % affirmations.length;
    setAffirmation(affirmations[todayIndex]);
  }, []);

  return (
    <>
      <div className="txtAlignCenter">
        <h2>{affirmation.title}</h2>
        <p>{affirmation.description}</p>        
      </div>      
    </>
  );
};

export default App;
