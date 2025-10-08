import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './Components/Home';
import Missing from './Components/Missing';
import AddNote from './Components/AddNote';
import Note from './Components/Note';
import EditeNote from './Components/EditeNote';
import Calender from './Components/Calender';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Home />} />
       <Route exact path='/note' element={<AddNote />} />
       <Route path='/calender' element={<Calender />} />
       <Route path='/edit/:id' element={<EditeNote />} />
       <Route path='/note/:id' element={<Note />} />
       <Route path='/*' element={<Missing />} />


     </Routes>
    </div>
  );
}

export default App;
