import React from 'react';
import { TodoContext } from './../components/TodoContext';
import { TodoCounter } from './../components/TodoCounter';
import { TodoSearch } from './../components/TodoSearch';
import { TodoList } from './../components/TodoList';
import { TodoItem } from './../components/TodoItem';
import { CreateTodoButton } from './../components/CreateTodoButton';

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>hubo un error....</p>}
        {loading && <p>Estamos cargando</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {completeTodos(todo.text)}}
            onDelete={() => {deleteTodos(todo.text)}}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
};

export { AppUI }