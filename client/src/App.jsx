import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Login from './pages/Login';
import Register from './pages/Register/Register'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/login' element = {<Login />} />
          <Route path='register' element = {<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
