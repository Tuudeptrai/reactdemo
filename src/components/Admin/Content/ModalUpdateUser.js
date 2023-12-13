import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusSquare } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import { postCreateNewUser,putCreateNewUser } from '../../../services/apiSevice';
import _ from 'lodash';

const ModalUpdateUser=(props)=> {
  const {show, setShow,currentUser} = props;
  console.log("curent",props.currentUser );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [role, setRole] = useState('USER');

  useEffect(()=>{
    if(!_.isEmpty(currentUser)){
      setEmail(currentUser.email);
      setPassword(currentUser.password);
      setUsername(currentUser.username);
      setImage("");
      if(currentUser.image){
        setPreviewImage(`data:image/jpeg;base64,${currentUser.image}`);
      }
     
      setRole(currentUser.role);
    }
   
  },[currentUser]);

  const handleClose = () => setShow(false);
  const handleUpload = (event)=>{
    if(event.target&& event.target.files&&event.target.files[0]){
        setPreviewImage(URL.createObjectURL(event.target.files[0]))
        setImage(event.target.files[0])
    }else{
        // setPreviewImage('')
    }
    }

  const handleSubmitAddUser =async ()=>{
    let data = await putCreateNewUser(username, role, image, currentUser.id);
    console.log(data);
    if(data&& data.EC===0){
        toast.success(data.EM)
        handleClose();
        await props.fetchListUser();
    }
    if(data&& data.EC!==0){
        toast.error(data.EM)
        handleClose();
    }
  
  }

 
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} size='xl' backdrop="static" className='Modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" disabled
                    className="form-control" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label  className="form-label">Password</label>
                    <input type="password" disabled
                    className="form-control" onChange={(event)=>setPassword(event.target.value)} value={password}/>
                </div>
                
                <div className="col-md-6">
                    <label  className="form-label">Username</label>
                    <input type="text" className="form-control" onChange={(event)=>setUsername(event.target.value)} value={username}/>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Roles</label>
                    <select className="form-select"  onChange={(event)=>setRole(event.target.value)} value={role}>
                    <option  value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    </select>
                </div>
                <div className="col-md-12">
                    <label  className="form-label label-upload" htmlFor='labelUpload'><FaPlusSquare />Upload Image</label>
                    <input type="file" hidden id='labelUpload'  onChange={(event)=>handleUpload(event)}  />
                </div>
                <div className="col-md-12 image-preview">
                    {previewImage?<img src={previewImage} width='350px' height='150px'/>
                    :<span>image-preview</span>
                }
                </div>
                
                </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitAddUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdateUser;