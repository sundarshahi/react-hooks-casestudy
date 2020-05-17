import React, { useState } from 'react';

import useInterval from '../utils/useInterval'


function StopWatch() {
    const [status, setStatus] = useState("idle");
    const [timeElapsed, setTimeElapsed] = useState (0);

    useInterval(() => {
      setTimeElapsed( timeElapsed => timeElapsed + 1);
    }, status === "running" ? 1000 : null);
  

    const toggle = () => {
        setTimeElapsed(0);
        setStatus(status => (
          status === "running" ? "idle" : "running"
        ));
      };        

    return (
    <>
    
      Time Elapsed: {timeElapsed} second(s)
      <button onClick={toggle}>
        {status === 'running' ? 'Stop' : 'Start'}
      </button>
    </>
    );
}

export default StopWatch;