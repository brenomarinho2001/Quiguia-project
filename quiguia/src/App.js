import React from 'react';
import 'react-light-accordion/demo/css/index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import Index from './Components/Navbar/Index';
import Principal from './Components/Pages/Principal';
import Agendas from './Components/Pages/Agendas.js';
import PontosTuristicos from './Components/Pages/PontosT';
import Grupos from './Components/Pages/Grupos';
import SobreNos from './Components/Pages/SobreNos';
import Contatos from './Components/Pages/Contatos';
import Moradia from './Components/Pages/Moradia';
import PontosT from './Components/Pages/PontosT';
import Informes from './Components/Pages/Informes';
import { Relatos } from './Components/Pages/Relatos';
import Servicos from './Components/Pages/Servicos';


function App(){


return(
  <div>

    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Index />} ></Route>


        <Route path="/principal" element={<Principal />} ></Route>

 
        <Route path="/Agendas" element={<Agendas />} ></Route>



        <Route path="/PontosTuristicos" element={<PontosT/>} ></Route>


     
        <Route path="/Grupos" element={<Grupos/>} ></Route>
   

      
        <Route path="/Sobrenos" element={<SobreNos/>} ></Route>
   

  
        <Route path="/Contatos" element={<Contatos/>} ></Route>

        <Route path="/Servicos" element={<Servicos/>} ></Route>
    


        <Route path="/Moradia" element={<Moradia/>} ></Route>

        <Route path="/informes" element={<Informes/>} ></Route>

        <Route path="/relatos" element={<Relatos/>} ></Route>
      </Routes>
    </BrowserRouter>

  

  </div>
)
}



export default App;
