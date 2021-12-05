import React from 'react';
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButton from './CreateTodoButton';
import './App.css';

const todos = [{text: 'tarea 1', completed: false},
{text: 'tarea 2', completed: false},
{text: 'tarea 3', completed: false}
]

function App() {
  return (
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />
    <input placeholder="Cebolla" />
    <TodoList>
      {todos.map(todo=>(<TodoItem />))}      
    </TodoList>
    <CreateTodoButton />
    <button>+</button>
    </React.Fragment>
  );
}

export default App;
