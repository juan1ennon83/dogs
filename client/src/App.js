import './App.css';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LandingPages, Home, Create, DetailDog } from './views';
import NavBar from './components/NavBar/NavBar.jsx';

axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      { location.pathname !== '/' && <NavBar/> }
      <Routes>
        <Route path='/' element={ <LandingPages/> } />
        <Route path='/home' element={ <Home/> } />
        <Route path='/create' element={ <Create/> } />
        <Route path='/home/:id' element={ <DetailDog/> } />
      </Routes>
    </div>
  );
}

export default App;
