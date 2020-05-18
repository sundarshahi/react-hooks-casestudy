import React, {useState} from 'react';

/**
 * 
 * Level 1: setInterval
 * 
 * Intention of this code is to increase counter every 500ms. 
 * This code has a huge resource leak and is implemented incorrectly. 
 * It will easily crash browser tab. 
 * Since Level1 function is called every time render happens, 
 * this component creates new interval every time render is triggered.
 * 
 */

function Level1() {
    const [ count, setCount ] = useState(0);
    setInterval(()=>{
        setCount(count + 1);
    },500)
    return (
        <div>
            count => {count}
            <pre>
                <samp>
                    Intention of this code is to increase counter every 500ms.
                    This code has a huge resource leak and is implemented incorrectly.
                    It will easily crash browser tab.
                    Since Level1 function is called every time render happens,
                    this component creates new interval every time render is triggered.
                </samp>
            </pre>
        </div>
    );
}

export default Level1;