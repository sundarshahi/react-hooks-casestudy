import React, {useState, useRef,useCallback} from 'react'

/**
 * 
 * 
 * To enable React.memo to do its job properly, all we need to do it to memoize functions, using useCallback hook. 
 * This way, same reference will be provided after each render.
 * 
 * This code has no resource leaks, is implemented correctly, has no performance problem, but code is quite complex, even for a simple counter.
 * 
 * 
 */

export default function Level11() {
   
    const [count, setCount] = useState(0);  
    const intervalRef = useRef(null);  

    const start = useCallback(() => {
      if (intervalRef.current !== null) {
        return;
      }    
      intervalRef.current = setInterval(() => {
        setCount(c => c + 1);
      }, 500);
    }, []);  
    const stop = useCallback(() => {
      if (intervalRef.current === null) {
        return;
      }    
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }, []);
    return (
      <div>
        count => {count}
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>

        <pre>
        To enable React.memo to do its job properly, all we need to do it to memoize functions, using useCallback hook. This way, same reference will be provided after each render.

This code has no resource leaks, is implemented correctly, has no performance problem, but code is quite complex, even for a simple counter.
        </pre>
      </div>
    );
  }