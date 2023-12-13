import ModalCreateUser from "./ModalCreateUser";
import './ManagerUser.scss';
import { FaPlusSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
import TableUser from "./TableUser";
import { getAllUser, getPaginateUser } from "../../../services/apiSevice"; 
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewImage from "./ModalViewImage";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
    const LIMITUSER = 6;
    const [showAddnew, setShowAddnew] = useState(false);
    const [showUpdateUser, setShowUpdateUser] = useState(false); 
    const [showViewUser, setShowViewUser] = useState(false); 
    const [showDelUser, setShowDelUser] = useState(false); 
    const [currentUser, setCurrentUser] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setpageCount] = useState(0);

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
    const fetchListUserPaginate =async(page)=>{
        let res = await getPaginateUser(page,LIMITUSER);
        console.log("res",res)
        if(res.EC ===0){
            setListUsers(res.DT.users);
            setpageCount(res.DT.totalPages);
        }
    }
    const resetCurrentData =()=>{
        setCurrentUser('');
    }
    useEffect(()=>{
        fetchListUserPaginate(1);
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
                    <ModalCreateUser show={showAddnew} setShow={setShowAddnew} 
                    fetchListUser={fetchListUserPaginate}
                     pageCount={pageCount}
                     currentPage={currentPage}
                     setCurrentPage={setCurrentPage}
                    />

                   <TableUserPaginate listUsers={listUsers} 
                   handleClickBtnUpdate={handleClickBtnUpdate} 
                   handleClickBtnView={handleClickBtnView}
                   handleClickBtnDelUser={handleClickBtnDelUser}
                   fetchListUserPaginate={fetchListUserPaginate}
                   pageCount={pageCount}
                   currentPage={currentPage}
                   setCurrentPage={setCurrentPage}
                   />

                   <ModalUpdateUser show={showUpdateUser} setShow={setShowUpdateUser} currentUser={currentUser} 
                   fetchListUser={fetchListUserPaginate}  resetCurrentData={resetCurrentData}
                   currentPage={currentPage}
                   setCurrentPage={setCurrentPage}
                   />

                   <ModalViewImage show={showViewUser} setShow={setShowViewUser} 
                   resetCurrentData={resetCurrentData}  currentUser={currentUser}/>

                   <ModalDeleteUser show={showDelUser} setShow={setShowDelUser} 
                   fetchListUser={fetchListUserPaginate}
                   currentPage={currentPage}
                   setCurrentPage={setCurrentPage}
                   resetCurrentData={resetCurrentData}  currentUser={currentUser}/>
                   </div>
                </div>

            </div>
        </>
    )
}
export default ManageUser;