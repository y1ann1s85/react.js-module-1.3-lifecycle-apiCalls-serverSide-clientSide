import React from 'react';

function ToDoStatic(props) {

  return (
    <div className="todo-item">
      <p>ToDo: {props.description} / Deadline: {props.deadline}</p>
      <br></br>
    </div>
  )

}
export default ToDoStatic;