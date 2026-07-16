import Add from './Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare , faHeart,faTrash } from "@fortawesome/free-solid-svg-icons";


const Notes = ({notes = []}) => {
  
  return (
    <div>
         <ul className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-2 sm:gap-4'>                
                   <Add />         
        {notes.map(note=>  <li 
                          key={note.id} 
                          className={`${note.color === '#000' ? 'text-white' : 'text-black'} border border-slate-300 shadow  mt-2 sm:w-50 w-full sm:h-32 h-16 rounded-2xl`}
                          style={{backgroundColor: note.color || '#cfcecc'}} 
                            >
                             
                        
                    <div className='flex sm:flex-col  justify-between relative h-full'>
                 <Link className='h-full overflow-hidden' to={`/edit/${note.id}`}>    
                       {note.title ?      
                                 <h1   className='sm:text-base line-clamp-1 mx-4 text-left order-1 font-semibold w-100 sm:border-b sm:border-[#7A7A7A] pt-2 pl-0'>  
                                  { note.title}
                                   </h1> : <p></p> 
                            }
                                {  note.fav &&  <FontAwesomeIcon icon={faHeart} className='sm:block hidden absolute top-0 right-2 mt-3 text-red-500' />}
                            
                            <p className={`${ !note.title && 'sm:pt-4 pt-6'} sm:order-2 sm:col-span-1 sm:line-clamp-3 line-clamp-1 col-span-2 order-3 text-xs w-fit overflow-none flex-1 mx-4 text-left`}> 
                             
                                 { note.body
                                  }  
                            </p>  
                 </Link>    
                         <div className=' gap-2 flex sm:right-auto justify-end items-end  text-right mb-4  mx-4 '>
                                  <span className='  text-[#7A7A7A] sm:text-xs text-[8px] sm:right-24 sm:top-24 absolute right-2 top-2'>{note.datetime}</span> 
                                  <FontAwesomeIcon icon={faTrash} className='text-sm sm:text-red-900/50 hover:text-red-700' />   
                                  <FontAwesomeIcon icon={faPenToSquare} className= 'sm:block hidden opacity-50 hover:opacity-100' />  
                                  
                           </div> 
                           
                            </div>
        </li>


)}

                  
         </ul>
    </div>
  )
}

export default Notes





