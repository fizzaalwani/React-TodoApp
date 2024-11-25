import { createContext } from "react";
import { useState } from "react";

export const todoContext=createContext(null);

export const TodoProvider=({children})=>{
    const [todo, setTodo] = useState([]);

    const addToList=(todoTask)=>{
      setTodo((prev)=>[...prev,todoTask]);
       console.log(todo); 
    }
  
    const removeFromList=(todoTask)=>{
      setTodo((prev)=> prev.filter((item)=> item.task!==todoTask))
    }
    const markAsCompleted=(task,status)=>{
      setTodo((prev)=>
        prev.map((todo)=>
          todo.task===task ? {...todo,completed:status} : todo
        )
      )
    }
 return(
    <todoContext.Provider value={{addToList,removeFromList,markAsCompleted,todo}}>
        {children}
    </todoContext.Provider>
 )  
}