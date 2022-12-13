import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { url } from '../../config';
import { useGlobalContext } from '../Context';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Share() {
    const {showShare, setShare, workingId} = useGlobalContext()

  return (
    <div>
      <Modal show={showShare} size="lg" onHide={() => setShare(true)} centered>
        <Modal.Body>
            <div className='row'>
                <div className='input-group'>
                    <input type="url" className='form-control form-control-lg' value={`${url.domain}form/${workingId}`} />
                    <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                        <Tooltip id="button-tooltip">
                            Copy Link
                        </Tooltip>
                    }
                    >
                    <button className="btn btn-outline-secondary"
                        onClick={() => {
                            var path=url.domain+"form/"+workingId
                            navigator.clipboard.writeText(path)
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2" viewBox="0 0 16 16">
                            <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z"/>
                            <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
                        </svg>
                    </button>
                    </OverlayTrigger>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShare(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
