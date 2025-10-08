import { Link } from 'react-router-dom'
import ColorAdd from './ColorAdd'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays ,faTrash } from "@fortawesome/free-solid-svg-icons";


const Aside = () => {
  return (
    <div className='w-1/4 sm:flex hidden text-sm flex-col items-center gap-5 h-dvh'>
       <Link to='/note'> + Add New </Link>
        <div>
          <ColorAdd mycolor="#FECC7B" /> 
          <ColorAdd mycolor="#A9E3F4" /> 
          <ColorAdd mycolor="#D8AEF6" /> 
          <ColorAdd mycolor="#F9BEBF" /> 
          <ColorAdd mycolor="#ABEDC8" /> 
        </div>

        <Link to='/calender'> <FontAwesomeIcon icon={faCalendarDays} /> Calender </Link>
       <div> <FontAwesomeIcon icon={faTrash} /> Trash</div>
    </div>
  )
}

export default Aside
