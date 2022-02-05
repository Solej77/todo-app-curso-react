import React from 'react';
import { TodoContext } from './../TodoContext'
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {
  const { setOpenModal } = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(prevState => !prevState);
  }
  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };