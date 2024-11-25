import React, { useContext, useState } from 'react'
import { todoContext } from '../context/store.jsx'

const AddToDo = () => {
     
    let [task,setTask]=useState('');
    const [deadline, setDeadline] = useState('');
    let {addToList,removeFromList}=useContext(todoContext);
   

    const handleChange=(e)=>{
       setTask(e.target.value);
    }
    const handleDeadlineChange = (e) => {
      setDeadline(e.target.value); // Update deadline state
    };
    const handleSubmit=(e)=>{
       e.preventDefault();

       if(task && deadline) {
      addToList({task,date:Date.now(),deadline,completed:false});
      setTask('');
      setDeadline('')
       }
        else{
            console.log("no task");
        }
    }

  return (
    <div className='py-7'>
        
        <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md sm:p-2">
        <h2 className="text-2xl text-center text-white mb-6">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter your new task"
            className="w-full h-32 bg-transparent border-2 border-zinc-600 text-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:p-2" value={task}
            onChange={handleChange}
            required
          />
           <input
            type="date"
            className="w-full mt-4 p-3 bg-transparent border-2 border-zinc-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:p-2"
            value={deadline}
            onChange={handleDeadlineChange}
            required
          />
          <button
            type="submit"
            className="w-full mt-4 p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddToDo