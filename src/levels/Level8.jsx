import React, {useState} from 'react';

/**
 * 
 * Level 8: local variable
 * We’ve added start and stop buttons. 
 * This code is implemented incorrectly, stop button does not work. 
 * New reference is created during each render, so stop will have reference to null.
 */

export default function Level8() {
   
    const [count, setCount] = useState(0);  
    
    let interval = null;

    const start = () => {
      interval = setInterval(() => {
        setCount(c => c + 1);
      }, 500);
    };  
    const stop = () => {
      clearInterval(interval);
    };  
    return (
      <div>
        count => {count}
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <pre>
                <samp>
                We’ve added start and stop buttons. This code is implemented incorrectly, stop button does not work. New reference is created during each render, so stop will have reference to null.
                </samp>
        </pre>
      </div>
    );
  }