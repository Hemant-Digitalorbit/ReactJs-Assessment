import React, { useState } from 'react';
import './TodoList.css'; 

const TodoList = () => {

  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  // add todo
  const handleAddTodo = () => {
    if (inputValue.trim() === '') 
      return; 
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue('');
  };

  // remove
  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  // complete
  const handleToggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add Item......"
        />
        <button onClick={handleAddTodo}>+ Add</button>
      </div>

      <ul className="todo-list">
        {
          todos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
              <span onClick={() => handleToggleComplete(index)}>{todo.text}</span>
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TodoList;
