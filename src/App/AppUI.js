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
import { TodoEdit } from '../TodoEdit';

function AppUI() {
    const { loading, error, completeTodo, onDesable,
        likesM, likesN, searchedtodos, openModal, total,editTodo, openEdit } = React.useContext(todoContext)
    
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <TodosLoading />}

                {error && <TodosError />}

                {(!loading && !error) && (total === 0)
                    && <TodosEMpty />}

                {(!loading && total > 0) && searchedtodos.length === 0 && <p>No se encontro coincidencia</p>}

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
                        editTodo={() => editTodo(todo.id)}
                    />
                ))}


            </TodoList>

            <CreateTodoButton >+</CreateTodoButton>

            {(openModal && <Modal><Form Modal={('Modal')} /></Modal>) || (openEdit && <Modal><TodoEdit Edit={'Edit'} /></Modal>)}

        </>
    )
}
export { AppUI }