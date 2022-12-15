import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import NavBar from './components/NavBar';
import HomeLoggedin from './pages/HomeLoggedin';

function App() {
  return (
    <div className="App">

      <NavBar />

      <Routes>
         
        
        <Route path="/" element={<Homepage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/homeloggedin' element={<HomeLoggedin/>} />


      </Routes>
    </div>
  );
}

export default App;
