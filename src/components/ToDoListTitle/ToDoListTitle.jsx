import './ToDoListTitle.css'

function ToDoListTitle({ text = 'To-Do' }) {

    return (<h1 className='header-title'>{text}</h1>);
}

export default ToDoListTitle;