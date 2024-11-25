
import AddToDo from './components/AddToDo'
import DisplayTodo from './components/DisplayTodo';


function App() {
  
  return (
    <>
    <div className='min-h-screen w-full px-5 py-5 bg-zinc-900 text-white flex items-center flex-col '>
    <h1 className='text-3xl '>Todo List</h1>
   <AddToDo/>
   <DisplayTodo/>
    </div>
    </>
  )
}

export default App
