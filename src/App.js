import React from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
