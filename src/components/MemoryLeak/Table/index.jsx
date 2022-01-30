import React, { useCallback, useMemo, useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const [display, setDisplay] = useState(true);

    const regen = useCallback(()=>{setCount(e=>++e)},[]);
    const toggle = useCallback(()=>{setDisplay(e=>!e)},[])

    return (
        <div>
            <button onClick={regen}>regen</button>
            <button onClick={toggle}>toggle</button>
            {display && <FTable count={count}></FTable>}
        </div>
    );
}
const Cell = () => {
    const num = Math.floor(Math.random() * 100);
    return <td>{num}</td>;
};

const FTable = (props) => {
    const {count} = props;
    const rows = useMemo(()=>{
        const r = [];
        if(count == 0){
            return r;
        }
        for(let i = 0; i < 1000; i++){
            r.push(
                <tr key={`${i}-${count}`}>
                    <Cell></Cell>
                    <Cell></Cell>
                    <Cell></Cell>
                </tr>
            );
        }
        return r;
    },[count]);



    return (
        <div>
         
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

export default App;