import ModalCreateUser from "./ModalCreateUser";
import './ManagerUser.scss';
import { FaPlusSquare } from "react-icons/fa";
import { useState } from "react";
import TableUser from "./TableUser";

const ManageUser = (props) => {
    const [showAddnew, setShowAddnew] = useState(false);;
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
                    <ModalCreateUser show={showAddnew} setShow={setShowAddnew} />
                   <TableUser/>
                   </div>
                </div>

            </div>
        </>
    )
}
export default ManageUser;