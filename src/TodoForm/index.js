import React from 'react'
import './TodoForm.css'
import { todoContext } from '../TodoContext'
import { ReactComponent as TODOSVG } from '../TodoIcon/todo.svg'

function Form() {

    const {
        addTodo,
        setOpenModal,
        newTodoValue,
        setNewTodoValue,
        id,
        edit,
        setId
    } = React.useContext(todoContext)
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
        setNewTodoValue('')
    }

    const onCancel = () => {
        setOpenModal(false)
        setNewTodoValue('')
        setId()
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const update = (event) => {
        event.preventDefault()
        edit(id, newTodoValue)
        setOpenModal(false)
        setNewTodoValue('')
        setId()
    }

    return (
        <form className="form" onSubmit={(id ? update : onSubmit)}>
            <p id="heading">{(id ? 'Actualizar Todo' : 'Crear Todo')}</p>
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
            <button className="button1">{(id ? 'Actualizar' : 'Crear Todo')}</button>
        </form>
    )

}

export { Form }