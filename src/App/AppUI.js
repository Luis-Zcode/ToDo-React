import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../TodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosErrors';
import { TodosEMpty } from '../TodosEMpty';
import { todoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { Form } from '../TodoForm';

function AppUI() {
    const { loading, error, completeTodo, onDesable,
        likesM, likesN, searchedtodos, openModal } = React.useContext(todoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <TodosLoading />}

                {error && <TodosError />}

                {(!loading && !error) && (searchedtodos.length === 0)
                    && <TodosEMpty />}
                {searchedtodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        completado={todo.completado}
                        text={todo.Text}
                        onComplete={() => completeTodo(todo.id)}
                        onDesable={() => onDesable(todo.id)}
                        likes={todo.likes}
                        likesM={() => likesM(todo.id)}
                        likesN={() => likesN(todo.id)}
                    />
                )) || (searchedtodos === 0 && <p>No se encontro ninguna coincidencia</p>)}
            </TodoList>

            <CreateTodoButton >+</CreateTodoButton>

            {(openModal) && <Modal><Form /></Modal>}
        </>
    )
}
export { AppUI }