import React, {useEffect, useState} from 'react';

/**
 * 
 * Level 2: useEffect
 * 
 * Most side-effects happen inside useEffect.
 * This code also has a huge resource leak and is implemented incorrectly.
 * Default behavior of useEffect is to run after every render, 
 * so new interval will be created every time count changes.
 * 
 * 
 */

function Level2() {
    const [ count, setCount ] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
            setCount(count + 1);
        },500)
    });

   
    return (
        <div>
            Level 2: count => {count}
            <pre>
                <samp>
                    Most side-effects happen inside useEffect.
                    This code also has a huge resource leak and is implemented incorrectly.
                    Default behavior of useEffect is to run after every render, 
                    so new interval will be created every time count changes.
                </samp>
            </pre>
        </div>
    );
}

export default Level2;