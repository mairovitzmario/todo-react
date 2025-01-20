import './ToDoListPage.css'

import ToDoCard from '../../components/ToDoCard/ToDoCard'
import ToDoWrapper from '../../components/ToDoWrapper/ToDoWrapper';
import ToDoListTitle from '../../components/ToDoListTitle/ToDoListTitle';
import { ToDoContext } from '../../App';

import { useState, useContext, useEffect, createContext } from 'react'
import { useParams } from "react-router";
import { CloseButton } from '@mantine/core';
import { Link } from 'react-router';


export const SingleListContext = createContext()

function ToDoListPage() {
  let params = useParams();

  const { toDoLists, setToDoLists } = useContext(ToDoContext)


  const [toDoList, setToDoList] = useState(toDoLists[params.id]);

  const [taskText, setTaskText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  useEffect(() => {
    let newToDoLists = toDoLists;
    newToDoLists[params.id] = toDoList;
    setToDoLists(newToDoLists);


  }, [toDoList]);



  function onInputChange(e) {
    setTaskText(e.target.value);
  }

  function addToDoTask() {

    setErrorMessage('');
    if (taskText.length === 0) {
      setErrorMessage('Please enter a name for the task!');
    }
    else if (taskText.length <= 19) {
      setToDoList((t) => ({ ...t, list: [...t.list, { text: taskText, isCompleted: false }], }));
      setTaskText('');


    }
    else {
      setErrorMessage('Task name too long!');
    }

  }

  return (
    <SingleListContext.Provider value={{ toDoList, setToDoList }}>

      <div className='wrapper'>

        <Link to={`/`} style={{ textDecoration: "none" }}>
          <CloseButton className='close-button' size='xl' />
        </Link>

        <ToDoListTitle text={toDoList.name} />

        <div className='form-wrapper'>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Add a new task" value={taskText} onChange={onInputChange} />
            <button type="submit" onClick={addToDoTask}>Add</button>
          </form>
          < p className='error-message'>{errorMessage}</p>
        </div>

        {toDoList.list.map((task, index) => (


          <ToDoCard key={index} index={index} text={task.text} _isCompleted={task.isCompleted} />

        )
        )}

      </div>
    </SingleListContext.Provider>
  )
}

export default ToDoListPage
