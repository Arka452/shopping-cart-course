import React from "react";
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import Wrapper from "../../../hoc/Wrapper";

const Modal = (props)=>{
    return(
        <Wrapper>
        <div className="modal" style={{
            transform: props.modal ? 'translateY(0)' : 'translateY(-100vh)'
        }}>
            
            {props.children}
        </div>
        <Backdrop show={props.modal} closeModal={props.closeModal}/>
        </Wrapper>
        
    )
}

export default Modal
