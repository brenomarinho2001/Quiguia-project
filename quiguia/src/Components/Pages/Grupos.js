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
                    <Cards nome={"Célula de RPG"} descricao={"Gerenciada pelo aluno Caio Caminha e colaboradores, a célula tem como objetivo o estudo de mecânicas, mercado e características do RPG, bem como promover um ambiente de descontração e aconchego para os participantes que desejam descobrir e jogar RPG de mesa."} links={"https://www.google.com"} horario={"Terça-feira, das 18:30 ás 21:00"} sala={"Sala 3, bloco 1"}/>
                    <Cards nome={"Grupo de Games"} descricao={"O grupo de games funciona a partir de um conjunto de alunos reunidos que trazem consoles para jogar durante as horas vagas. Possuindo dentre sua biblioteca, diversos jogos de luta, elaborando competições e promovendo recreação entre os participantes e interessados."} links={"https://www.google.com"} horario={"Terça, das 12:00 ás 15:40"} sala={"Sala 2, bloco 1"}/>
                    <Cards nome={"Grupo de Just Dance"} descricao={"Organizado principalmente pelos alunos de DD, o grupo de Just Dance se reúne na semana promovendo um ambiente de recreação e socialização entre seus participantes. Dispondo de um projetor, os alunos selecionam músicas e vídeos para dançar e aproveitar os horários vagos."} links={"https://www.google.com"} horario={"Quintas das 11:30 ás 13:30"} sala={"Sala 2, bloco 4"}/>
                    <Cards nome={"English Club"} descricao={"Reunidos em prol de melhorar seu conhecimento sobre o inglês, o english Club existe a partir da reunião de alunos de diversos cursos, tendo atividades que praticamente a escuta e fala utilizando assuntos atuais e principalmente voltados para a linguagem moderna e jovem."} links={"https://www.google.com"} horario={"FALTA PROCURAR"} sala={"FALTA PROCURAR"}/>
                    <Cards nome={"Célula de RPG"} descricao={"Gerenciada pelo aluno Caio Caminha e colaboradores, a célula tem como objetivo o estudo de mecânicas, mercado e características do RPG, bem como promover um ambiente de descontração e aconchego para os participantes que desejam descobrir e jogar RPG de mesa."} links={"https://www.google.com"} />

                    <Footer></Footer>
                </div>





            </div>







        </div>



    )
}

export default Grupos;
