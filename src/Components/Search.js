import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className='order-3 sm:order-2 '>

       <div className="relative">
  <span className="absolute inset-y-0 top-4 left-2 flex items-center pl-3 pointer-events-none">
    <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
  </span>
       <input className='border-none pl-12 shadow-md rounded-3xl w-[25rem] mt-4 placeholder-gray-400 bg-[#F5F5F5]' type='text' placeholder='Search..' />


</div>
    </div>
  )
}

export default Search
