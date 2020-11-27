import React from "react"
import googleIcon from "./../images/google.svg"
const Modal = ({ visible, handleOnCloseModal, authGoogleAcount }) => {
  return (
    <div
      className={
        visible ? "gv-modal-overlay gv-modal-show" : "gv-modal-overlay"
      }
    >
      <div className="gv-login-wrapper gv-in-modal">
        <button className="gv-btn gv-btn-signin" onClick={authGoogleAcount}>
          <img
            src={googleIcon}
            width="24"
            alt="google-login"
            className="gv-mr-4"
          />
          Iniciar Sesión con Google
        </button>
        <button
          type="button"
          className="gv-modal-close  gv-btn gv-btn-sm gv-btn-red gv-m-0"
          onClick={handleOnCloseModal}
        >
          <i className="fal fa-times" />
        </button>
      </div>
    </div>
  )
}

export default Modal
