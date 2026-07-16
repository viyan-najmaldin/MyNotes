import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './Components/Home';
import Missing from './Components/Missing';
import AddNote from './Components/AddNote';
import Note from './Components/Note';
import EditeNote from './Components/EditeNote';
import Calender from './Components/Calender';
// import { DataProvider } from './context/DataContext'
import { useEffect, useState } from 'react';

function App() {
const savedNotes = localStorage.getItem('notee');
const initialNotes = savedNotes ? JSON.parse(savedNotes) : [
  { 
    id: 1,
    title: "Lorem ipsum",
     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     color: '#F9BEBF',
     fav: true,
     textAlgin: 'text-left',
     datetime: '2025-10-01 19:10'
  },
    {
      id:2,
       title: "Greeting",
     body: "Hello welcome to my Note web aplication.",
     color: '#D8AEF6',
     fav: true,
     textAlgin: 'text-left',
     datetime: '2025-10-4 04:20'
  }, 
   { 
    id: 3,
    title: "WILDFLOWER",
     body: "But I see her in the back of my mind all the time Like a fever, like I’m burning alive, like a sign Did I cross the line?",
     color: '#A9E3F4',
     fav: false,
     textAlgin: 'text-left',
     datetime: '2025-01-04 19:10'
  } ,
   { 
    id: 4,
    title: "Last Leaves of Autumn Leaves of AutumnLeaves of Autumn",
     body: "Now she's falling Falling like the last leaves of autumn So cold (So cold), so cold and I can't find a way to bring her home 'Causе my love keeps falling Falling like the last lеaves of autumn So cold (So cold), so cold and I can't find a way to bring her home 'Cause my love keeps falling",
     color: '#FECC7B',
     fav: false,
     textAlgin: 'text-left',
     datetime: '2025-10-10 19:30'
  } 
]
const[notes ,setNotes ] = useState(initialNotes)
const[search,setSearch] = useState("")
const [resultFilter , setResultFilter] = useState([])
const [filterr , setFilterr] = useState(notes)

useEffect(()=>{
setResultFilter([...filterr].reverse())
// console.log("result",resultFilter)
console.log([JSON.parse(localStorage.getItem('notes'))])

}, [notes, filterr ])

  return (
    <div className="App">
     <Routes>
      {/* <DataProvider> */}
       <Route path='/' element={<Home search={search} setSearch={setSearch} notes={notes} setResultFilter={setResultFilter} resultFilter={resultFilter} setFilterr={setFilterr} />} />
       <Route exact path='/note' element={<AddNote notes={notes} setNotes={setNotes} />} />
       <Route path='/calender' element={<Calender />} />
       <Route path='/edit/:id' element={<EditeNote notes={notes} setNotes={setNotes} />} />
       <Route path='/note/:id' element={<Note />} />
       <Route path='*' element={<Missing />} />
     {/* </DataProvider>     */}
     </Routes>
    </div>
  );
}

export default App;
