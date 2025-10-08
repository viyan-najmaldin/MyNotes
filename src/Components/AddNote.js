import React from 'react'
import { useLocation } from "react-router-dom";


const AddNote = () => {
      const location = useLocation();
  const { color } = location.state || {};


  return (
    <div style={{backgroundColor: color}}>
       Add Note {color}
    </div>
  )
}

export default AddNote
