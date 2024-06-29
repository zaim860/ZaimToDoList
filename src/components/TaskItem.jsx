import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';

const TaskItem = ({ task, deleTask, toggleCheck }) => {
  return (
    <li className='items'>
      <div className="items-text">
        <input type="checkbox" checked={task.checked}
        onChange={() => toggleCheck(task.taskName)} />
        <p className={task.checked? 'isChecked' : ''}>{task.taskName}</p>
      </div>
      <MdDeleteSweep className="delete-icon" onClick={() => deleTask(task.taskName)} />
    </li>
  );
}

export default TaskItem;