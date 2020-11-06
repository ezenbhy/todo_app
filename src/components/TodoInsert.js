import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ input, onChangeInput, onInsert}) => {
  

  const onChange = e => {
    onChangeInput(e.target.value);
  };

  const onSubmit = e => {
      onInsert(input);
      e.preventDefault();
      onChangeInput('');
    };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={input}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
