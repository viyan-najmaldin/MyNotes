import React from 'react'
import Aside from './Aside'
import Fav from './Fav'
import Notes from './Notes'
import Datess from './Datess'

const Container = ({notes, resultFilter , setFilterr , setResultFilter}) => {

  return (
    <div className='flex content-stretch'>
              <Aside />
        <div className='sm:bg-[#F5F5F5] sm:shadow-lg rounded-2xl sm:w-[80%] w-full h-fit'>
            <Fav notes={notes} /> 
            
               <div className='sm:m-10 sm:mt-6 mt-6 m-2'>
          <h1 className='text-left'>All Notes</h1>
         <Datess notes={notes} setFilterr={setFilterr} setResultFilter={setResultFilter}  />
          <Notes notes={resultFilter} />
                  </div>


        </div>
    </div>
  )
}

export default Container
