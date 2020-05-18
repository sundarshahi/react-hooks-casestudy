import React, {useEffect, useState} from 'react';

/**
 * 
 * Level 6: setTimeout
 *
 * This code and the previous work correctly. 
 * Since useEffect is called every time count changes, 
 * using setTimeout has same effect as calling setInterval .
 * 
 * This example is inefficient, new setTimeout is created every time render happens.
 * React has a better way for fixing the problem.
 * 
 * 
 * 
 */

function Level6() {
    const [ count, setCount ] = useState(0);

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setCount(count + 1);
        },500)
        return () => clearTimeout(timeout)
    },[count]);

   
    return (
        <div>
            Level 6: count => {count}
            <pre>
                <samp>
                This code and the code above work correctly. Since useEffect is called every time count changes, using setTimeout has same effect as calling setInterval .
                This example is inefficient, new setTimeout is created every time render happens. React has a better way for fixing the problem.
                </samp>
            </pre>
        </div>
    );
}

export default Level6;