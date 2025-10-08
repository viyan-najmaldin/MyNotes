import React from 'react'
import Aside from './Aside'
import Fav from './Fav'
import Notes from './Notes'

const Container = () => {

  return (
    <div className='flex content-stretch'>
              <Aside />
        <div className='sm:bg-[#F5F5F5] sm:shadow-lg rounded-2xl sm:w-[90%] w-full min-h-screen '>
            <Fav /> <hr />
            
               <div className='sm:m-10 mt-10 m-2'>
          <h1 className='text-left'>All Notes</h1>
          <Notes />
                  </div>


        </div>
    </div>
  )
}

export default Container
