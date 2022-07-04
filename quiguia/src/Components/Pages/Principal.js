import Corpo01 from '../Padroes/Corpo01';
import Footer from '../Padroes/Footer';
import Header from '../Padroes/Header';
import Corpopadrao from '../Padroes/Corpo01'
import '../Navbar/style.css';

import MovingText from 'react-moving-text'
import img1 from './11.png'
import img2 from './22.png'
import img3 from './33.png'

import './principal.css'
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


function Principal() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
   
   
    return (
        <div>
            <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />


            
            <Header/>
           
            <div className='conteudoprincipal'>
                <div className='containerconteudo'>
                    
                    <div className='conteudopromocional'>
                    
                            <div className='containerslide'>
                    <div className='containerslide2'>
                   
                        <Slider {...settings}>
                            
                            <div>
                                <img src={img1}></img>
                            </div>
                            <div>
                                <img src={img2}></img>
                            </div>
                            <div>
                                <img src={img3}></img>
                            </div>

                            </Slider> 
                            </div>
                    </div>
                    

                    </div>
                    
                    <div className='conteudonoticias'>
                    <MovingText
                    type="pulse"
                    duration=".5s"
                    delay="1s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="infinite"
                    fade="fadeOutToRight"
                    fillMode="none">
                    <p className='textoquiguia'>Notícias</p>
                    </MovingText>
                    </div>

                    <div className='conteudotexto'>
                    <MovingText type="typewriter"
                        dataText={[
                        "O que é?",
                        'Quem são vocês?',
                        'O que fazem?'
                        ]} />

                        <p className='textoquiguia'>O QuiGuia é um guia informativo criado com o propósito de diminuir a dificuldade de adaptação dos alunos que se mudam para Quixadá e trazer informações que auxiliam na vida cotidiana do aluno.</p>
                        </div>
                </div>
            </div>

         


       

         </div>


        
    )
}


export default Principal;