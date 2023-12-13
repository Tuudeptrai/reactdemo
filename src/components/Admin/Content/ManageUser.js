import ModalCreateUser from "./ModalCreateUser";
import './ManagerUser.scss';
import { FaPlusSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { getAllUser } from "../../../services/apiSevice"; 

const ManageUser = (props) => {
    const [showAddnew, setShowAddnew] = useState(false);

    const [listUsers, setListUsers] = useState([]);

    const fetchListUser =async()=>{
        let res = await getAllUser();
        // console.log(res)
        if(res.EC ===0){
            setListUsers(res.DT)
        }
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
                   <TableUser listUsers={listUsers}/>
                   </div>
                </div>

            </div>
        </>
    )
}
export default ManageUser;