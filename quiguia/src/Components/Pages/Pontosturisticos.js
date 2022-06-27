
import Footer from '../Padroes/Footer';
import Header from '../Padroes/Header';



import './CSS/cards.css'
import Cards from './Cards';


import Imagempadrao from './padrao.png'
import Galinha from './imgs-pontosturisticos/galinha.png'
import Games from './imgs-cards/Gameslogo.png'
import Desenho from './imgs-cards/Desenho.png'
import Justdance from './imgs-cards/justdancelogo.png'
import ingles from './imgs-cards/ingleslogo.png'



function  PontosTuristicos() {

    var Imagens = [Galinha,Games,Justdance,ingles,Desenho]



    return (
        <div>




            <Header />


            <div className='grupos'>
                <div className='content'>
                    <Cards nome={"Galinha Choca"} descricao={"A pedra da galinha choca é uma formação única na cidade de Quixadá na caatinga nordestina, há 165 kilometros de Fortaleza, a região se destaca pelas formaçõ"} links={"https://www.google.com"} horario={"Terça-feira, das 18:30 ás 21:00"} sala={"Sala 3, bloco 1"} back={Imagens[0]} />
                    <Cards nome={"Galinha Choca"} descricao={"A pedra da galinha choca é uma formação única na cidade de Quixadá na caatinga nordestina, há 165 kilometros de Fortaleza, a região se destaca pelas formaçõ"} links={"https://www.google.com"} horario={"Terça-feira, das 18:30 ás 21:00"} sala={"Sala 3, bloco 1"} back={Imagens[0]} />
                    <Cards nome={"Galinha Choca"} descricao={"A pedra da galinha choca é uma formação única na cidade de Quixadá na caatinga nordestina, há 165 kilometros de Fortaleza, a região se destaca pelas formaçõ"} links={"https://www.google.com"} horario={"Terça-feira, das 18:30 ás 21:00"} sala={"Sala 3, bloco 1"} back={Imagens[0]} />
                    <Cards nome={"Galinha Choca"} descricao={"A pedra da galinha choca é uma formação única na cidade de Quixadá na caatinga nordestina, há 165 kilometros de Fortaleza, a região se destaca pelas formaçõ"} links={"https://www.google.com"} horario={"Terça-feira, das 18:30 ás 21:00"} sala={"Sala 3, bloco 1"} back={Imagens[0]} />
                
                    <Footer></Footer>
                </div>





            </div>







        </div>


        
    )
}

export default PontosTuristicos;