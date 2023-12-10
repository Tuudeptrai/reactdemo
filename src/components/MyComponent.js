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
        console.log('>>random',this.state.name );
        console.log('>>random',this.state.age );
        this.setState({
            name: "tuu dep trai",
            age: Math.floor((Math.random()*100) +1)
        })
        // console.log(event);
    }
    handleOnmouseOver(event){
        console.log(event);
    }
    render(){
        return (
            <div>My name is {this.state.name} and i am  {this.state.age}
            <button onClick={(event)=>{this.handleClick(event)}}>Click me</button>
            <button onMouseOver={this.handleOnmouseOver}>on mouse me</button>
            </div>
        );
    }
}
export default MyComponent;