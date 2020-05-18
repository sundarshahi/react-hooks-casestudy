import React from 'react';
import useCounter from '../utils/useCounter';

export default function Level12() {

    const { count, start, stop, reset } = useCounter(0, 500);  
    return (
      <div>
        count => {count}
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>reset</button>
      </div>
    );
  }