import React from "react";

 class MyComponent extends React.Component{
    state = {
        name: 'tuu',
        address: "gia lai",
        age:30

    }
    //jsx
    handleClick (event){
        console.log('>>tuu dep trai vai lol');
        console.log('>>tuu dep trai vai lol',this.state.name );
        // console.log(event);
    }
    handleOnmouseOver(event){
        console.log(event);
    }
    render(){
        return (
            <div>My name is {this.state.name} and i am from {this.state.address}
            <button onClick={(event)=>{this.handleClick(event)}}>Click me</button>
            <button onMouseOver={this.handleOnmouseOver}>on mouse me</button>
            </div>
        );
    }
}
export default MyComponent;