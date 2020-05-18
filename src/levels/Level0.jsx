import React, {useState} from 'react';

/**
 * 
 * Level 0: HelloWorld
 * 
 * This is a simple, correctly implemented counter, 
 * which increments or decrements on user click.
 * 
 */

function Level0() {
    const [count, setCount]= useState(0);
    return (
        <div>
            count=>{count}
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={()=> setCount(count - 1)}>-</button>
            <pre><samp>This is a simple, correctly implemented counter,
                which increments or decrements on user click.</samp></pre>
            
        </div>
    );
}

export default Level0;