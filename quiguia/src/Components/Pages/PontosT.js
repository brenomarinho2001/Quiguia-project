
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

                    <Cards nome={"Açude do cedro endereço: açude do cedro"} descricao={"O Açude do Cedro, em Quixadá-CE, foi a primeira grande construção envolvendo rede de canais de irrigação, feita após a seca ocorrida entre os anos de 1877 e 1879. "} links={"https://www.google.com/maps/place/A%C3%A7ude+do+Cedro+(Acesso+pelo+Cedro+Novo)/@-4.9802328,-39.06564,15z/data=!4m2!3m1!1s0x0:0x4965637a2a6b4e29?sa=X&ved=2ahUKEwjE1uuJ69L4AhVmvJUCHcy3AHIQ_BJ6BAhkEAU"}back={Imagens[1]} mensagemclick={"Click aqui para ver no Google maps"}/>

                    <Cards nome={"Praça do chalé/ Memorial Rachel de Queiroz"} descricao={"O Chalé da Pedra é uma construção histórica localizada no centro da cidade de Quixadá datada da década de 1920 que tem como uma de seus principais atrativos, o fato de estar sobre um monólito. Hoje abriga um centro cultural. "} links={"https://www.google.com/maps/search/Pra%C3%A7a+do+chal%C3%A9%2F+Memorial+Rachel+de+Queiroz/@-4.9650063,-39.0440815,15z/data=!3m1!4b1"}back={Imagens[2]} mensagemclick={"Click aqui para ver no Google maps"}/>

                    <Cards nome={"Pedra do cruzeiro"} descricao={"Pedra do Cruzeiro é uma formação rochosa, ou monólito, situado nas imediações do centro da cidade de Quixadá, no estado do Ceará, Brasil, com altura de 190 metros acima do nível do mar. O monólito recebeu esse nome por conta de uma cruz de concreto erguida no seu topo, no ano de 1934. "} links={"https://www.google.com/maps/place/Pedra+do+Cruzeiro/@-4.9662714,-39.015466,18z/data=!3m1!4b1!4m5!3m4!1s0x7be9fb950fa874d:0xadd1ceb994dd13bd!8m2!3d-4.9666996!4d-39.0144004"}back={Imagens[3]} mensagemclick={"Click aqui para ver no Google maps"}/>

                    <Cards nome={"Casa de Saberes Cego Aderaldo"} descricao={" A Casa de Saberes Cego Aderaldo é um espaço institucional da Secretaria da Cultura do Estado do Ceara (Secult), voltado à arte, à educação e ao patrimônio cultural."} links={"https://www.google.com/maps/place/Casa+de+Saberes+Cego+Aderaldo/@-4.9701706,-39.0176344,17z/data=!3m1!4b1!4m5!3m4!1s0x7be9fb89da3f421:0xd3b6693b2f44a064!8m2!3d-4.9701759!4d-39.0154458"}back={Imagens[4]} mensagemclick={"Click aqui para ver no Google maps"}/>

                    <Cards nome={"Fazenda não me deixes"} descricao={"A Fazenda Não Me Deixes, enquanto recanto preferido da escritora - falecida em 2003 e, embora natural de Fortaleza, com forte apego a Quixadá, município em que construiu a morada em questão"} links={"https://www.google.com/maps/place/Fazenda+N%C3%A3o+Me+Deixes/@-4.8172564,-38.9720556,17z/data=!3m1!4b1!4m5!3m4!1s0x7bebdf4e310134d:0x340298b3b31b2dcf!8m2!3d-4.8172617!4d-38.9698669"}back={Imagens[5]} mensagemclick={"Click aqui para ver no Google maps"} />
                   
                    <Footer></Footer>
                </div>





            </div>







        </div>



    )
}

export default PontosT;
