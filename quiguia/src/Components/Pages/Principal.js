import Corpo01 from '../Padroes/Corpo01';
import Footer from '../Padroes/Footer';
import Header from '../Padroes/Header';
import Corpopadrao from '../Padroes/Corpo01'
import '../Navbar/style.css';


import img1 from './justdance.png'
import img2 from './padrao.png'

import './principal.css'


function Principal() {

   
   
    return (
        <div>
            


            
            <Header/>
            <div className='conteudoprincipal'>
                <div className='containerconteudo'>
                    <div className='conteudopromocional'><h2>PROMOCIONAL</h2></div>
                    <div className='conteudonoticias'><h2>NOTICIAS</h2></div>

                    <div className='conteudotexto'><h2>TEXTO SOBRE O QUIGUIA</h2></div>
                </div>
            </div>
            <Footer/>
         


       

         </div>


        
    )
}


export default Principal;