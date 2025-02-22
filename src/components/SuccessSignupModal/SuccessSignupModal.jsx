import { Modal } from "../Modal/Modal";
import "./SuccessSignupModal.css";

function SuccessModal({ isOpen, onClose }) {
  return (
    <Modal
      name="success"
      isOpen={isOpen}
      onClose={onClose}
      containerClassName="modal__container_success"
    >
      <p className="modal__success-message">
        Registration successfully completed!
      </p>
      <button className="modal__or-signin-btn" onClick={onClose}>
        Sign in
      </button>
    </Modal>
  );
}

export default SuccessModal;

//for later when modal is styled
