
import Footer from '../Padroes/Footer';
import Header from '../Padroes/Header';

import '../Navbar/style.css';

import { GoTriangleDown } from "react-icons/go";


import Imagempadrao from './padrao.png'
import './CSS/sobrenos.css'
import Cards from './Cards';


function SobreNos() {

    return (
        <div>




            <Header />
            <div className='conteudo'>
                <div className='container'>
                    <div className='titulo'>
                        <h1><GoTriangleDown className='simbolo'/> O QUE É O QUIGUIA?</h1>

                    </div>
                    <div className='text'>
                        <p>O QuiGuia é um guia informativo criado com o propósito de diminuir a dificuldade de adaptação dos alunos que se mudam para Quixadá e trazer informações que auxiliam na vida cotidiana do aluno, a partir de uma demanda social que a psicóloga do campus da UFC de Quixadá observou nos alunos ingressantes. Seu relato era sobre alunos que estavam com dificuldades de adaptação, não somente no campus, mas também na vivência da cidade, gerando preocupações sobre moradia, alimentação e serviços de emergência, onde ir e como procurar e entre outras, o que atinge indiretamente o rendimento acadêmico dos alunos. Dessa maneira, foi traçado o objetivo de desenvolver o protótipo de um site do guia informativo para os alunos que ingressam na UFC de Quixadá, que juntasse informações práticas de contatos e localizações dos principais serviços que um aluno ingressante necessitaria na sua primeira vinda a Quixadá.</p>
                    </div>
                    <div ><img src={Imagempadrao} className='imagempadrao'></img></div>
                </div>


            </div>
            <Footer />



        </div>



    )
}

export default SobreNos;
