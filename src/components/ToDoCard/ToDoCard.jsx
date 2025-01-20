import './ToDoCard.css';
import React, { useEffect } from 'react';
import { useState, useContext } from 'react';

import { SingleListContext } from '../../pages/ToDoListPage/ToDoListPage'

function ToDoCard({ index, text, _isCompleted }) {
    const [firstTime, setFirstTime] = useState(true);
    const [isCompleted, setIsCompleted] = useState(_isCompleted);
    const { toDoList, setToDoList } = useContext(SingleListContext)


    useEffect(() => {
        console.log(isCompleted);
        let newList = toDoList.list;
        newList[index].isCompleted = isCompleted;
        setToDoList(t => ({ ...t, list: newList }))
    }, [isCompleted,])

    function toggleCompleted() {
        setFirstTime(false);
        setIsCompleted(prevIsCompleted => !prevIsCompleted);


    }



    return (
        <div id={"todocard" + index.toString()} className='todo-card' onClick={toggleCompleted}>

            <h2 className={`todo-title ${isCompleted ? 'crossed' : (firstTime ? '' : 'uncrossed')}`}>
                {text}
            </h2>


            <div className="checkbox-wrapper-37">
                <input type="checkbox" name="checkbox" id={"checkbox" + index.toString()} checked={isCompleted} disabled />
                <label htmlFor={"checkbox" + index.toString()} className="terms-label">
                    <svg
                        className="checkbox-svg"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <mask id="path-1-inside-1_476_5-37" fill="white">
                            <rect width="200" height="200" />
                        </mask>
                        <rect
                            width="200"
                            height="200"
                            className="checkbox-box"
                            strokeWidth="40"
                            mask="url(#path-1-inside-1_476_5-37)"
                        />
                        <path
                            className="checkbox-tick"
                            d="M52 111.018L76.9867 136L149 64"
                            strokeWidth="15"
                        />
                    </svg>
                </label>
            </div>


        </div>
    );
}

export default ToDoCard;