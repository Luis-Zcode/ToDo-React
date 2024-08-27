import React from 'react'
import './TodoCounter.css'
import { todoContext } from '../TodoContext'

function TodoCounter(){

    const {total, todosCompletados} = React.useContext(todoContext)

    return (
        <h1 className='TodoCounter'> 
            Has completado <span>{todosCompletados} </span> 
            de <span>{total}</span> TODOs
        </h1>
    )
}

export {TodoCounter}