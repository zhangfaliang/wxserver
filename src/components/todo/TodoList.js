import React, { Component } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
    return (
      <ul>
        {
          todos&&todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={()=>onTodoClick(index+1)}></Todo>
          ))
        }
      </ul>
    );
}


export default TodoList;