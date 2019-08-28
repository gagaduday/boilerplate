import React from 'react';

const Todo = (props) => {
  return (
    <div>
      {/* <div>
        <button onClick={props.handleDelete}>X</button>
      </div> */}
      <div>{props.content}</div>
      {/* <div>
        <button onClick={props.handleComplete}>O</button>
      </div> */}
    </div>
  );
};

export default Todo;
