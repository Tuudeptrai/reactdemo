import React from "react";

class DisplayInfor extends React.Component{


    render(){

        console.log(this.props)
        
        const {listUsers} = this.props;

        return (
            <div>
                { listUsers.map((user)=>{
                    return (
                        <div key={user.id}>
                            <p>My name is {user.name}</p>
                            <p>My age is {user.age}</p>
                             <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfor;