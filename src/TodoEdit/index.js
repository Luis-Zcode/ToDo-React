import React from 'react'
import './TodoEdit.css'
import { todoContext } from '../TodoContext'

function TodoEdit () {

    const {
        edit,
        setOpenEdit,
        anteriorNombre
    } = React.useContext(todoContext)

    const [newTodoValue, setNewTodoValue] = React.useState(anteriorNombre)
    const onSubmit = (event) => {
        event.preventDefault()
        edit(newTodoValue)
        setOpenEdit(false)
    }

    const onCancel = () => {
        setOpenEdit(false)
    }

    const onchange = (event) => {
        setNewTodoValue(event.target.value)
    }
        return (
            <form className="form" onSubmit={onSubmit}>
                <p id="heading">Editar Todo</p>
                <div className="field">
                    <textarea
                        value={newTodoValue}
                        onChange={(event) => onchange(event)}
                        className="input-field"
                        placeholder='Editar todo'
                    />
                </div>
                <div className="btn">
                    <button className="button2" onClick={onCancel}>Cancelar</button>
                </div>
                <button className="button1">Editar</button>
            </form>
        )
}

export { TodoEdit }