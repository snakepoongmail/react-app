import React from 'react'
import WithNLS from './withNLS';
const landing = () => {
    console.log('render landing');
    window.locale = 'en';
    return (
        <>
            <button onClick={()=>{window.locale = 'fr'}}>change locale</button>
            <WithNLS></WithNLS>
        </>
    );
}

export default landing;