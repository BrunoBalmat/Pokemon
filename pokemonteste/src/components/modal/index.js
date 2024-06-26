import React from "react";
import "./modal.css"


export default function Modal({ isOpen, setCloseModal, children }) {
    if (isOpen) {
        return <div className="container" >
            <div className="janela">
               <div>{children}</div>
                <button onClick={setCloseModal}>Fechar</button>
            </div>
        </div>
    }
    return null
}