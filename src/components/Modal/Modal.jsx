import { useEffect } from "react";
import "./Modal.css";

export const Modal = ({
  name,
  onClose,
  children,
  isOpen,
  containerClassName,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal modal__type_${name} ${isOpen ? "modal__opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className={`modal__container ${containerClassName}`}>
        {children}
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
      </div>
    </div>
  );
};
