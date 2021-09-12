import React from 'react'
import WithNLS from './withNLS';
import {testMoment} from './momentTest'
const landing = () => {
    console.log('render landing');
    window.locale = 'en';
    testMoment();
    return (
        <>
            <button onClick={()=>{window.locale = 'fr'}}>change locale</button>
            <WithNLS></WithNLS>
        </>
    );
}

export default landing;