import React, {useState, useRef} from 'react'


/**
 * 
 * To avoid resource leak, we simply ignore calls if interval is already started. 
 * Although calling clearInterval(null) does not trigger any errors, it’s still good practice to dispose resource only once.
 * 
 * This code has no resource leaks, is implemented correctly, but might have a performance problem.
 * memoization is main performance optimization tool in React. React.memo does shallow comparison and if references are same, render is skipped.
 * 
 * If start and stop were passed to a memoized component, the whole optimization would fail, because new reference is returned after each render
 * 
 */

export default function Level10() {
    
    const [count, setCount] = useState(0);  
    const intervalRef = useRef(null);  
    const start = () => {
      if (intervalRef.current !== null) {
        return;
      }    
      intervalRef.current = setInterval(() => {
        setCount(c => c + 1);
      }, 500);
    };  
    const stop = () => {
      if (intervalRef.current === null) {
        return;
      }    
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };  
    return (
      <div>
        count => {count}
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <pre>
        To avoid resource leak, we simply ignore calls if interval is already started. Although calling clearInterval(null) does not trigger any errors, it’s still good practice to dispose resource only once.

This code has no resource leaks, is implemented correctly, but might have a performance problem.

memoization is main performance optimization tool in React. React.memo does shallow comparison and if references are same, render is skipped.

If start and stop were passed to a memoized component, the whole optimization would fail, because new reference is returned after each render
        </pre>
      </div>
    );
  }