import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

//  class MyComponent extends React.Component{
//    state = {
//     listUsers:[
//         {id: 1, name:"tuu banh bao", age :16},
//         {id: 2, name:"tuu dep trai", age :31},
//         {id: 3, name:"tuu hao hao", age :68}
//     ]
//    }
//    handleAddnewUser = (userObject)=>{
//     console.log("bypass data", userObject)
//     this.setState({
//         listUsers: [userObject, ...this.state.listUsers]
//     })
//    }
//    handleDelnewUser = (userId)=>{
//     this.setState({
//         listUsers: [...this.state.listUsers].filter(item => item.id !==userId)
//     })
//    }
//     render(){
//         return (
//            <>
//             <AddUserInfor handleAddnewUser={this.handleAddnewUser}/>
//             <hr/>
//             <DisplayInfor listUsers={this.state.listUsers}
//             handleDelnewUser={this.handleDelnewUser}
//             />
//            </>
//         );
//     }
// }

const MyComponent = (props) => {

    const [listUsers, setListUser] = useState([
                {id: 1, name:"tuu banh bao", age :16},
                {id: 2, name:"tuu dep trai", age :31},
                {id: 3, name:"tuu hao hao", age :68}
            ]);

    const handleAddnewUser = (userObject)=>{
            console.log("bypass data", userObject)
            setListUser([userObject, ...listUsers])
           }
    const handleDelUser = (userId)=>{
            setListUser([...listUsers].filter(item => item.id !==userId))
           }

    return (
                   <>
                    <AddUserInfor handleAddnewUser={handleAddnewUser}/>
                    <hr/>
                    <DisplayInfor listUsers={listUsers}
                    handleDelUser={handleDelUser}
                    />
                   </>
                );

}
export default MyComponent;