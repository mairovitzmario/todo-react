import { useState } from 'react'
import ToDoCard from '../../components/ToDoCard/ToDoCard';
import ToDoWrapper from '../../components/ToDoWrapper/ToDoWrapper';
import ToDoListTitle from '../../components/ToDoListTitle/ToDoListTitle';

import './ToDoListPage.css'





function ToDoListPage() {
  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function onInputChange(e) {
    setTask(e.target.value);
  }

  function addToDoTask() {
    setErrorMessage('');
    if (task.length === 0) {
      setErrorMessage('Please enter a name for the task!');
    }
    else if (task.length <= 19) {
      setToDoList((t) => [...t, task,]);
      setTask('');
    }
    else {
      setErrorMessage('Task name too long!');
    }

  }

  return (
    <>

      <div className='wrapper'>
        <ToDoListTitle />

        <div className='form-wrapper'>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Add a new task" value={task} onChange={onInputChange} />
            <button type="submit" onClick={addToDoTask}>Add</button>
          </form>
          < p className='error-message'>{errorMessage}</p>
        </div>

        <ToDoWrapper>
          {toDoList.map((task, index) => (
            <ToDoCard key={index} index={index} text={task} />
          )
          )}
        </ToDoWrapper>

      </div>
    </>
  )
}

export default ToDoListPage
