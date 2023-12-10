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
    handleOnChange(event){
        this.setState({
            name: event.target.value
        })
        // console.log(event.target.value);
    }
    handleonSubmit(event){
        event.preventDefault();      
          console.log(this.state);
    }
    render(){
        return (
            <div>My name is {this.state.name} and i am  {this.state.age}
            <form onSubmit={(event)=>this.handleonSubmit(event)}>
                <input type='text'
                onChange={(event)=>this.handleOnChange(event)}
                />
                <button>Submit</button>
            </form>
            </div>
        );
    }
}
export default MyComponent;