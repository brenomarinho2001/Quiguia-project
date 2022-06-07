import Corpo01 from '../Padroes/Corpo01';
import Footer from '../Padroes/Footer';
import Header from '../Padroes/Header';
import Corpopadrao from '../Padroes/Corpo01'
import '../Navbar/style.css';
import {StyleSheet, View, Text, ImageBackground} from 'react'


function Cards({nome, descricao, links, back, horario,sala}) {




    return (      
            <div className='card'>
                <div className='topCard'>
                    <h2 className='title'>{nome}</h2>
                </div>


                {/*IMAGEM*/}

                <img src={back} className='mediaCard'></img>
               



                <div className='bottomCard'>
                    
                    <span className='bottomText'><p>{descricao}</p></span>
                    <br></br>
                    <br></br>
                    
                    <span className='bottom'><b>Horário: </b>{horario}</span>
                    <br></br>
                    <span className='bottom'><b>Sala: </b> {sala}</span>
                    <div className='actionsCard'>
                        <a className='actions' href={links}><p className='entrar'>Clique aqui para entrar no grupo!</p></a>
                    </div>
                </div>
            </div>
    )
}

export default Cards;