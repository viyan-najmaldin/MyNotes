import React from 'react'
import Aside from './Aside'
import Fav from './Fav'
import Notes from './Notes'
import Datess from './Datess'

const Container = ({notes,setNotes, resultFilter , setFilterr , setResultFilter, search}) => {

  return (
    <div className='flex content-stretch'>
              <Aside />
        <div className='sm:bg-[#F5F5F5] sm:border sm:border-slate-400 sm:shadow-lg rounded-2xl sm:w-[80%] w-full h-fit'>
            <Fav notes={notes} /> 
            
               <div className='sm:m-10 sm:mt-6 mt-6 m-2'>
          <h1 className='text-left text-slate-700 font-semibold text-lg'>All Notes {resultFilter? resultFilter.length : 0}</h1>
         <Datess search={search}  notes={notes} setFilterr={setFilterr} setResultFilter={setResultFilter}  />
        <Notes notes={resultFilter} setNotes={setFilterr} />
                  </div>


        </div>
    </div>
  )
}

export default Container
