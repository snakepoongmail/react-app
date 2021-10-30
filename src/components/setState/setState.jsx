import React from "react";

class Setstate extends React.Component {
    state = {
        count: 1
    };
    
    handle = ()=>{
        this.setState((state,prop)=>{
            return {
                count: state.count + 1
            }
        });
        this.setState((state,prop)=>{
            return {
                count: state.count + 1
            }
        },()=>{
            //状态更新后，页面渲染后执行
            console.log(this.state.count);
        });
        
    }
    
    render() {
        
      return (
          <div>

              {this.state.count}
              <button onClick={this.handle}>add</button>
          </div>
      );
    }
  }

  export default Setstate;