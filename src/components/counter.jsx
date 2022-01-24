import React, { Component } from 'react';

class  Counter extends Component {
    state = {
        count: 0
    };

    handelIncrement = () => {
        this.setState({count: this.state.count +1  });        
    };
    handelDecrement = () => {
        this.setState({count: this.state.count -1  });
    };

    styles = {
        fontSize: 20,
        fontWeight:"bold"
    };

    render(){
        let classes = "badge m-4 alert-";
        classes+=this.state.count === 0 ? "warning" : "primary";

        return (
        <div  align="center">
            <span style={this.styles} className={classes}>{this.formatCount()}</span>
            <button className="btn btn-primary">
                <button className='btn btn-dark' onClick={this.handelIncrement} >+</button>
                <button className='btn btn-light'onClick={this.handelDecrement} >-</button>
            </button>
        </div>
        );
  }
  formatCount(){
      const count=this.state.count;
      if (count <1){
        window.alert("No more :(");
        return 'Zero';
      }
      else
        return count;
    //   return count < 1 ? 'Zero' : count;
  }
}
 
export default Counter;