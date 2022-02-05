import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { TodoEmpty } from '../TodoEmpty';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodoError />}
        {loading && <TodoLoading />}
        {(!loading && !searchedTodos.length) && <TodoEmpty />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {completeTodo(todo.text)}}
            onDelete={() => {deleteTodo(todo.text)}}
          />
        ))}
      </TodoList>

      {!!openModal &&
        <Modal>
          <TodoForm />
        </Modal>
      }

      <CreateTodoButton />
    </>
  );
};

export { AppUI }