import React from 'react'
import MyNote from './MyNote'

const AllFavNotes = () => {

  return (

    <div>
             <ul className='flex sm:gap-5 gap-2 h-60  overflow-x-auto'>
                  <MyNote fav={true} title='First title' mycolor="#FECC7B" content="lorem bvnv bgfvb gnb"/>
                  <MyNote fav={true} title='Second title' mycolor="#A9E3F4" content="lorem bvn vvbgb tfghtfffff dbgfvb gnb"/>
                  <MyNote fav={true} title='third title' mycolor="#D8AEF6" content="lorembvn fvdfgbdfg bgfvb gnb"/>
                  <MyNote fav={true} title='First title' mycolor="#FECC7B" content="lorem bvnv bgfvb gnb"/>
                  <MyNote fav={true} title='Second title' mycolor="#A9E3F4" content="lorem bvn vvbgb tfghtfffff dbgfvb gnb"/>
                  <MyNote fav={true} title='third title' mycolor="#D8AEF6" content="lorembvn fvdfgbdfg bgfvb gnb"/>
            </ul>
    </div>
  )
}

export default AllFavNotes
