import React from 'react';
import AddBar from './AddBar';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="ui container">
      <AddBar />
      <TodoList />
    </div>
  );
};

export default App;
