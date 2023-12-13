import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusSquare } from "react-icons/fa";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const ModalCreateUser=(props)=> {
  const {show, setShow} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [role, setRole] = useState('USER');

  const handleClose = () => setShow(false);
  const handleUpload = (event)=>{
    if(event.target&& event.target.files&&event.target.files[0]){
        setPreviewImage(URL.createObjectURL(event.target.files[0]))
        setImage(event.target.files[0])
    }else{
        // setPreviewImage('')
    }
    }
const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
  const handleSubmitAddUser =async ()=>{
    const isValidEmail = validateEmail(email);
    if(!isValidEmail){
        toast.error('inValid Email!')
        return;
    }
    if(!password){
        toast.error('inValid password!')
        return;
    }
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    let res = await axios.post('http://localhost:8081/api/v1/participant', data);
    console.log(res);
    if(res.data&& res.data.EC===0){
        toast.success('create user success!')
        handleClose();
    }
    if(res.data&& res.data.EC!==0){
        toast.error(res.data.EM)
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
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(event)=>setPassword(event.target.value)} value={password}/>
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

export default ModalCreateUser;