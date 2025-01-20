import './ToDoListCard.css';
import { getBrightness } from '../../utils.js';

function ToDoCard({ name, color, list = [], clickable = false }) {
    const textColor = getBrightness(color) > 186 ? 'black' : 'white';

    return (
        <div
            className="to-do-card"
            style={{
                backgroundColor: color,
                color: textColor,
                cursor: clickable ? 'pointer' : 'default'
            }}
            aria-label={`${name} card`}
        >
            <h2 className="card-title">{name}</h2>
            <h3 className='card-tasks'>{list.filter((task) => task.isChecked).length}/{list.length}</h3>
        </div>
    );
}

export default ToDoCard;
