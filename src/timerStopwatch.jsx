import { useState, useEffect } from 'react';
import './timeTools.css';
import { FaPlay, FaPause } from "react-icons/fa";

export default function MyPage() {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setMilliseconds(prev => prev + 10); // add 10ms
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const hours = Math.floor(milliseconds / 3600000); // 1000*60*60
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const ms = Math.floor((milliseconds % 1000) / 10); // 2-digit ms

const formattedTime = (
  <>
    <span>{String(hours).padStart(2, '0')}:</span>
    <span>{String(minutes).padStart(2, '0')}:</span>
    <span>{String(seconds).padStart(2, '0')},</span>
    <span className="ms">{String(ms).padStart(2, '0')}</span>
  </>
);

  return (
    <>     
    <div className="my-margin">
      <h1>Stopwatch</h1>
        <p>{formattedTime}</p>
        <button 
          className="my-btn"
          onClick={() => setIsRunning(prev => !prev)}
        >
           {isRunning ? 
           <FaPause 
            className="my-test" 
            size={12} 
            /> 
            : 
            <FaPlay 
              className="my-test" 
              size={12} 
            />
            }
          {/* To do: add another state and if else statement */}
          {/* To do: Add labels object with strings  */}
        </button>
        <button 
        className="my-btn my-test"
        onClick={() => setMilliseconds(0)}
        >
          Reset
        </button>
    </div>
    <div className="my-input">
      <input type="text" size="40"/>
    </div>
     <div className="my-input">
      <input type="text" size="40"/>
    </div>
    <div className="my-input">
      <input type="text" size="40"/>
    </div>
    {/* Kan op 3 regels  */}
    {/* loop functie?  */}  
    {/* of component?  */}
    <textarea className="my-input" cols="39" rows="15"></textarea>
    </>
  );
}

// 