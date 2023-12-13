import ModalCreateUser from "./ModalCreateUser";
import './ManagerUser.scss';
import { FaPlusSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { getAllUser } from "../../../services/apiSevice"; 
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
    const [showAddnew, setShowAddnew] = useState(false);
    const [showUpdateUser, setShowUpdateUser] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const [listUsers, setListUsers] = useState([]);

    const handleClickBtnUpdate = (user)=>{
        setShowUpdateUser(true);
        console.log("update user:", user);
        setCurrentUser(user);
    };
    const fetchListUser =async()=>{
        let res = await getAllUser();
        // console.log(res)
        if(res.EC ===0){
            setListUsers(res.DT)
        }
    }
    const resetCurrentData =()=>{
        setCurrentUser('');
    }
    useEffect(()=>{
        fetchListUser();
    },[]);

    return (
        <>
            <div className="manage-user-container" >
                <div className="title">
                    Manage User
                </div>
                <div className="users-content">
                   <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={()=>setShowAddnew(true)}><FaPlusSquare />Add new user</button>  
                   </div>
                   <div className="user-table ">
                    <ModalCreateUser show={showAddnew} setShow={setShowAddnew} fetchListUser={fetchListUser} />
                   <TableUser listUsers={listUsers} handleClickBtnUpdate={handleClickBtnUpdate}/>
                   <ModalUpdateUser show={showUpdateUser} setShow={setShowUpdateUser} currentUser={currentUser} 
                   fetchListUser={fetchListUser}  resetCurrentData={resetCurrentData}/>
                   </div>
                </div>

            </div>
        </>
    )
}
export default ManageUser;