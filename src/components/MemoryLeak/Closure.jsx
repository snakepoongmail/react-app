import React from 'react';
import {start, stop} from './Closuref';


const Closure = () => {
    return(
        <div>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
        </div>
    );
};

export default Closure;