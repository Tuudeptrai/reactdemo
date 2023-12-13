import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusSquare } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import { putCreateNewUser } from '../../../services/apiSevice';
import _ from 'lodash';

const ModalDeleteUser=(props)=> {
  const {show, setShow,currentUser} = props;
  console.log("curent",props.currentUser );

 

  const handleClose = () => {
    setShow(false);
    }
  const handleSubmitDel = () => {
    alert("me")
    }

 
  return (
    <>
    

      <Modal show={show} onHide={handleClose} size='xl' backdrop="static" className='Modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Delete confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row g-3">
                <p>Are you sure to delete <b>{currentUser&&currentUser.email?currentUser.email:"email not found"}</b></p>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={handleSubmitDel}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;