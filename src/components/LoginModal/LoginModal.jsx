import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useAuth } from "../../Context/AuthContext";
import { authorize } from "../../utils/auth";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, openRegisterModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setError("");
    }
  }, [isOpen]);

  useEffect(() => {
    setIsFormValid(email.includes("@") && password.length >= 6);
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authorize(email, password);
      onClose();
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalWithForm
      title="Sign In"
      buttonText={loading ? "Signing In..." : "Sign In"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      containerClassName="modal__container_login"
      alternateButton={
        <button
          className="modal__or-signup-btn"
          onClick={openRegisterModal}
          type="button"
        >
          <span className="modal__redirect">or</span> Sign Up
        </button>
      }
    >
      <label className="modal__label">
        Email
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
        Password
        <input
          className="modal__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
      </label>
      {error && <p className="modal__error">{error}</p>}
    </ModalWithForm>
  );
}

export default LoginModal;
