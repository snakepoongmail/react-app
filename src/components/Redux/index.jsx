import React from 'react';
import Parent from './Parent';
import store from './init'
import difstore from './init'
// import { reducers } from './init';
// import { createStore } from 'redux';

const App = () => {
    return (
        <div>
            <Parent store={store}></Parent>
            <Parent store={difstore}></Parent>
            {/* <Parent store={createStore(reducers)}></Parent>
            <Parent store={createStore(reducers)}></Parent> */}
        </div>
    );
};

export default App;