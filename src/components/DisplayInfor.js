import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

// class DisplayInfor extends React.Component{

//     constructor(props){
//         console.log("alo constructor ")
//         super(props);
//         this.state = {
//             isShowListUser: true
//         }
//     }
//     state = {
//         isShowListUser: true
//     }

//     handleShowHide(){
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })
//     }

//     componentDidMount(){
//         console.log("alo componentDidMount ")
//         setTimeout(()=>{
//             document.title = "componentDidMount"
//         },300)
       
//     }

//     componentDidUpdate(prevProps, prevState){
//         document.title = "componentDidUpdate"
//         console.log("alo componentDidUpdate ")
//     }
//     render(){

//         console.log("alo render ")
        
//         const {listUsers} = this.props;

//         return (
//             <div className="display-infor-container">
//                 <div><span className="blue" onClick={()=>{this.handleShowHide()}}>{this.state.isShowListUser===true?"hide user list":"show user list"}</span></div>
//                 <hr/>
//                 {this.state.isShowListUser &&
//                 <>
//                     { listUsers.map((user)=>{
//                             return (
//                                 <div key={user.id} className={+user.age > 18?"green":"red"}>
//                                     <p>My name is {user.name}</p>
//                                     <p>My age is {user.age}</p>
//                                     <button onClick={()=>{this.props.handleDelnewUser(user.id)}}>Delete</button>
//                                     <hr/>
//                                 </div>
//                             )
//                     })}
//                 </>
//                  }
//             </div>
//         )
//     }
// }
const DisplayInfor = (props) => {
    const { listUsers } = props;
  
    const [isShowListUser, setShowListUser] = useState(true);
  
    const handleShowHide = () => {
      setShowListUser(!isShowListUser);
    };
  
    useEffect(
        ()=>{
            console.log(">>>useEffect")
            if(listUsers.length===0){
                alert("me")
            }
    },[listUsers])

    return (
      <div className="display-infor-container">
        <div>
          <span className="blue" onClick={() => handleShowHide()}>
            {isShowListUser === true ? "hide user list" : "show user list"}
          </span>
        </div>
        {isShowListUser && (
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <p>My name is {user.name}</p>
                  <p>My age is {user.age}</p>
                  <button onClick={() => { props.handleDelUser(user.id) }}>Delete</button>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  };
  
  export default DisplayInfor;
  