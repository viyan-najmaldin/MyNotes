import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare ,faHeart } from "@fortawesome/free-solid-svg-icons";


const MyNote = ({title , content, mycolor , fav}) => {
  return (
    <div>
        <li  className={ fav ?'shadow-md mt-4 sm:w-56 w-32 sm:h-44 h-52 rounded-2xl' : 'shadow-md  mt-2 sm:w-56 w-full sm:h-44 h-16 rounded-2xl'}
            style={{backgroundColor: mycolor}}
        >
      <Link to='/edit/:id'>            
         <div className= {fav ? 'flex flex-col justify-between h-full' : 'relative sm:flex flex-col justify-between h-full'}>
                <div className={  fav ? 'flex justify-between border-b mx-4 border-[#7A7A7A]': 'flex  justify-between mx-4'}>    
                      <h1 className=' w-fit p-2 pl-0'>  {title} </h1>   
                  {  fav &&  <FontAwesomeIcon icon={faHeart} className=' mt-3' />}
                </div>
                <p className='text-xs w-fit flex-1 mx-4 text-left'> {content}</p>

                <div className={ fav ?'flex justify-between m-4' : 'sm:relative absolute  sm:flex sm:bottom-auto sm:right-auto justify-between sm:m-4 m-2 mr-4 right-0 top-0'}>
                  <span className=' text-xs text-[#7A7A7A]'>Oct 7,2025</span> 
                  <FontAwesomeIcon icon={faPenToSquare} className={!fav && 'sm:block hidden'} />  
                </div>  
           </div>
      </Link>
        </li>
     
    </div>
  )
}

export default MyNote
