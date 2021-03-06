import Corpo01 from '../Padroes/Corpo01';
import Footer from '../Padroes/Footer';
import Header from '../Padroes/Header';
import Corpopadrao from '../Padroes/Corpo01'
import '../Navbar/style.css';
import Mapa from "./Mapa.png"
import { AiOutlineSearch } from 'react-icons/ai';


function Moradia() {

    return (
        <div>
            


            
            <Header/>
            
            <div className="showcase2">
            <div className='container2'>
            <div className='container3'>
                <h2 className='titulomoradia'>Informações para você que está chegando em Quixadá.</h2>

                <p>
                <AiOutlineSearch/>
                Essas informações foram levantadas com base em uma pesquisa com outros estudantes e moradores de Quixadá, com o objetivo de juntar informações importantes sobre os bairros e onde conseguir a melhor moradia no que se encaixa para você.

                </p>

                

                <h2 className='titulomoradia'>Centro: </h2>

                <p>
                Maior quantidade de estudantes residentes. Alta concentração de comércio de todos os tipos. Alta concentração de lanchonetes. Grande movimentação de pessoas e veículos durante todo o dia (poluição sonora). Alta demanda de locação de imóveis, e preços consideravelmente mais altos.
                </p>
                
                <h2 className='titulomoradia'>Combate:</h2>
                <p>
                Alta concentração de estudantes residentes.  Alta concentração de comércio de todos os tipos. Média concentração de lanchonetes. Grande movimentação de pessoas e veículos durante todo o dia (poluição sonora). Bairro com risco de alagamento. Alta demanda de locação de imóveis, preços muito variáveis.                </p>

                <br></br>
                <h2 className='titulomoradia'>Planalto Universitário:</h2>
                <p>
                Alta concentração de estudantes residentes.  Alta concentração de comércio de todos os tipos. Média concentração de lanchonetes. Média movimentação de pessoas e veículos durante todo o dia (poluição sonora). Alta demanda de locação de imóveis, preços muito variáveis.
                </p>
                <br></br>

                <h2 className='titulomoradia'>Herval e Triângulo: </h2>
                <p>
                Média concentração de estudantes residentes.  Alta concentração de comércio de todos os tipos. Média concentração de lanchonetes. Média movimentação de pessoas e veículos durante todo o dia (poluição sonora). Média demanda de locação de imóveis, preços muito variáveis.
                </p>
                <br></br>
                <h2 className='titulomoradia'>Irajá e Alto São Francisco:</h2>
                <p>
                Baixa concentração de estudantes residentes.  Média concentração de comércio de todos os tipos. Alta concentração de lanchonetes. Média movimentação de pessoas e veículos durante todo o dia (poluição sonora). Média demanda de locação de imóveis, preços muito variáveis, mas tendem a ser mais baratos.
                </p>
                <br></br>
                <h2 className='titulomoradia'>Baviera:</h2>
                <p>
                Baixa concentração de estudantes residentes.  Média concentração de comércio de todos os tipos. Baixa concentração de lanchonetes. Baixa movimentação de pessoas e veículos durante todo o dia (poluição sonora). Baixa demanda de locação de imóveis, preços muito variáveis, mas tendem a ser mais baratos.
                </p>
                <br></br>
                <h2 className='titulomoradia'>Putiú:</h2>
                <p>
                Baixa concentração de estudantes residentes.  Alta concentração de comércio de todos os tipos. Média concentração de lanchonetes. Alta movimentação de pessoas e veículos durante todo o dia (poluição sonora). Alta demanda de locação de imóveis, preços muito variáveis, mas tendem a ser mais baratos.
                </p>
                <br></br>
                <h2 className='titulomoradia'>Carrascal e São João:</h2>
                <p>
                Baixa concentração de estudantes residentes.  Média concentração de comércio de todos os tipos. Média concentração de lanchonetes. Média movimentação de pessoas e veículos durante todo o dia (poluição sonora). Média demanda de locação de imóveis, preços muito variáveis.
                Os bairros que estão mais próximos ao centro e o próprio centro são consideravelmente perigosos à noite devido à alta população de estudantes. É indicado que estudantes fiquem mais atentos quando forem sair após as 22h.
                </p>
                
                <div className='imgmapa'>
                <img src={Mapa} width={"100%"} height={"auto"} className="imagemmapa"></img>

                </div>
                
            </div>
            </div>
            </div>

         
            

         </div>


        
    )
}

export default Moradia;