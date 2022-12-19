import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import HomeLoggedin from './pages/HomeLoggedin';
import NotesPage from './pages/NotesPage';
import IsPrivate from './components/isPrivate';
import IsAnnon from './components/isAnnon'
import ProfilePage from './pages/ProfilePage';
import AddNote from './components/AddNote';

function App() {
  return (
    <div className="App">


      <Routes>
         
     
        
        <Route path="/" element={<Homepage />} />
        <Route path='/signup' element={<IsAnnon><SignUpPage /></IsAnnon>} />
        <Route path='/login' element={<IsAnnon><LogInPage /></IsAnnon>} />
        <Route path='/homeloggedin' element={<IsPrivate><HomeLoggedin/></IsPrivate>} />
        <Route path='/notes' element={<IsPrivate><NotesPage/></IsPrivate>} />
        <Route path='/profile' element={<IsPrivate><ProfilePage/></IsPrivate>}/>
        <Route path='/addnote' element={<IsPrivate><AddNote/></IsPrivate>}/>



      </Routes>
    </div>
  );
}

export default App;
