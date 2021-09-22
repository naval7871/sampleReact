import React from 'react';
import classes from './Modal.module.css';
// import ModalCard from './ModalCard/ModalCard'

const Modal=(props)=>{
    console.log(props)
return(
    <div className={classes.Modal} draggable onDragStart={(e)=>{}}>
        <img src={props.image} alt="sample" style={{width: "200px", height:"200px"}}/>
    </div>
)
}

export default Modal;
