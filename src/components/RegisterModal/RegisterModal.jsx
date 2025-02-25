import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { register } from "../../utils/auth";
import { useAuth } from "../../Context/AuthContext";
import "./RegisterModal.css";
import "../ModalWithForm/ModalWithForm.css";

function RegisterModal({ isOpen, onClose, openLoginModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsFormValid(
      email.includes("@") && password.length >= 6 && name.trim() !== "",
    );
  }, [email, password, name]);

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await register(name, email, password);
      console.log("Registration successful:", response);
      login(response.user);
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
