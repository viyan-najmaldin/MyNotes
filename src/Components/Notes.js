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

    console.log("result is ", notes)
  return (
    <div>
         <ul className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] sm:gap-4'>                
                   <Add />         
        {notes.map(note=>  <li 
                          key={note.id} 
                          className={`${note.color === '#000' ? 'text-white' : 'text-black'} shadow-md  mt-2 sm:w-54 w-full sm:h-44 h-16 rounded-2xl`}
                          style={{backgroundColor: note.color || '#cfcecc'}} 
                           ref={divRef} >
                             
             <Link to={`/edit/${note.id}`}>            
                    <div className='grid sm:grid-cols-1 grid-cols-2 sm:flex flex-col justify-between h-full'>
                            <div className='flex justify-between order-1  mx-4 sm:border-b sm:border-[#7A7A7A]'>    
                                <h1   className='sm:text-base  font-bold w-fit pt-2 pl-0'>  
                                  {(note.title.length > 15 ) ? `${note.title.slice(0,15)}...`: note.title}
                                   </h1>   
                                {  note.fav &&  <FontAwesomeIcon icon={faHeart} className='sm:block hidden mt-3 text-red-500' />}
                            </div>
                            
                            <p className='sm:order-2 sm:col-span-1 col-span-2 order-3 text-xs w-fit flex-1 mx-4 text-left'> 
                              {/* {height} */}
                                 {height > 70 ? 
                                  (note.body.length > 200 ) ? `${note.body.slice(0,200)}...`: note.body
                                  :
                                  (note.body.length > 60) ? `${note.body.slice(0,60)}...`: note.body
                                  }  
                            </p>

                            <div className='sm:order-3 order-2 sm:flex sm:right-auto sm:justify-between text-right sm:m-4 mt-0 sm:mt-0  mr-4 '>
                                  <span className=' sm:text-xs text-[8px] text-[#7A7A7A]'>{note.datetime}</span> 
                                  <FontAwesomeIcon icon={faPenToSquare} className= 'sm:block hidden' />  
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





