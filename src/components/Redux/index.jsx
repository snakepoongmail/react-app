import React from 'react';
import Parent from './Parent';
//共享
// import store from './init'
// import difstore from './init'


// import { reducers } from './init';
// import { createStore } from 'redux';

const App = () => {
    return (
        <div>
            <Parent ></Parent>
            <Parent ></Parent>
            {/* 非共享 */}
            {/* <Parent store={createStore(reducers)}></Parent>
            <Parent store={createStore(reducers)}></Parent> */}
        </div>
    );
};

export default App;