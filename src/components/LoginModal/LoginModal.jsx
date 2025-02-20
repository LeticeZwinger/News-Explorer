import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useAuth } from "../../Context/AuthContext";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onLogin, openRegisterModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsFormValid(email.includes("@") && password.length >= 6);
  }, [email, password]);

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5001/users?email=${email}&password=${password}`,
      );
      const data = await response.json();

      if (data.length > 0) {
        console.log("Login successful:", data[0]);
        login(data[0]);
        onClose();
      } else {
        console.error("Invalid credentials");
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("Something went wrong. Please try again.");
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
