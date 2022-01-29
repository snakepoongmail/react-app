import React, { useEffect, useState } from "react";
//共享
// import store from './init';
import {Provider} from 'react-redux';
import Child from './Child';
import { reducers } from './init';
import { createStore } from 'redux';
import ReactRedux from "./ReactRedux";

//共享
const store = createStore(reducers);
const Parent = (props)=>{
    const [count,setCount] = useState(0);
    //非共享
    // const store = createStore(reducers);
    console.log('parent first time render');
    useEffect(()=>{
        console.log('Parent re-render')
    });
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>parent</button>
            <Provider store = {store}>
                <Child></Child>
                <ReactRedux></ReactRedux>
            </Provider>
        </div>
    );
};

export default Parent;