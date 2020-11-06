import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'; //조건부 스타일링
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', todo.checked )} onClick={() => onToggle(todo.id)}>
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo.text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(todo.id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
