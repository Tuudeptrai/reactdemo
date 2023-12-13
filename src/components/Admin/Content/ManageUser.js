import ModalCreateUser from "./ModalCreateUser";
import './ManagerUser.scss';
import { FaPlusSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { getAllUser } from "../../../services/apiSevice"; 
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewImage from "./ModalViewImage";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = (props) => {
    const [showAddnew, setShowAddnew] = useState(false);
    const [showUpdateUser, setShowUpdateUser] = useState(false); 
    const [showViewUser, setShowViewUser] = useState(false); 
    const [showDelUser, setShowDelUser] = useState(false); 
    const [currentUser, setCurrentUser] = useState({});

    const [listUsers, setListUsers] = useState([]);

    const handleClickBtnUpdate = (user)=>{
        setShowUpdateUser(true);
        setCurrentUser(user);
    };
    const handleClickBtnView = (user)=>{
        setShowViewUser(true);
        setCurrentUser(user);
    };
    const handleClickBtnDelUser= (user)=>{
        setShowDelUser(true);
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

                   <TableUser listUsers={listUsers} 
                   handleClickBtnUpdate={handleClickBtnUpdate} 
                   handleClickBtnView={handleClickBtnView}
                   handleClickBtnDelUser={handleClickBtnDelUser}/>

                   <ModalUpdateUser show={showUpdateUser} setShow={setShowUpdateUser} currentUser={currentUser} 
                   fetchListUser={fetchListUser}  resetCurrentData={resetCurrentData}/>

                   <ModalViewImage show={showViewUser} setShow={setShowViewUser} 
                   resetCurrentData={resetCurrentData}  currentUser={currentUser}/>

                   <ModalDeleteUser show={showDelUser} setShow={setShowDelUser} 
                   resetCurrentData={resetCurrentData} fetchListUser={fetchListUser} currentUser={currentUser}/>
                   </div>
                </div>

            </div>
        </>
    )
}
export default ManageUser;