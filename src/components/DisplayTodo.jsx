import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { todoContext } from '../context/store';

const DisplayTodo = () => {

  const {removeFromList,todo,markAsCompleted}=useContext(todoContext);
  return (
    <div>   
      {todo.length >0 ? 
    todo.map((data,index)=>{
    return <Todo data={data} removeFromList={removeFromList} toggle={markAsCompleted} key={index}/>
    }) : <p>No tasks Available</p>
  }
        
    </div>
  )
}


export default DisplayTodo
const Todo = ({ data, removeFromList, toggle }) => {
  const timestamp = data.date; // Assuming date is stored as a timestamp
  const time = new Date(timestamp).toLocaleString(); // Format timestamp into readable date and time

  return (
    <div
      className="p-2 bg-zinc-800 rounded-lg shadow-lg w-full max-w-md flex justify-between items-center mt-2"
      style={{ minWidth: '350px' }}
    >
      {/* Task and Date */}
      <div className="flex-1">
      <div className="text-sm text-gray-400">posted on:{time}</div> 
        <div
          className={`${
            data.completed ? 'line-through text-gray-400' : 'text-white'
          } text-ellipsis overflow-hidden text-xl`}
          style={{ minWidth: '0' }}
        >
          {data.task}
        </div>
      
        <div className="text-sm text-red-500">deadline:{data.deadline}</div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 items-start">
        {/* Delete Button */}
        <button
          className="border-none p-1 text-red-500 hover:text-red-700"
          onClick={() => removeFromList(data.task)}
        >
          <DeleteIcon />
        </button>

        {/* Toggle Completed Button */}
        {data.completed === false ? (
          <button
            className="border-none p-1 text-green-500 hover:text-green-700"
            onClick={() => toggle(data.task, true)}
          >
            <DoneIcon />
          </button>
        ) : (
          <button
            className="border-none p-1 text-yellow-500 hover:text-yellow-700"
            onClick={() => toggle(data.task, false)}
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
};
