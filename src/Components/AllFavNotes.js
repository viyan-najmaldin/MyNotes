import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare ,faHeart } from "@fortawesome/free-solid-svg-icons";
// import FavNote from './favNote';
import { useRef, useEffect, useState } from "react";

const AllFavNotes = ({note}) => {

    const divRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      setHeight(divRef.current.clientHeight);
    }
  }, []);


  return (

   <div>
             <ul className={` ${ note.length ? 'flex' : 'hidden' } sm:gap-4 gap-2 h-60  overflow-x-auto`} >
                 {/* <FavNote notes={note} /> */}
{note.map(note=> <div> <li key={note.id}   ref={divRef} className={`${note.color === '#000' ? 'text-white' : 'text-black'} shadow-md mt-4 sm:w-56 w-36 sm:h-44 h-52 rounded-2xl`}
            style={{backgroundColor: note.color || '#cfcecc'}}
        >
      <Link to={`/edit/${note.id}`}>            
         <div className='flex flex-col justify-between h-full'>
                <div className='flex justify-between border-b mx-4 border-[#7A7A7A]'>    
                      <h1 className='sm:text-base text-sm font-bold w-fit p-2 pl-0'>  {(note.title.length > 15 ) ? `${note.title.slice(0,15)}...`: note.title}  </h1>   
                      <FontAwesomeIcon icon={faHeart} className='mt-3 text-red-500' />
                </div>
               <p className='text-xs w-fit flex-1 mx-4 text-left'>
                {height < 200 ? 
                (note.body.length > 200 ) ? `${note.body.slice(0,200)}...`: note.body
                :
                (note.body.length > 100) ? `${note.body.slice(0,100)}...`: note.body
                }     
                </p>

                <div className='flex justify-between mt-0 m-4'>
                  <span className=' sm:text-xs text-[8px] pt-1 text-[#7A7A7A]'>{note.datetime}</span> 
                  <FontAwesomeIcon icon={faPenToSquare}  />  
                </div>  
           </div>
      </Link>
        </li> </div>


)}

            </ul>
    </div>
  )
}

export default AllFavNotes






