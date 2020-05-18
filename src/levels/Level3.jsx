/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

/**
 * 
 * Level 3: run only once
 * 
 * Giving [] as second argument to useEffect will call function once, after mount.
 * Even though setInterval is called only once, this code is implemented incorrectly.
 * 
 * count will increase from 0 to 1 and stay that way. 
 * Arrow function will be created once and when that happens, count will be 0.
 * 
 * This code has subtle resource leak. 
 * Even after component unmounts, setCount will still be called.
 * 
 * 
 */

function Level3() {
    const [ count, setCount ] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
            setCount(count + 1);
        },500)
    },[]);

   
    return (
        <div>
            Level 3: count => {count}
            <pre>
                <samp>
                Giving [] as second argument to useEffect will call function once, after mount.
                Even though setInterval is called only once, this code is implemented incorrectly.
                count will increase from 0 to 1 and stay that way. Arrow function will be created once and when that happens, count will be 0.
                This code has subtle resource leak. Even after component unmounts, setCount will still be called.
                </samp>
            </pre>
        </div>
    );
}

export default Level3;