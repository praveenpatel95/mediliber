import React from "react";
import {Button, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/fontawesome-free-regular";

function VideoModal({setVideoModal, videoModal}) {
    const handleClose = () => {
        setVideoModal(false)
    }
    return (
        <Modal show={videoModal} onHide={handleClose} size="lg" className="no_header_modal" centered>
            <Modal.Header className="justify-content-end">
                <Button type="button" onClick={() => handleClose()} className="text-white p-0 bg-transparent border-0"><FontAwesomeIcon
                    icon={faWindowClose} className="fa-2x"/></Button>
            </Modal.Header>
            <Modal.Body className="p-0 m-0">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/dqtyVVj3Ykk"
                        title="YouTube video player" frameBorder="0"
                        allow="autoplay;"
                        allowFullScreen></iframe>
            </Modal.Body>

        </Modal>
    )
}

export default VideoModal;