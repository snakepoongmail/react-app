import React from "react";
// import store from './init';
import {Provider} from 'react-redux';
import Child from './Child';

const Parent = (props)=>{
    return (
        <Provider store = {props.store}>
            <Child></Child>
        </Provider>
    );
};

export default Parent;