


import Footer from '../Padroes/Footer';
import Header from '../Padroes/Header';
import './CSS/contatos.css'
import { MdLocalHospital } from 'react-icons/md';
import { MdLocalPolice } from 'react-icons/md';
import { FaTeeth } from 'react-icons/fa';
import { FaHospitalAlt } from 'react-icons/fa';

import upa from './imgscontatos/Upa.png'
import samu from './imgscontatos/Samu.png'
import eudasio from './imgscontatos/Eudasio.png'
import jesusmaria from './imgscontatos/jesusmaria.png'

import delegacia from './imgscontatos/delegaciaR.png'
import policia from './imgscontatos/Policia.png'
import bombeiros from './imgscontatos/bombeiros.png'

function Contatos() {

 


    return (
        
        <div>
            <Header/>


            <div class="flexbox">
        <div class="item2">
          <div class="content2">
            <MdLocalHospital size="50px"/>
            <h2>Hospitais/Ambulancias</h2>


            <div class="dropdown2">
              <button class="dropbtn2">UPA Quixadá</button>
              <div class="dropdown-content2">
                <p>R. Dos Voluntários, s/n - Planalto Renascer, <br></br>
                  Quixadá - CE, 63900-000 <br></br>
                  Tel: (88) 2147-1946
                  </p>
                  <a href='https://www.google.com.br/'><img src={upa} width="80%"></img></a>
              </div>
            </div>

            <br></br>

            <div class="dropdown2">
              <button class="dropbtn2">SAMU 192 Quixadá</button>
              <div class="dropdown-content2">
                <p>Rua Dr Alessandro Nostegar, 190 - Nova Jerusalem, <br></br>
                  Quixadá - CE, 63900-056 <br></br>
                  Tel: 88
                  </p>
                  <a href='https://www.google.com.br/'><img src={samu} width="80%"></img></a>
              </div>
            </div>

            <br></br>

            <div class="dropdown2">
              <button class="dropbtn2">Hospital Maternidade Jesus Maria José</button>
              <div class="dropdown-content2">
                <p>Av. Francisco Pinheiro de Almeida, 2268 - Planalto Universitário, <br></br>
                  Quixadá - CE, 63902-125 <br></br>
                  Tel: (88) 3412-0681
                  </p>
                  <a href='https://www.google.com.br/'><img src={jesusmaria} width="80%"></img></a>
              </div>
            </div>

            <br></br>

            <div class="dropdown2">
              <button class="dropbtn2">Hospital Municipal Dr. Eudásio Barroso</button>
              <div class="dropdown-content2">
                <p>Praça João Brasileiro Filho - Centro, <br></br>
                  Quixadá - CE, 63900-000 <br></br>
                  Tel: (88) 3412-0509
                  </p>
                  <a href='https://www.google.com.br/'><img src={eudasio} width="80%"></img></a>
              </div>
            </div>
          </div>
        </div>
        
        
        <div class="item2">
          <div class="content2">
            <MdLocalPolice size="50px"/>
            <h2>Policia/Bombeiros</h2>
            
            <div class="dropdown2">
              <button class="dropbtn2">Delegacia Regional de Polícia Civil de Quixadá</button>
              <div class="dropdown-content2">
                <p>R. Pres. Vargas, 3483-3599 - Campo Novo, <br></br>
                  Quixadá - CE, 63900-000 <br></br>
                  Tel: (88) 3445-1047
                  </p>
                  <a href='https://www.google.com.br/'><img src={delegacia} width="80%"></img></a>
              </div>
            </div>

            <br></br>

            <div class="dropdown2">
              <button class="dropbtn2">9º Polícia Militar do Estado do Ceará</button>
              <div class="dropdown-content2">
                <p>Rua Tenente Cravo, 517 - Alto da Boa Vista, <br></br>
                  Quixadá - CE, 63900-056 <br></br>
                  Tel: (88) 3412-1697
                  </p>
                  <a href='https://www.google.com.br/'><img src={policia} width="80%"></img></a>
              </div>
            </div>

            <br></br>

            <div class="dropdown2">
              <button class="dropbtn2">Corpo de bombeiros de Quixadá</button>
              <div class="dropdown-content2">
                <p>Estr. do Aeroporto - Boto, <br></br>
                  Quixadá - CE, 63900-000 <br></br>
                  Tel: (88) 98814-5675
                  </p>
                  <a href='https://www.google.com.br/'><img src={bombeiros} width="80%"></img></a>
              </div>
            </div>
            
          </div>
        </div>

        
        
        <div class="item2">
          <div class="content2">
          <FaTeeth size="50px"/>
            <h2>Dentistas</h2>
            
            <div class="dropdown2">
              <button class="dropbtn2">Dra Saskia Gomes - Consultório Odontológico</button>
              <div class="dropdown-content2">
                <p>Rua Epitácio Pessoa, 543 - Irajá, <br></br>
                  Quixadá - CE, 63900-133 <br></br>
                  Tel: (88) 99613-4511
                  </p>
              </div>
            </div>

            <br></br>

            <div class="dropdown2">
              <button class="dropbtn2">Odontoclin - Consultório Odontológico</button>
              <div class="dropdown-content2">
                <p> R. Basílio Pinto, 303 - Centro, <br></br>
                  Quixadá - CE, 63900-000 <br></br>
                  Tel: (88) 3412-2393
                  </p>
              </div>
            </div>

            <br></br>

            <div class="dropdown2">
              <button class="dropbtn2">Clínica Ortoclin</button>
              <div class="dropdown-content2">
                <p> R. José de Alencar, 567 - Centro, <br></br>
                  Quixadá - CE, 63900-970 <br></br>
                  Tel: (88) 99787-0011
                  </p>
              </div>
            </div>

            <br></br>

            <div class="dropdown2">
              <button class="dropbtn2">VITADONTO - Estética e Saúde</button>
              <div class="dropdown-content2">
                <p> Tv. Tiradentes, 307 - Centro, <br></br>
                  Quixadá - CE, 63900-129 <br></br>
                  Tel: (88) 99731-2515
                  </p>
              </div>
            </div>

          </div>
        </div>
        
        
        
        <div class="item2">
          <div class="content2">
            <FaHospitalAlt size="50"/>
            <h2>Clinicas Particulares</h2>
            
            <div class="dropdown2">
              <button class="dropbtn2">Clinimagem</button>
              <div class="dropdown-content2">
                <p>Rua Tabelião João Bezerra Silva, 491 - Combate, <br></br>
                  Quixadá - CE, 63900-000 <br></br>
                  Tel: (88) 3412-1522
                  </p>
              </div>
            </div>

            <br></br>

            <div class="dropdown2">
              <button class="dropbtn2">Clínica São Rafael Quixadá - Unidade ll</button>
              <div class="dropdown-content2">
                <p>R. Rodrigues Júnior, 1314 - Centro, <br></br>
                  Quixadá - CE, 63900-125 <br></br>
                  Tel: (88) 99858-9015
                  </p>
              </div>
            </div>

            <br></br>

            <div class="dropdown2">
              <button class="dropbtn2">Clínica Mais Saúde</button>
              <div class="dropdown-content2">
                <p>Rua Epitácio Pessoa, 1111 - Centro, <br></br>
                  Quixadá - CE, 63900-000 <br></br>
                  Tel: (88) 3412-3070
                  </p>
              </div>
            </div>

            <br></br>

            <div class="dropdown2">
              <button class="dropbtn2">Clínica São Pedro</button>
              <div class="dropdown-content2">
                <p>Rua Tenente Cravo, 47 - Irajá, <br></br>
                  Quixadá - CE, 63900-000 <br></br>
                  Tel: (88) 3412-1776
                  </p>
              </div>
            </div>


          </div>
        </div>
      </div>

      <Footer/>
        </div>
        
        


    )
}

export default Contatos;
