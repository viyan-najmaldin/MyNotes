import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {  faAngleLeft } from "@fortawesome/free-solid-svg-icons";


const Trash = ({notes, setNotes, trash, setTrash}) => {
      const navigate =useNavigate();

  const onDelete = (id) => {
    const updatedTrash = trash.filter((n) => n.id !== id);
    setTrash(updatedTrash);
    localStorage.setItem("h", JSON.stringify(updatedTrash));
};

const onRestore = (id) => {
  const restoreNote = trash.find((n) => n.id === id);
  if (!restoreNote) return;
  const updatedNotes = [...notes, restoreNote];
  setNotes(updatedNotes);

  const updatedTrash = trash.filter((n) => n.id !== id);
  setTrash(updatedTrash);

  localStorage.setItem("h", JSON.stringify(updatedTrash));
  localStorage.setItem("mynoteys", JSON.stringify(updatedNotes));
};

  return (
    <div className='sm:mx-20 mx-5'>
          
               <div className='sm:-mx-20 -mx-5  bg-gray-500 flex justify-between  items-center  gap-4 py-3'>
                                <div className='text-white rounded-2xl  px-4'
                               onClick={()=>navigate(-1)} >
                                  <FontAwesomeIcon icon={faAngleLeft} />Back </div>
                          </div>
            <div>
                <h1 className='sm:mt-10 mt-5 text-lg font-semibold text-left text-gray-600'><FontAwesomeIcon icon={faTrash} className='text-2xl' /> Recently Deleted Notes</h1>
                <p className='text-gray-600 text-left'>Notes are available here for 30 days. After that notes will be automaticaly deleted</p>
          </div>
             
          
         
         <div className='mt-5'>
              <ul className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]  gap-2 sm:gap-4'>                  

        {!trash.length? <div className='w-full pb-60 pt-20 text-sm text-gray-400 self-center'>Empty</div> :  trash.map(note=>  <li 
                          key={note.id} 
                          className={`${note.color === '#000' ? 'text-white' : 'text-black'} border border-slate-300 shadow  mt-2 sm:w-50 w-full sm:h-40 h-24 rounded-2xl`}
                          style={{backgroundColor: note.color || '#cfcecc'}} 
                            >
                             
                        
                    <div className='flex flex-col relative h-full'>
                 <div className='h-full overflow-hidden'>    
                       {note.title ?      
                                 <h1   className='sm:text-base line-clamp-1 mx-4 text-left order-1 font-semibold w-100 sm:border-b sm:border-[#7A7A7A] pt-2 pl-0'>  
                                  { note.title}
                                   </h1> : <p></p> 
                            }
                            
                            <p className={`${ !note.title && 'sm:pt-4 pt-6'} sm:order-2 sm:col-span-1 sm:line-clamp-3 line-clamp-2 col-span-2 order-3 text-xs w-fit overflow-none flex-1 mx-4 text-left`}> 
                             
                                 { note.body
                                  }  
                            </p>  
                 </div>    
                       
                       
                       <div className='grid grid-cols-2 rounded-2xl'>
                        <button className='bg-green-100 sm:p-2 hover:bg-green-500 rounded-bl-xl'
                        onClick={()=>{onRestore(note.id)}}
                        >Restore</button>
                        <button className='bg-red-100 sm:p-2 hover:bg-red-500 rounded-br-xl' 
                        onClick={()=>{onDelete(note.id)}} >Delete</button>
                       </div>
                           
                            </div>
        </li>


)}

                  
         </ul>
         </div>
      
    </div>
  )
}

export default Trash
