import React from "react";

class DisplayInfor extends React.Component{

    state = {
        isShowListUser: true
    }

    handleShowHide(){
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render(){

        console.log(this.props)
        
        const {listUsers} = this.props;

        return (
            <div>
                <div><span className="green" onClick={()=>{this.handleShowHide()}}>{this.state.isShowListUser===true?"hide user list":"show user list"}</span></div>
                {this.state.isShowListUser &&
                <div>
                    { listUsers.map((user)=>{
                            return (
                                <div key={user.id} className={+user.age > 18?"green":"red"}>
                                    <p>My name is {user.name}</p>
                                    <p>My age is {user.age}</p>
                                    <hr/>
                                </div>
                            )
                    
                        
                    })}
                </div>
                 }
            </div>
        )
    }
}

export default DisplayInfor;