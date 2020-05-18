import React,{useState,useRef} from 'react'

/**
 * 
 * Level 9: useRef
 * 
 * useRef is the go-to hook if mutable variable is needed.
 * Unlike local variables, React makes sure same reference is returned during each render.
 * 
 * This code seems correct, but has a subtle bug. 
 * If start is called multiple times, setInterval will be called multiple times triggering resource leak.
 * 
 * 
 */

export default function Level9() {
    const [count, setCount] = useState(0);  
    const intervalRef = useRef(null);  

    const start = () => {
      intervalRef.current = setInterval(() => {
        setCount(c => c + 1);
      }, 500);
    };  
    const stop = () => {
      clearInterval(intervalRef.current);
    };  
    return (
      <div>
        count => {count}
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <pre>
        useRef is the go-to hook if mutable variable is needed. Unlike local variables, React makes sure same reference is returned during each render.

This code seems correct, but has a subtle bug. If start is called multiple times, setInterval will be called multiple times triggering resource leak.
        </pre>
      </div>
    );
  }