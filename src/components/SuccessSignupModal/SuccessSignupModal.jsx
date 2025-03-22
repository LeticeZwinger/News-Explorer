import { Modal } from "../Modal/Modal";
import "./SuccessSignupModal.css";

function SuccessModal({ isOpen, onClose, openLoginModal }) {
  return (
    <Modal
      name="success"
      isOpen={isOpen}
      onClose={onClose}
      containerClassName="modal__container_type_success"
    >
      <p className="modal__success-message">
        Registration successfully completed!
      </p>
      <button
        className="modal__or-signin-btn"
        onClick={() => {
          onClose();
          setTimeout(() => {
            openLoginModal();
          }, 100);
        }}
      >
        Sign in
      </button>
    </Modal>
  );
}

export default SuccessModal;
