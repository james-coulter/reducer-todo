import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducers.js';
import moment from 'moment';
import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [taskInput, setTaskInput] = useState('');

  const handleChange = e => {
    setTaskInput(e.target.value)
  }

  return (
    <div className="App">
      <div className='timeHead'>
      {moment(Date.now()).format('L')}
      </div>
      <h1>ToDo.</h1>
      <h2>let's get things done.</h2>
      <div className="inputButtons">
        <input 
          type="text"
          name="addtask"
          placeholder="Add Task"
          value={taskInput}
          onChange={handleChange}
        />
        <button onClick={() => {dispatch({ type: 'add', payload: taskInput});
         setTaskInput("");
      }}>Add</button>
        <button onClick={() => dispatch({ type: 'clear'})
      }>Clear Completed</button>
        </div>
      <header className="App-header">
      {state.map(task => 
      <div className='toDoItem'>
          <div className={`item${task.completed === true ? ' finished' : ''}`}
               key={task.id} 
               onClick={() => dispatch({ type: 'toggle', payload: task.id})}>
              <span>{task.item}</span>
          </div>
          <div className='time'>
          {moment().format("ddd, h:mmA ")}
          </div>
      </div>
        )}
      </header>
    </div>
  );
}

export default App;
