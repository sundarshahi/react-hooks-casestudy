import React, {useEffect, useState} from 'react';

/**
 * 
 * Level 7: functional updates for useState
 *
 * In previous example we ran useEffect on each count change. 
 * The was necessary because we needed to have always up-to-date current value.
 * 
 * useState provides API to update previous state without capturing the current value.
 *  To do that, all we need to do is provide lambda to setState .
 * 
 * This code works correctly and more efficiently. 
 * We are using a single setInterval during the lifecycle of a component. 
 * clearInterval will only be called once after component is unmounted.
 *
 * 
 * 
 * 
 */

function Level7() {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCount(c => c + 1);
        }, 500);
        return () => clearInterval(interval);
      }, []);

   
    return (
        <div>
            Level 7: count => {count}
            <pre>
                <samp>
                In previous example we ran useEffect on each count change. 
                The was necessary because we needed to have always up-to-date current value.
                useState provides API to update previous state without capturing the current value. To do that, all we need to do is provide lambda to setState .
                This code works correctly and more efficiently. We are using a single setInterval during the lifecycle of a component. clearInterval will only be called once after component is unmounted.
  
                </samp>
            </pre>
        </div>
    );
}

export default Level7;