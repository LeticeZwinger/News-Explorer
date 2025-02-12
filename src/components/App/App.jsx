import { useState } from "react";
import Header from "../Header/Header";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessSignupModal/SuccessSignupModal";
import LoginModal from "../LoginModal/LoginModal";
import About from "../About/About";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const openRegisterModal = () => setIsRegisterOpen(true);
  const openLoginModal = () => setIsLoginOpen(true);
  const openSuccessModal = () => setIsSuccessOpen(true);

  const closeAllModals = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(false);
    setIsSuccessOpen(false);
  };

  const handleRegister = async (userData) => {
    console.log("Registering:", userData);
    setIsRegisterOpen(false);
    setIsSuccessOpen(true);
  };

  const handleLogin = async (loginData) => {
    console.log("Logging in:", loginData);
    setIsLoginOpen(false);
  };

  return (
    <div className="app">
      <Header onSignUp={openRegisterModal} onSignIn={openLoginModal} />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={closeAllModals}
        onRegister={handleRegister}
        openLoginModal={() => {
          closeAllModals();
          openLoginModal();
        }}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeAllModals}
        onLogin={handleLogin}
        openRegisterModal={() => {
          closeAllModals();
          openRegisterModal();
        }}
      />

      <SuccessModal isOpen={isSuccessOpen} onClose={closeAllModals} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
