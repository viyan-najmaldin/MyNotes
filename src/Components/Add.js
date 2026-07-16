import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare  } from "@fortawesome/free-solid-svg-icons";


const Add = () => {
  return (
    <>
       <Link className='flex justify-center' to='/note'>
   <div title='Add a new note' className='hidden  md:block m-2 pt-5 mt-8 hover:bg-white h-20 w-20 text-3xl text-gray-500 border-dashed border-2 rounded-2xl border-gray-500'> + </div>
   </Link> 
  
      <Link className='block md:hidden' to="/note"><div className='fixed bottom-16 right-6 rounded-full bg-black p-4 '>
                    <FontAwesomeIcon icon={faPenToSquare} className='text-white w-8 h-8' /> 
    </div></Link>
    </>
)
}

export default Add
