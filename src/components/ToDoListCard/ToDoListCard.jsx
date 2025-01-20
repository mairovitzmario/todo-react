import './ToDoListCard.css';

import { Link } from 'react-router';

import { getBrightness } from '../../utils.js';
import { ToDoContext } from '../../App.jsx';
import { useContext } from 'react';


function ToDoListCard({ name, color, id = -1 }) {
    const textColor = getBrightness(color) > 186 ? 'black' : 'white';
    const { toDoLists, setToDoLists } = useContext(ToDoContext)

    let list = id === -1 ? [] : toDoLists[id].list;

    const completedTasks = list.filter((task) => task.isCompleted).length;
    const totalTasks = list.length;

    const cardContent = (
        <div
            className="to-do-card"
            style={{
                backgroundColor: color,
                color: textColor,
                cursor: id !== -1 ? "pointer" : "default",
            }}
            aria-label={`${name} card`}
        >
            <h2 className="card-title">{name}</h2>
            <h3 className="card-tasks">
                {completedTasks}/{totalTasks}
            </h3>
        </div>
    );

    return id !== -1 ? (
        <Link to={`/list/${id}`} style={{ textDecoration: "none" }}>
            {cardContent}
        </Link>
    ) : (
        cardContent
    );
}

export default ToDoListCard;
