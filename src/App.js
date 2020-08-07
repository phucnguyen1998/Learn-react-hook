import React, { useState } from 'react';
import './App.scss';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Phuc" },
    { id: 2, title: "Nguyen" },
    { id: 3, title: "Ngoc" }
  ])


  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList)
  }

  function handleTodoFormSubmit(formValue) {
    const newTodo = {
      id: todoList.length + 3, ...formValue
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList)

  }

  return (
    <div className="app">
      <TodoList todo={todoList} onTodoClick={handleTodoClick} />
      <TodoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}

export default App;
