import React from 'react';
window.arr = [];
console.log('window arr');

const MemoryLeak = () => {
    const start = () =>{
        for(let i = 0; i < 10000; i++){
            window.arr.push('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        }
    };
    const stop = () =>{
        window.arr = null;
    };

    return(
        <div>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
        </div>
    );
}

export default MemoryLeak;