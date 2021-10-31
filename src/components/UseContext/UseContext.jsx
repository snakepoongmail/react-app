import React from 'react'
import {ContextProvider,createContext} from '../../createContext';
import Child from './Child';

createContext();
const color = {color:'red'};
const UseContext = () => {
    
    return (
        <div>
            <ContextProvider value={color}>
                <Child></Child>
            </ContextProvider>   
        </div>
    );
}

export default UseContext;