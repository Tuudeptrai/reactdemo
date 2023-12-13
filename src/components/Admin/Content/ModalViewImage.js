import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';

const ModalViewImage = (props) => {
    const [previewImage, setPreviewImage] = useState('');
    const {show, setShow,currentUser} = props;
    const handleClose = () => {
        setShow(false); 
        setPreviewImage(''); 
        props.resetCurrentData();
        }
    useEffect(()=>{
            if(!_.isEmpty(currentUser)){
              if(currentUser.image){
                setPreviewImage(`data:image/jpeg;base64,${currentUser.image}`);
              }
            }
           
          },[currentUser]);
    return (
        <>
            <Modal show={show} onHide={handleClose} size='xl' backdrop="static" className='Modal-add-user'>
                <Modal.Header closeButton>
                <Modal.Title>View avatar</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: '600px' }}>
                        
                        <div className="col-md-12 image-preview">
                            {previewImage?<img src={previewImage} width='100%' height='550px'/>
                            :<span>image-preview</span>
                        }
                        </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalViewImage;