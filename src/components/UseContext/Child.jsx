import React,{useContext} from 'react';
import {ContextConsumer, Context} from '../../createContext'


const Child = ()=>{
    const context = useContext(Context);
    return (
        <div>
            <span>
                {context.color}
            </span>
             <ContextConsumer>
                 {
                     data => 
                     <span>
                         接收到的数据是:{data.color}
                     </span>
                 }
             </ContextConsumer>
        </div>
     
             
    
    );
}

export default Child;