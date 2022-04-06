import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const SuccessModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Payment Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Your payment was Successful</p>
                    <p>An email containing your purchase invoice has been sent to {props.email}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
 
export default SuccessModal;