import React from 'react';
import {connect} from 'react-redux';
import todos, { changeInput, insert, toggle, remove} from '../modules/todos'
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './TodoTemplate.scss';

const TodoTemplate = ({input, todos, changeInput, insert, toggle, remove}) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">
          <TodoInsert input={input} onInsert={insert} onChangeInput={changeInput} />
          <TodoList todos={todos} onRemove={remove} onToggle={toggle} />
      </div>
    </div>
  );
};

export default connect(
  ({todos}) => ({
      input: todos.input,
      todos: todos.todos,
  }),
  {changeInput, insert, toggle, remove,},
)(TodoTemplate);
