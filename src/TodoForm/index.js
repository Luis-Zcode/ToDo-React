import React from 'react'
import './TodoForm.css'
import { todoContext } from '../TodoContext'
import { ReactComponent as TODOSVG } from '../TodoIcon/todo.svg'

function Form() {

    const {
        addTodo,
        setOpenModal,
        
    } = React.useContext(todoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <p id="heading">Crear Todo</p>
            <div className="field">
                <TODOSVG />
                <textarea
                    value={newTodoValue}
                    onChange={(event) => onChange(event)}
                    className="input-field"
                    placeholder='Nuevo TODO'
                />
            </div>
            <div className="btn">
                <button className="button2" onClick={onCancel}>Cancelar</button>
            </div>
            <button className="button1">Crear Todo</button>
        </form>
    )

}

export { Form }