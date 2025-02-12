import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";
import "../ModalWithForm/ModalWithForm.css";
function RegisterModal({ isOpen, onClose, onRegister, openLoginModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      email.includes("@") && password.length >= 6 && name.trim() !== "",
    );
  }, [email, password, name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password, name });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      containerClassName="modal__container_register"
      alternateButton={
        <button
          className="modal__or-signin-btn"
          onClick={openLoginModal}
          type="button"
        >
          <span className="modal__redirect"> or </span>
          Sign In
        </button>
      }
    >
      <label className="modal__label">
        Email *
        <input
          className="modal__input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
      </label>
      <label className="modal__label">
        Password *
        <input
          className="modal__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
      </label>
      <label className="modal__label">
        Name *
        <input
          className="modal__input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Name"
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
