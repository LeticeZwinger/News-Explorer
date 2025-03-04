import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SavedArticles from "../SavedArticles/SavedArticles";
import Header from "../Header/Header";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessSignupModal/SuccessSignupModal";
import LoginModal from "../LoginModal/LoginModal";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./App.css";

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openRegisterModal = () => setIsRegisterOpen(true);

  const openLoginModal = () => setIsLoginOpen(true);
  const openSuccessModal = () => setIsSuccessOpen(true);

  const closeAllModals = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(false);
    setIsSuccessOpen(false);
  };

  const handleRegister = async (userData) => {
    setIsRegisterOpen(false);
    setIsSuccessOpen(true);
  };

  const handleLogin = async (loginData) => {
    setIsLoginOpen(false);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                onSignUp={openRegisterModal}
                onSignIn={openLoginModal}
                setSearchQuery={setSearchQuery}
              />

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

              <SuccessModal
                isOpen={isSuccessOpen}
                onClose={() => setIsSuccessOpen(false)}
                openLoginModal={() => {
                  setIsSuccessOpen(false);
                  openLoginModal();
                }}
              />
              <NewsCardList searchQuery={searchQuery} />
              <About />
              <Footer />
            </>
          }
        />

        <Route path="/saved-articles" element={<SavedArticles />} />
      </Routes>
    </div>
  );
}

export default App;
