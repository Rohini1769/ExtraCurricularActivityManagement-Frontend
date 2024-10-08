import logo from './logo.svg';
import './App.css';
import image from './assets/images/Designer.png' 
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import singing from './assets/images/singing.png'
import cyber from './assets/images/cyber.png'
import creative from './assets/images/creative-writing.png'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login'
import Signup from './components/SignUp';

function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/signup'element={<Signup/>}/>
      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
