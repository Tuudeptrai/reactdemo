
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { toast } from 'react-toastify';
import _ from 'lodash';

const ModalResult=(props)=> {
  const {show, setShow, dataModalResult} = props;
  const handleClose = () => {
    setShow(false);
    }

  return (
    <>
    

      <Modal show={show} onHide={handleClose}  backdrop="static" className='Modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Result of the Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
                <div>
                Total question:<b>{dataModalResult.countTotal}</b>
              </div>
              <div>
                Total correct answer:<b>{dataModalResult.countCorrect}</b>
              </div>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Show answer
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalResult;