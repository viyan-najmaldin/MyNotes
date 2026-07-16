import Add from './Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare , faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";


const Notes = ({notes = []}) => {
  
      const divRef = useRef(null);
    const [height, setHeight] = useState(0);
  
    useEffect(() => {
      if (divRef.current) {
        setHeight(divRef.current.clientHeight);
      }
    }, []);

    // console.log("result is ", notes)
  return (
    <div>
         <ul className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-2 sm:gap-4'>                
                   <Add />         
        {notes.map(note=>  <li 
                          key={note.id} 
                          className={`${note.color === '#000' ? 'text-white' : 'text-black'} border border-slate-300 shadow  mt-2 sm:w-50 w-full sm:h-32 h-16 rounded-2xl`}
                          style={{backgroundColor: note.color || '#cfcecc'}} 
                           ref={divRef} >
                             
             <Link to={`/edit/${note.id}`}>            
                    <div className='sm:flex flex-col grid justify-between relative h-full'>
                          {note.title &&      
                                 <h1   className='sm:text-base mx-4 text-left order-1 font-semibold w-100 sm:border-b sm:border-[#7A7A7A] pt-2 pl-0'>  
                                  {(note.title.length > 15 ) ? `${note.title.slice(0,15)}...`: note.title}
                                   </h1> 
                            }
                                {  note.fav &&  <FontAwesomeIcon icon={faHeart} className='sm:block hidden absolute top-0 right-2 mt-3 text-red-500' />}
                            
                            <p className={`${ !note.title && 'pt-4'} sm:order-2 sm:col-span-1 col-span-2 order-3 text-xs w-fit overflow-none flex-1 mx-4 text-left`}> 
                             
                                 {height > 70 ? 
                                  (note.body.length > 200 ) ? `${note.body.slice(0,150)}...`: note.body
                                  :
                                  (note.body.length > 60) ? `${note.body.slice(0,50)}...`: note.body
                                  }  
                            </p>

                            <div className='sm:order-3 order-2 sm:flex sm:right-auto sm:justify-between text-right sm:mb-2  mx-4 '>
                                  <span className=' sm:text-xs text-[8px] text-[#7A7A7A]'>{note.datetime}</span> 
                                  <div>
                                  <FontAwesomeIcon icon={faPenToSquare} className= 'sm:block hidden' />  

                                  </div>
                           </div>  
                    </div>
            </Link>
        </li>


)}

                  
         </ul>
    </div>
  )
}

export default Notes





