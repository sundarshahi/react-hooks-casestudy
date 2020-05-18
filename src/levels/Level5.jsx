import React, {useEffect, useState} from 'react';

/**
 * 
 * Level 5: use count as dependency
 * 
 * Giving array of dependencies to useEffect will change its lifecycle.
 * In this example useEffect will be called once after mount and every time count changes.
 * Cleanup function will be called every time count changes to dispose previous resource.
 * 
 * This code works correctly, without any bugs, but it’s slightly misleading. 
 * setInterval is created and disposed every 500ms. 
 * Each setInterval is always called once.
 * 
 * 
 * 
 */

function Level5() {
    const [ count, setCount ] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(count + 1);
        },500)
        return () => clearInterval(interval)
    },[count]);

   
    return (
        <div>
            Level 5: count => {count}
            <pre>
                <samp>
                <p>
                Giving array of dependencies to useEffect will change its lifecycle. 
                In this example useEffect will be called once after mount and every time count changes. 
                Cleanup function will be called every time count changes to dispose previous resource.
                </p>
                <p>
                This code works correctly, without any bugs, but it’s slightly misleading. setInterval is created and disposed every 500ms.
                 Each setInterval is always called once.
                </p>
                </samp>
            </pre>
        </div>
    );
}

export default Level5;