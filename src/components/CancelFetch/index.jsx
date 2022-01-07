import React from 'react';

const controller = new AbortController();
const {signal} = controller.signal;

const CancelFetch = () => {
    const cancel = () => {
        fetch('https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch',{signal}).catch(e=>{
            console.log(`${e.message}`);
        });
        controller.abort();
    };
    return (
        <button onClick={cancel}>trigger</button>
    );
};

export default CancelFetch;