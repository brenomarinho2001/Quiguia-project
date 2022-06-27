
import Footer from '../Padroes/Footer';
import Header from '../Padroes/Header';



import './CSS/cards.css'
import Cards from './Cards';


import Imagempadrao from './padrao.png'
import cedro from '././imgs-pontosturisticos/cedro.png'
import galinha from '././imgs-pontosturisticos/galinha.png'
import memorial from '././imgs-pontosturisticos/Memorial.png'
import pedra from '././imgs-pontosturisticos/pedra.png'
import saberes from '././imgs-pontosturisticos/saberes.png'
import fazenda from '././imgs-pontosturisticos/fazenda.png'


function PontosT() {

    var Imagens = [galinha,cedro,memorial,pedra,saberes,fazenda]


    return (
        <div>




            <Header />


            <div className='grupos'>
                <div className='content'>
                    <Cards nome={"Pedra da Galinha Choca"} descricao={" A Pedra da Galinha Choca é um inselberg constituído de dioritos e granitos, que são rochas ígneas ou plutônicas, ou seja, formadas a partir do resfriamento do magma."} links={"https://www.google.com.br/maps/place/Pedra+da+Galinha+Choca/@-4.9857052,-39.0888514,14z/data=!3m1!4b1!4m5!3m4!1s0x7bc2754b3e10cd1:0xe9fd22c4fd488c32!8m2!3d-4.9857055!4d-39.0712988?shorturl=1"}back={Imagens[0]} mensagemclick={"Click aqui para ver no Google maps"} />

                    <Cards nome={"Açude do cedro endereço: açude do cedro"} descricao={"O Açude do Cedro, em Quixadá-CE, foi a primeira grande construção envolvendo rede de canais de irrigação, feita após a seca ocorrida entre os anos de 1877 e 1879. "} links={"https://www.google.com"}back={Imagens[1]} mensagemclick={"Click aqui para ver no Google maps"}/>

                    <Cards nome={"Praça do chalé/ Memorial Rachel de Queiroz"} descricao={"O Chalé da Pedra é uma construção histórica localizada no centro da cidade de Quixadá datada da década de 1920 que tem como uma de seus principais atrativos, o fato de estar sobre um monólito. Hoje abriga um centro cultural. "} links={"https://www.google.com"}back={Imagens[2]} mensagemclick={"Click aqui para ver no Google maps"}/>

                    <Cards nome={"Pedra do cruzeiro"} descricao={"Pedra do Cruzeiro é uma formação rochosa, ou monólito, situado nas imediações do centro da cidade de Quixadá, no estado do Ceará, Brasil, com altura de 190 metros acima do nível do mar. O monólito recebeu esse nome por conta de uma cruz de concreto erguida no seu topo, no ano de 1934. "} links={"https://www.google.com"}back={Imagens[3]} mensagemclick={"Click aqui para ver no Google maps"}/>

                    <Cards nome={"Casa de Saberes Cego Aderaldo"} descricao={" A Casa de Saberes Cego Aderaldo é um espaço institucional da Secretaria da Cultura do Estado do Ceara (Secult), voltado à arte, à educação e ao patrimônio cultural."} links={"https://www.google.com"}back={Imagens[4]} mensagemclick={"Click aqui para ver no Google maps"}/>

                    <Cards nome={"Fazenda não me deixes"} descricao={"A Fazenda Não Me Deixes, enquanto recanto preferido da escritora - falecida em 2003 e, embora natural de Fortaleza, com forte apego a Quixadá, município em que construiu a morada em questão"} links={"https://www.google.com"}back={Imagens[5]} mensagemclick={"Click aqui para ver no Google maps"}/>
                   
                    <Footer></Footer>
                </div>





            </div>







        </div>



    )
}

export default PontosT;
