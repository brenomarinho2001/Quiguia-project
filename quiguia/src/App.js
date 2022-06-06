import React from 'react';
import 'react-light-accordion/demo/css/index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import Index from './Components/Navbar/Index';
import Principal from './Components/Pages/Principal';
import Agendas from './Components/Pages/Agendas.js';
import PontosTuristicos from './Components/Pages/Pontosturisticos';
import Grupos from './Components/Pages/Grupos';


function App(){


return(
  <div>

    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Index />} ></Route>
      </Routes>
      <Routes>
        <Route path="/principal" element={<Principal />} ></Route>
      </Routes>
      <Routes>
        <Route path="/Agendas" element={<Agendas />} ></Route>
      </Routes>

      <Routes>
        <Route path="/PontosTuristicos" element={<PontosTuristicos/>} ></Route>
      </Routes>

      <Routes>
        <Route path="/Grupos" element={<Grupos/>} ></Route>
      </Routes>
    </BrowserRouter>
 
  
  </div>
)
}



export default App;
