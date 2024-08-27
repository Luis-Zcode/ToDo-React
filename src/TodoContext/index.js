import React from 'react'
import { useLocalStorage } from './useLocalStorage'

const todoContext = React.createContext()

function TodoProvider({ children }) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', [])

    const {
        item: contador,
        saveItem: saveContador,
    } = useLocalStorage('CONTADOR_V1', 0)

    const [searchValue, setSeatchValue] = React.useState('')

    const todosCompletados = todos.filter(todos => todos.completado).length

    let total = todos.length

    let searchedtodos = todos.filter((todos) => {
        return todos.Text.toLowerCase().includes(searchValue.toLowerCase())
    })


    let completeTodo = (id) => {
        let newTodo = [...todos]
        let todoIndex = newTodo.findIndex(
            (todo) => todo.id === id
        )
        newTodo[todoIndex].completado === true ? newTodo[todoIndex].completado = false
            : newTodo[todoIndex].completado = true

        saveTodos(newTodo)
    }

    const onDesable = (id) => {
        let newTodo = [...todos]
        let todoIndex = newTodo.findIndex(
            (todo) => todo.id === id
        )
        newTodo.splice(todoIndex, 1)
        saveTodos(newTodo)
    }

    const likesM = (id) => {
        let newTodo = [...todos]
        let todoIndex = newTodo.findIndex(
            (todo) => todo.id === id
        )
        newTodo[todoIndex].likes++
        saveTodos(newTodo)
    }

    const likesN = (id) => {
        let newTodo = [...todos]
        let todoIndex = newTodo.findIndex(
            (todo) => todo.id === id
        )
        if (newTodo[todoIndex].likes > 0) {
            newTodo[todoIndex].likes--
            saveTodos(newTodo)
        } else {
            alert('error')
        }
    }
    const [openModal, setOpenModal] = React.useState(false)

    const addTodo = (text) => {
        let newTodo = [...todos]
        newTodo.push(
            {
                id: contador + 1,
                Text: text,
                completado: false,
                likes: 0
            })
        saveContador(contador + 1)
        saveTodos(newTodo)
    }

    return (
        <todoContext.Provider value={{
            loading,
            error,
            todosCompletados,
            total,
            searchValue,
            setSeatchValue,
            searchedtodos,
            completeTodo,
            onDesable,
            likesM,
            likesN,
            setOpenModal,
            openModal,
            addTodo
        }} >
            {children}
        </todoContext.Provider>
    )
}

export { todoContext, TodoProvider }

