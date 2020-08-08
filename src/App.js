import React, { useState, useEffect } from 'react';
import './App.scss';
import queryString from 'query-string'
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';
import PostList from './component/PostList';
import Pagination from './component/Pagination';

function App() {
  // State
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Phuc" },
    { id: 2, title: "Nguyen" },
    { id: 3, title: "Ngoc" }
  ])
  const [postList, setPostList] = useState([])
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1
  })
  // End State

  useEffect(() => {
    async function fetchListPost() {
      try {
        const paramString = queryString.stringify(filters);
        const requsetUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requsetUrl);
        const responseJSON = await response.json();

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }

    }
    fetchListPost()
  }, [filters])

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

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  return (
    <div className="app">
      <TodoList todo={todoList} onTodoClick={handleTodoClick} />
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
