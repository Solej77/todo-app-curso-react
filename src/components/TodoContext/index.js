import React from 'react';
import { useLocalStorage } from './../../hooks/useLocalStorage';
const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const {
    item: todos,
    saceItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  };

  React.useEffect(() => {
    console.log('useEffect');
  }, [totalTodos]);

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodos,
      deleteTodos,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };