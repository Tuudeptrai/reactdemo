import React, { useState } from "react";

// class AddUserInfor extends React.Component{
 
//     state = {
//         name: 'tuu',
//         address: "gia lai",
//         age:30

//     }
  
//     handleOnChangeName(event){
//         this.setState({
//             name: event.target.value
//         })
//         // console.log(event.target.value);
//     }
//     handleOnChangeAge(event){
//         this.setState({
//             age: event.target.value
//         })
//         // bad code this.State.age = event.target.value
//     }
//     handleonSubmit(event){
//         event.preventDefault();   
//           this.props.handleAddnewUser({
//             id: Math.floor((Math.random()*100)+1) + "-random",
//             name: this.state.name,
//             age: this.state.age
//           });
//     }
//     render(){

//         return (
//             <>
//                  <div>My name is {this.state.name} and i am  {this.state.age}</div>
//                  <form onSubmit={(event)=>this.handleonSubmit(event)}>
//                 <label>your name:</label>
//                 <input type='text' value={this.state.name}
//                 onChange={(event)=>this.handleOnChangeName(event)}
//                 />
//                 <label>your age:</label>
//                 <input type='text' value={this.state.age}
//                 onChange={(event)=>this.handleOnChangeAge(event)}
//                 />
//                 <button>Submit</button>
//             </form>
//             </>
//         )
//     }
// }
const AddUserInfor = (props)=>{

    
    const [name, SetName] = useState('')
    const [address, Setaddress] = useState("gia lai")
    const [age, Setage] = useState('')

    const handleonSubmit = (event)=>{
        event.preventDefault();
        props.handleAddnewUser({
                        id: Math.floor((Math.random()*100)+1) + "-random",
                        name: name,
                        age: age
                      });
    }
    const handleOnChangeName = (event)=>{
        SetName( event.target.value)
    }
    const handleOnChangeAge = (event)=>{
        Setage( event.target.value)
    }
    return (
                    <>
                    <div>My name is {name} and i am  {age}</div>
                    <form onSubmit={(event)=>handleonSubmit(event)}>
                        <label>your name:</label>
                        <input type='text' value={name}
                        onChange={(event)=>handleOnChangeName(event)}/>
                        <label>your age:</label>
                        <input type='text' value={age}
                        onChange={(event)=>handleOnChangeAge(event)}/>
                        <button>Submit</button>
                    </form>
                    </>
                )
}
export default AddUserInfor;
