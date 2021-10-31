import React from 'react';
import {ContextConsumer} from '../../createContext'


const Child = ()=>{
    
    return (
        <ContextConsumer>
            {
                data => 
                <span>
                    接收到的数据是:{data.color}
                </span>
            }
        </ContextConsumer>
    );
}

export default Child;