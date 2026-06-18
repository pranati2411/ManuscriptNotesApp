import React, { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([]);

  const submitHandler =(e)=>{
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title, details});
    setTask(copyTask);

    setDetails('');
    setTitle('');
    
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task];

    copyTask.splice(idx,1);
    setTask(copyTask);
    
  }

  return (
    <div className=' h-screen lg:flex bg-black text-white'>
      
        <form onSubmit={(e)=>{
          submitHandler(e);
        }} className='flex gap-4 lg:w-1/2 items-start  p-10 flex-col'>

          <h1 className='text-3xl font-bold'>Add Notes</h1>

          <input value={title} onChange={(e)=>{
            setTitle(e.target.value);
            
          }} type="text" placeholder='Enter Notes Heading' className='px-5 py-2 w-full font-medium border-2 outline-none rounded'/>
          <textarea value={details} onChange={(e)=>{
            setDetails(e.target.value)
          }} type="text" placeholder='Write Details' className='h-32 px-5 py-2 font-medium flex items-start flex-row w-full border-2 outline-none rounded'/>
          <button className='bg-white active:scale-95 w-full font-medium text-black px-5 py-2 rounded'>Add Notes</button>
        </form>

        <div className='lg:w-1/2 p-10 lg:border-l-2'>
          <h1 className='text-3xl font-bold'>Recent Notes</h1>
          <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
            {task.map(function(elem,idx){
              return(
                <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-2xl pt-9 pb-3 px-4 bg-[url("https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg")] text-black'>
                  <div>
                    <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                    <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
                  </div>
                  <button onClick={()=>{
                    deleteNote(idx);
                  }} className='w-full cursor-pointer active:scale-95 py-1 text-xs bg-red-400 rounded font-bold text-white'>Delete</button>
                </div>
              )
            })}
          </div>
        </div>

    </div>
  )
}


export default App