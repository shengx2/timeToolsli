import { useState, useEffect } from 'react';
import './timeTools.css';


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

  const formattedTime =
    `${String(hours).padStart(2, '0')}:` +
    `${String(minutes).padStart(2, '0')}:` +
    `${String(seconds).padStart(2, '0')}.` +
    `${String(ms).padStart(2, '0')}`;

  return (
    <div className="my-margin">
      <h1>Stopwatch</h1>
      <p>Timer: {formattedTime}</p>
      <button 
        className="my-btn"
        onClick={() => setIsRunning(prev => !prev)}
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button 
        className="my-btn"
        onClick={() => setMilliseconds(0)}
      >
        Reset
      </button>
    </div>
  );
}