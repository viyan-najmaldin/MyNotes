import React from 'react'
import AllFavNotes from './AllFavNotes'

const Fav = ({notes}) => {
  const note = notes.filter(x=> x.fav ===true)
  return ( <>
  {note.length > 0 &&  <div className='border-b sm:m-10 m-2 sm:mb-4 mb-0'> 
          <h1 className='text-left text-slate-700 font-semibold text-lg '>Favorite Notes</h1>
          <AllFavNotes note={note} />
          
    </div> }
    </>
  )
}

export default Fav
