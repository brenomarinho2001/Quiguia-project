import Corpo01 from '../Padroes/Corpo01';
import Footer from '../Padroes/Footer';
import Header from '../Padroes/Header';
import Corpopadrao from '../Padroes/Corpo01'
import '../Navbar/style.css';


function Cards() {

    return (      
            <div className='card'>
                <div className='topCard'>
                    <h2 className='title'>Grupo do Whatsapp</h2>
                </div>
                <div className='mediaCard'></div>
                <div className='bottomCard'>
                    <span className='bottonText'>Aqui é um texto de resumo da página ou do documento que o card trata.</span>
                    <div className='actionsCard'>
                        <a className='actions' href='https://www.google.com.br/'>Entrar no grupo!</a>
                    </div>
                </div>
            </div>
    )
}

export default Cards;