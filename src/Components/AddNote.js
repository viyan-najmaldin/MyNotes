import React from 'react'
import { useLocation , useNavigate } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHeart ,faAlignRight, faAlignCenter, faAlignLeft , faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useRef } from 'react';
import { format } from 'date-fns';



const AddNote = ({notes , setNotes}) => {

  const textRef = useRef();
  const location = useLocation();
  const { color = "#FFFFFF" } = location.state || {};
  const navigate =useNavigate();
  const[title, setTitle ] =useState('');
  const[body, setBody ] =useState('');
  const[colorr, setColorr ] =useState(color);
  const[fav, setFav ] =useState(false);
  const[textAlgin, setTextAlgin ] =useState('text-left');
  const [showSave , setShowSave] =useState(false)


  return (
    <div className='min-h-screen'
     style={{backgroundColor: colorr}}>

  <form className=' '
       onSubmit={(e)=>{
        e.preventDefault();
        const id = notes.length ? (notes[notes.length-1].id)+1 :1 
        // console.log((notes.length))
        console.log((notes.id))
         const datetime = format(new Date(),  'yyyy-MM-dd HH:mm')
        const addNote = { id, title, body , color:colorr , fav , textAlgin , datetime}
        if(title || body){ 
           setNotes([ ...notes,addNote])
           const updatedNotes = [...notes, addNote];

        setNotes(updatedNotes);
        localStorage.setItem("mynoteys", JSON.stringify(updatedNotes));
                
        //  const savedNotes = localStorage.getItem("mynoteys");
        //  console.log(savedNotes);
        //  console.log(JSON.parse(savedNotes));
        }
         navigate(`/`)
     }} >


        <div className=' bg-gray-700 flex justify-between  items-center  gap-4 py-3'>
                      <div className='text-white rounded-2xl  px-4'
                     onClick={()=>{
                      body || title ? setShowSave(true) :
                      navigate(-1)
                      }} >
                        <FontAwesomeIcon icon={faAngleLeft} /> </div>
                    <input className='sm:hidden rounded-2xl text-white px-4' value="Save" type='submit' />
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
                    
            />
        
        


  <div className=' flex h-16 bg-gray-700 w-full fixed overflow-auto justify-between left-0  bottom-0 pt-3 p-2'>
  
          <div className='flex gap-5'>
        <div className='sm:ml-10 ml-4 flex gap-4'>
                        <div title='Add to Favorite'>
                        {fav ? <FontAwesomeIcon  onClick={()=>setFav(!fav)} icon={faHeart} className='mt-1 text-red-500 w-6 h-6 cursor-pointer' />
                          : <FontAwesomeIcon  onClick={()=>setFav(!fav)} icon={faHeartRegular} className="mt-1 text-white w-6 h-6 cursor-pointer" />
                        }</div>

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
                      onClick={()=>{setShowSave(true)}} >
                        Cencel</div>
                    <input className='rounded-2xl bg-gray-200 px-6' value="Save" type='submit' />
                </div>
      </div>

{showSave &&  
         <div className="sm:w-[40%] w-[60%] bg-white shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-center rounded-xl  border-2 border-slate-400">
                               <div className="flex bg-[#003049] justify-end p-0 rounded-t-lg ">
                                <button
                                  // onClick={() => setShowDeleteId(null)}
                                  className="text-xl font-bold text-white rounded-tr-lg p-1 px-3 hover:bg-red-700"
                                >
                                  ✕
                                </button>
                              </div>
                           
                             <div className="p-5">
                             <p>do you want to Save?</p>
                              <div className="flex justify-center text-black mt-2 gap-2">
                              <input className="bg-white border hover:bg-red-700 hover:text-white px-4 border-slate-400 p-1 rounded-xl" value="Save" type='submit' />
                              <button className="bg-white border px-4 hover:bg-[#003049] hover:text-white border-slate-400 p-1 rounded-xl"
                               onClick={()=>{
                      setTitle('')
                      setBody('')
                      navigate(`/`) }}
                              >No</button>
                             </div>
                               </div>
                        </div>
                }


       </form>

         
 
    </div>
  )
}

export default AddNote
