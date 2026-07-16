import React from 'react'
import Search from './Search'
import Menu from './Menu'
// import Account from './Account'
import logo from '../assets/5624793.png'

const Header = ({search, setSearch}) => {
  return (
    
    <div className='grid sm:grid-cols-3 grid-cols-2  my-4'>
    
    <div className='flex order-1'>
<img src={logo} className='w-16 sm:mx-6 h-16'  alt='logo my-note-logo Notes'/>
     <h1 className='text-2xl ml-2 sm:mr-16 font-medium  mt-4'>My Notes</h1>

    </div>
     
<Search search={search} setSearch={setSearch} />
<Menu />
      
  </div>
  )
}

export default Header
