import React from 'react'
import './TodoButton.css'
import { todoContext } from '../TodoContext'


function CreateTodoButton(){
    const {openModal,setOpenModal} = React.useContext(todoContext)
    
    return (
        <button className='CreateTodoButton' 
        onClick={() => openModal ? setOpenModal(false) : setOpenModal(true)}
        >+
        </button>
    )
}

export {CreateTodoButton}