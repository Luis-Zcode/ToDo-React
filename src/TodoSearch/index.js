import React from 'react'
import './TodoSearch.css'
import { todoContext } from '../TodoContext'

function TodoSearch(){

    const {searchValue, setSeatchValue} = React.useContext(todoContext)

    return (
        <input placeholder="Buscar"
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
            setSeatchValue(event.target.value)
        }}
        />
    )
}

export {TodoSearch}