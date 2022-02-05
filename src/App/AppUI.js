import React from 'react';
import { TodoCounter } from './../components/TodoCounter';
import { TodoSearch } from './../components/TodoSearch';
import { TodoList } from './../components/TodoList';
import { TodoItem } from './../components/TodoItem';
import { CreateTodoButton } from './../components/CreateTodoButton';

const AppUI = ({
  error,
  loading,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodos,
  deleteTodos,
}) => {
  return (
    <>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue= {searchValue}
        setSearchValue= {setSearchValue}
      />

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