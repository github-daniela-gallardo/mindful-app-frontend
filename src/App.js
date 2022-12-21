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
import AddAnswer from './components/AddAnswer';
import CreateNote from './components/CreateNote';
import CheckSavedNotes from './components/CheckSavedNotes';
import Videos from './pages/Videos'

function App() {
  return (
    <div className="App">


      <Routes>



        <Route path="/" element={<Homepage />} />
        <Route path='/signup' element={<IsAnnon><SignUpPage /></IsAnnon>} />
        <Route path='/login' element={<IsAnnon><LogInPage /></IsAnnon>} />
        <Route path='/homeloggedin' element={<IsPrivate><HomeLoggedin /></IsPrivate>} />


        <Route path='/notes' element={<IsPrivate><NotesPage /></IsPrivate>} />
        <Route path='/createnote' element={<IsPrivate><CreateNote /></IsPrivate>} />
        <Route path='/addnote/:noteId' element={<IsPrivate><AddAnswer /></IsPrivate>} />


        <Route parth='videos' element={<Videos />} />

        <Route path='/savedNotesMobile' element={<IsPrivate><CheckSavedNotes /></IsPrivate>} />


        <Route path='/profile' element={<IsPrivate><ProfilePage /></IsPrivate>} />



      </Routes>
    </div>
  );
}

export default App;
