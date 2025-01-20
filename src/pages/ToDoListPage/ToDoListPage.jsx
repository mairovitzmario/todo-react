import './ToDoListPage.css'

import ToDoCard from '../../components/ToDoCard/ToDoCard'
import ToDoWrapper from '../../components/ToDoWrapper/ToDoWrapper';
import ToDoListTitle from '../../components/ToDoListTitle/ToDoListTitle';
import { ToDoContext } from '../../App';

import { useState, useContext, useEffect } from 'react'
import { useParams } from "react-router";
import { CloseButton } from '@mantine/core';
import { Link } from 'react-router';



function ToDoListPage() {
  let params = useParams();

  const { toDoLists, setToDoLists } = useContext(ToDoContext)


  const [toDoList, setToDoList] = useState(toDoLists[params.id]);

  const [task, setTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let newToDoLists = toDoLists;
    newToDoLists[params.id] = toDoList;
    setToDoLists(newToDoLists);
    console.log(toDoLists)
  }, [toDoList]);



  function onInputChange(e) {
    setTask(e.target.value);
  }

  function addToDoTask() {

    setErrorMessage('');
    if (task.length === 0) {
      setErrorMessage('Please enter a name for the task!');
    }
    else if (task.length <= 19) {
      setToDoList((t) => ({ ...t, list: [...t.list, task], }));
      setTask('');


    }
    else {
      setErrorMessage('Task name too long!');
    }

  }

  return (
    <>

      <div className='wrapper'>

        <Link to={`/`} style={{ textDecoration: "none" }}>
          <CloseButton className='close-button' size='xl' />
        </Link>

        <ToDoListTitle text={toDoList.name} />

        <div className='form-wrapper'>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Add a new task" value={task} onChange={onInputChange} />
            <button type="submit" onClick={addToDoTask}>Add</button>
          </form>
          < p className='error-message'>{errorMessage}</p>
        </div>

        {toDoList.list.map((task, index) => (
          <ToDoCard key={index} index={index} text={task} />
        )
        )}

      </div>
    </>
  )
}

export default ToDoListPage
