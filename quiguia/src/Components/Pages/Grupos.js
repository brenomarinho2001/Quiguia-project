import Corpo01 from '../Padroes/Corpo01';
import Footer from '../Padroes/Footer';
import Header from '../Padroes/Header';
import Corpopadrao from '../Padroes/Corpo01'
import '../Navbar/style.css';


import './CSS/cards.css'
import Cards from './Cards';


function Grupos() {

    return (
        <div>




            <Header />


            <div className='grupos'>
                <div className='content'>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>





            </div>







        </div>



    )
}

export default Grupos;
