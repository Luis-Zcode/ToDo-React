import React from "react";
import ReactDOM from "react-dom";
import './Modal.css'

function Modal ({children}) {
    return ReactDOM.createPortal(
        <div className="modal">
            {children}
        </div>,
        document.getElementById('Modal')
    )
}

export { Modal }