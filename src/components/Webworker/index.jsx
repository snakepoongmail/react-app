import worker_script from './worker';
import React,{useEffect} from 'react';

var myWorker = new Worker(worker_script);

const App = () =>{
    useEffect(()=>{
        myWorker.onmessage = (m) => {
            console.log("msg from worker: ", m.data);
        };
        

    },[]);
    const click = ()=>{
        myWorker.postMessage('im from main');
    }
    return (
        <div>
            <button onClick={click}>click</button>
        </div>
    );
}

export default App;