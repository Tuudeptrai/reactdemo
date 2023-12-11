import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

 class MyComponent extends React.Component{
   state = {
    listUsers:[
        {id: 1, name:"tuu banh bao", age :30},
        {id: 2, name:"tuu dep trai", age :31},
        {id: 3, name:"tuu hao hao", age :32}
    ]
   }
    render(){
        return (
           <div>
            <UserInfor/>
            <DisplayInfor listUsers={this.state.listUsers}/>
           </div>
        );
    }
}
export default MyComponent;