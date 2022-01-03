import React from "react";
import store from './init';
import {Provider} from 'react-redux';
import Child from './Child';

const Parent = ()=>{
    
    return (
        <Provider store = {store}>
            <Child></Child>
        </Provider>
    );
};

export default Parent;