import React from 'react'
import { Link } from 'react-router-dom'

const ColorAdd = ({mycolor}) => {
  return (  
    <>
     <Link to='/note' state={{ color :mycolor}}>
        <div className={'rounded-3xl mb-2 w-4 h-4'}
        style={{backgroundColor: mycolor}}
        ></div>
    </Link> 
    </>
  )
}

export default ColorAdd
