import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { register } from "../../utils/auth";
import "./RegisterModal.css";
import "../ModalWithForm/ModalWithForm.css";

function RegisterModal({ isOpen, onClose, onRegister, openLoginModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setError("");
    }
  }, [isOpen]);

  useEffect(() => {
    setIsFormValid(
      email.includes("@") && password.length >= 4 && name.trim() !== "",
    );
  }, [email, password, name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await register(name, email, password);
      onClose();
    } catch (err) {
      console.error("Registration failed:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText={loading ? "Signing Up..." : "Sign Up"}
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
      {error && <p className="modal__error">{error}</p>}
    </ModalWithForm>
  );
}

export default RegisterModal;
