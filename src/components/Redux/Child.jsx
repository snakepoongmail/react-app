import React from "react";
import {connect} from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from "./reducer/milk";

const Child = (props)=>{
    
    return (
        <div>
            {props.milk}
            <button onClick={props.add}>+</button>
            <button onClick={props.minus}>-</button>
        </div>
    );
};

export default connect(mapStateToProps,mapDispatchToProps)(Child);
