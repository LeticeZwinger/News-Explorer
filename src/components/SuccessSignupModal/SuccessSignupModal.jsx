import { Modal } from "../Modal/Modal";
import "./SuccessSignupModal.css";

function SuccessModal({ isOpen, onClose, openLoginModal }) {
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
      <button className="modal__or-signin-btn" onClick={openLoginModal}>
        Sign in
      </button>
    </Modal>
  );
}

export default SuccessModal;
