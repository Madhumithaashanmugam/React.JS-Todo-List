import './App.css';
import React from 'react';
import AddTodo from './components/addTodo';
import TodoList from './components/todoLIst';
import DateTimeDisplay from './components/DateAndDIsplay';
const App =()=> {
  return (
    <div className="App">
      <div className='heading'><h1 className='sun'>Todo List</h1>
      <DateTimeDisplay/>
      </div>
      <AddTodo/>
      <p className='blank'></p>
      <TodoList/>
    </div>
  );
}

export default App;
