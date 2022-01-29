import React from "react";
import { useSelector, useDispatch } from "react-redux";


const ReactRedux = () =>{
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    const onclick = ()=>{dispatch({type:'add'})};
    console.info(state);
    return (
        <div>
            <button onClick={onclick}>Dispatch</button>
            {state.milk.milk}
        </div>
    );
};

export default ReactRedux;