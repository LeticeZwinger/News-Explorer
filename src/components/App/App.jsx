import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import SavedArticles from "../SavedArticles/SavedArticles";
import Header from "../Header/Header";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessSignupModal/SuccessSignupModal";
import LoginModal from "../LoginModal/LoginModal";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import LearnMore from "../LearnMore/LearnMore";
import "./App.css";

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { logout } = useAuth();

  const openRegisterModal = () => setIsRegisterOpen(true);

  const openLoginModal = () => setIsLoginOpen(true);

  const closeAllModals = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(false);
    setIsSuccessOpen(false);
  };

  const handleRegister = async (userData) => {
    closeAllModals();
    setTimeout(() => {
      setIsSuccessOpen(true);
    }, 100);
  };

  const handleLogin = async (loginData) => {
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setSearchQuery("");
    logout();
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header
                onSignUp={openRegisterModal}
                onSignIn={openLoginModal}
                onLogout={handleLogout}
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
            </div>
          }
        />

        <Route
          path="/saved-articles"
          element={<SavedArticles onLogout={handleLogout} />}
        />
        <Route path="/learn-more" element={<LearnMore />}></Route>
      </Routes>
    </div>
  );
}

export default App;
