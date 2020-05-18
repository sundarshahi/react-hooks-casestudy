/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

/**
 * 
 * Level 4: cleanup
 * 
 * To prevent resource leaks, everything must be disposed when lifecycle of a hook ends.
 * In this case returned function will be called after component unmounts.
 * This code does not have resource leaks, but is implemented incorrectly, just like previous one.
 * 
 * 
 */

function Level4() {
    const [ count, setCount ] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(count + 1);
        },500)
        return () => clearInterval(interval)
    },[]);

   
    return (
        <div>
            Level 4: count => {count}
            <pre>
                <samp>
                To prevent resource leaks, everything must be disposed when lifecycle of a hook ends.
                In this case returned function will be called after component unmounts.
                This code does not have resource leaks, but is implemented incorrectly, just like previous one.
                </samp>
            </pre>
        </div>
    );
}

export default Level4;