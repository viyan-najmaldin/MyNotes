import React from 'react'
import Header from './Header'
import Container from './Container'


const Home = ({notes , 
  setNotes, 
   resultFilter ,
   setFilterr ,
    setResultFilter,
    search,
    setSearch,
    trash, 
    setTrash
  }) => {
  return (
    <div className='sm:mx-16 md:mx-6 mx-4'>
      <Header search={search} setSearch={setSearch} />
{

}
    <Container 
      search={search}
      notes={notes} 
     setNotes={setNotes} 
     setResultFilter={setResultFilter}  
     resultFilter={resultFilter} 
     setFilterr={setFilterr} 
     trash={trash} 
     setTrash={setTrash}
     />

      
    </div>
  )
}

export default Home
