import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Stats from "./components/Stats";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

function deleTask(deleTaskName){
  setToDoList(toDoList.filter(task => task.
    taskName !== deleTaskName))
}

function toggleCheck(taskName) {
   setToDoList((prevToDoList) =>
     prevToDoList.map(task => 
      task.taskName === taskName ? { ...task, 
  checked: !task.checked} : task,
    ),
   );
}


  console.log(toDoList);
  return (
    <>
      <div className="container">
        <h1>Za'im To Do List</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <span>To Do</span>
          <ul className="list-items">
            {toDoList.map((item, index) => (
              <TaskItem key={index} task={item}
              deleTask = {deleTask} toggleCheck={toggleCheck}  />
            ))}
          </ul>
          {toDoList.length === 0 ? (
            <p className="notify">You are done! </p> 
           ) : null }
         
        </div>
      </div>
      <Stats toDoList={toDoList} />
    </>
  );
}

export default App;