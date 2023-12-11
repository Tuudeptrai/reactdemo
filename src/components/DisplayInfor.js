import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

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
            <div className="display-infor-container">
                <img src={logo}/>
                <div><span className="blue" onClick={()=>{this.handleShowHide()}}>{this.state.isShowListUser===true?"hide user list":"show user list"}</span></div>
                <hr/>
                {this.state.isShowListUser &&
                <>
                    { listUsers.map((user)=>{
                            return (
                                <div key={user.id} className={+user.age > 18?"green":"red"}>
                                    <p>My name is {user.name}</p>
                                    <p>My age is {user.age}</p>
                                    <hr/>
                                </div>
                            )
                    })}
                </>
                 }
            </div>
        )
    }
}

export default DisplayInfor;