import React from "react";

class UserInfor extends React.Component{
 
    state = {
        name: 'tuu',
        address: "gia lai",
        age:30

    }
  
    handleOnChangeName(event){
        this.setState({
            name: event.target.value
        })
        // console.log(event.target.value);
    }
    handleOnChangeAge(event){
        this.setState({
            age: event.target.value
        })
        // bad code this.State.age = event.target.value
    }
    handleonSubmit(event){
        event.preventDefault();      
          console.log(this.state);
    }
    render(){

        return (
            <div>
                 <div>My name is {this.state.name} and i am  {this.state.age}</div>
                 <form onSubmit={(event)=>this.handleonSubmit(event)}>
                <label>your name:</label>
                <input type='text' value={this.state.name}
                onChange={(event)=>this.handleOnChangeName(event)}
                />
                <label>your age:</label>
                <input type='text' value={this.state.age}
                onChange={(event)=>this.handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
            </div>
        )
    }
}

export default UserInfor;