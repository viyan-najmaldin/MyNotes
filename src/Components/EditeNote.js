import { useLocation , useNavigate, useParams } from "react-router-dom";
import { useState , useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHeart ,faAlignRight, faAlignCenter, faAlignLeft , faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useRef } from 'react';
import { format } from 'date-fns';

const EditeNote = ({notes , setNotes}) => {

  const { id } = useParams();
  const textRef = useRef();
  const location = useLocation();
  const { color } = location.state || {};
  const navigate = useNavigate();
  const[title, setTitle ] =useState('');
  const[body, setBody ] =useState('');
  const[colorr, setColorr ] =useState(color);
  const[fav, setFav ] =useState(false);
  const[textAlgin, setTextAlgin ] =useState('text-left');

  const oneNote = notes.find((notte)=> String(notte.id) === (id))

   useEffect(() => {
      if (oneNote) {
          setTitle(oneNote.title);
          setBody(oneNote.body);
          setColorr(oneNote.color)
          setFav(oneNote.fav)
          setTextAlgin(oneNote.textAlgin)
      }
   }, [oneNote, setTitle, setBody, setColorr ,setTextAlgin, setFav]);
    
  console.log(id)

  return (
    <div className='min-h-screen'
     style={{backgroundColor: colorr}}>

  <form className='sm:pt-3 sm:px-4 '

       onSubmit={(e)=>{
        e.preventDefault();
        const ID = notes.length ? (notes[notes.length-1].id)+1 :1 
         const datetime = format(new Date(),  'yyyy-MM-dd HH:mm')
        const edit = {...oneNote,  title, body , color:colorr , fav , textAlgin , datetime}
      const editnote = notes.map(p => p.id === oneNote.id ? edit : p);
     
        if(title || body) {
           setNotes(editnote)
  localStorage.setItem('notee', JSON.stringify(editnote));
        }
         navigate(`/`)
        console.log(ID)
     }} >


        <div className='sm:hidden block bg-gray-700 flex justify-between mb-4 pt-4  gap-4 h-16'>
                      <div className='text-white rounded-2xl pt-2 px-4'
                      onClick={()=>{
                      setTitle('')
                      setBody('')
                      navigate(`/`) }} >
                        <FontAwesomeIcon icon={faAngleLeft} /> </div>
                    <input className='rounded-2xl text-white px-4' value="Save" type='submit' />
                </div>

            <input className={ `${colorr === '#000' ? 'text-white' : 'text-black'} ${textAlgin} text-xl w-full bg-transparent border-none`}
                  value={title} 
                  onChange={(e)=>{setTitle(e.target.value)}}
                  onSubmit={()=> textRef.current.focus()}
                    type='text' placeholder='Type Title ...' 
               />
                
            <hr  className='border-t-2 border-gray-600 mx-2'/>
          
            <textarea ref={textRef} className={`${colorr === '#000' ? 'text-white' : 'text-black'} ${textAlgin} w-full bg-transparent border-none mb-24 min-h-dvh`}
                      value={body} onChange={(e)=>{setBody(e.target.value)}} type='text' placeholder='Type here...'
                    required
            />
        
        


  <div className='h-16 bg-gray-700 w-full fixed flex justify-between left-0 bottom-0 pt-3 p-2'>
  
          <div className='flex gap-10'>
        <div className='sm:ml-10 ml-4 flex gap-4'>
                        {fav ? <FontAwesomeIcon onClick={()=>setFav(!fav)} icon={faHeart} className='mt-1 text-red-500 w-6 h-6 cursor-pointer' />
                          : <FontAwesomeIcon onClick={()=>setFav(!fav)} icon={faHeartRegular} className="mt-1 text-white w-6 h-6 cursor-pointer" />
                        }

                    <div className='text-white flex gap-2'>
                      <FontAwesomeIcon onClick={()=>setTextAlgin('text-left')} className='cursor-pointer w-5 h-5 mt-1' icon={faAlignLeft} />
                      <FontAwesomeIcon onClick={()=>{setTextAlgin('text-center'); console.log(textAlgin)}} className='cursor-pointer w-5 h-5 mt-1' icon={faAlignCenter} />
                      <FontAwesomeIcon onClick={()=>setTextAlgin('text-right')} className='cursor-pointer w-5 h-5 mt-1' icon={faAlignRight} />
                      <div onClick={()=> textRef.current.focus()} className='cursor-pointer text-xl'>Aa</div>
                    </div>
              </div>

              <div className='flex mt-1 gap-1 h-10'>
                <div onClick={()=>setColorr('#FECC7B')}  className={'cursor-pointer rounded-3xl bg-[#FECC7B] mb-2 w-5 h-5'}></div>
                <div onClick={()=> setColorr('#A9E3F4')} className={'cursor-pointer rounded-3xl bg-[#A9E3F4] mb-2 w-5 h-5'}></div>
                <div onClick={()=> setColorr('#D8AEF6')} className={'cursor-pointer rounded-3xl bg-[#D8AEF6] mb-2 w-5 h-5'}></div>
                <div onClick={()=> setColorr('#F9BEBF')} className={'cursor-pointer rounded-3xl bg-[#F9BEBF] mb-2 w-5 h-5'}></div>
                <div onClick={()=> setColorr('#ABEDC8')} className={'cursor-pointer rounded-3xl bg-[#ABEDC8] mb-2 w-5 h-5'}></div>
                <div onClick={()=>setColorr('#Fff')}  className={'cursor-pointer rounded-3xl bg-[#fff] mb-2 w-5 h-5'}></div>
                <div onClick={()=>setColorr('#000')}  className={'cursor-pointer rounded-3xl bg-[#000] mb-2 w-5 h-5'}></div>
                <input type='color' value={colorr}  onChange={(e)=>setColorr(e.target.value)}  
                className={' bg-gradient-to-bl from-red-500 via-yellow-500 via-green-500 via-blue-500 to-blue-500 cursor-pointer border-none mb-2 w-5 h-5 p-2 rounded-full'}
                />
              </div>
          </div>
             

                <div className='hidden sm:flex gap-4 h-10'>
                      <div className='bg-gray-200 hover:bg-black hover:text-white rounded-2xl pt-2 px-4'
                      onClick={()=>{
                      setTitle('')
                      setBody('')
                      navigate(`/`) }} >
                        Cencel</div>
                    <input className='rounded-2xl bg-gray-200 px-6' value="Save" type='submit' />
                </div>
      </div>



       </form>

    </div>
  )
}

export default EditeNote
