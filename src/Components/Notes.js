import React from 'react'
import MyNote from './MyNote'
import Add from './Add'


const Notes = () => {
  
  return (
    <div>
         <ul className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] sm:gap-4'>
                
                   <Add />
                  <MyNote fav={false} title='First title' mycolor="#FECC7B" content="lorem bvnv bgfvb gnb"/>
                  <MyNote fav={false} title='Second title' mycolor="#F9BEBF" content="lorem bvn vvbgb tfghtfffff dbgfvb gnb"/>
                  <MyNote fav={false} title='third title' mycolor="#D8AEF6" content="lorembvn fvdfgbdfg bgfvb gnb"/>
                  <MyNote fav={false} title='First title' mycolor="#ABEDC8" content="lorem bvnv bgfvb gnb"/>
                  <MyNote fav={false} title='Second title' mycolor="#A9E3F4" content="lorem bvn vvbgb tfghtfffff dbgfvb gnb"/>
                   <MyNote fav={false} title='third title' mycolor="#D8AEF6" content="lorembvn fvdfgbdfg bgfvb gnb"/>
                  <MyNote fav={false} title='First title' mycolor="#ABEDC8" content="lorem bvnv bgfvb gnb"/>
                  <MyNote fav={false} title='Second title' mycolor="#A9E3F4" content="lorem bvn vvbgb tfghtfffff dbgfvb gnb"/>
                  <MyNote fav={false} title='third title' mycolor="#F9BEBF" content="lorembvn fvdfgbdfg bgfvb gnb"/>
            </ul>
    </div>
  )
}

export default Notes
