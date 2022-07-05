import Header from "../Padroes/Header"
import CardsRelatos from "./CardsRelatos"
import "./relatos.css"

export function Relatos({nome,texto}){

    return(

        <>
        <Header/>
        
        
        <div className="container2">
            
        
        <div className="containertitulo">
            <h2 className="titulorelato">Relatos Sinceros: <i>"dicas precisosas para sobreivencia"</i></h2>
        </div>
            
            <div className="container3">

            <h2 className="titulorelato2">Estudantes de Design Digital:</h2>                
        

                

                <CardsRelatos nome={"Igor Teixeira"} texto={"Aproveite tudo que a vida acadêmica pode te proporcionar e não tenha pressa. Viage. vá a congressos e palestras, faça cursos de verão, veja amostras, seja monitor, vá a grupos de estudos e eventos da universidade. Você conquistou seu lugar aqui, aproveite tudo que lhe é ofertado"}/>
                <CardsRelatos nome={"Igor Teixeira"} texto={"Peça ajuda: nem tudo dá pra fazer sozinho e não é vergonha contar com os amigos"}/>
                <CardsRelatos nome={"Arusha Gomes (DD)"} texto={"Tudo é experiência e horas complementares. Vai tudo pro currículo."}/>
                <CardsRelatos nome={"Arusha Gomes (DD)"} texto={"“Sobre o RUna dúvida, vá na opção do frangocaso a empresa fornecedora seja uma m****, prepare marmitas congeladas em casa e leve lanchinhostem muito tutorial de receita saudável e barata no youtube”"}/>
                <CardsRelatos nome={"Arusha Gomes (DD)"} texto={"“Fica ligado o tempo inteiro, ligado nos pilantra e também nos bagunceiro, ai nao faz trabalho em equipe com eles"}/>
                <CardsRelatos nome={"João Victor (DD)"} texto={"“Projeto não é tão ruim assim pessoal!!”"}/>
                <CardsRelatos nome={"Pedro Falcão (DD)"} texto={"Aprenda a fazer portfólio e coloquem seus trabalhos lá. Bom fazer logo desde cedo!"}/>
                <CardsRelatos nome={"Mary (DD)"} texto={"“Se enturmem com o povo da turma de vocês, além de interação social ser algo bom, na faculdade um ajuda o outro, principalmente em trabalhos em equipe”"}/>
            
                <h2 className="titulorelato2">Estudantes de Engenharia de Software:</h2>   
                <CardsRelatos nome={"Caio Caminha (ES)"} texto={"Fica ligado o tempo inteiro, ligado nos pilantra e também nos bagunceiro, ai nao faz trabalho em equipe com eles"}/>

                <h2 className="titulorelato2">Estudantes de Sistema Informação</h2>   
    
                <CardsRelatos nome={"Yara (SI)"} texto={"Não se cobrem tanto, principalmente no final do semestre. Sempre parece q a gnt n vai conseguir finalizar todos os trabalhos ou estudar pra tudo, mas a gnt sempre consegue, ou não e ta tudo bem também kkk"}/>
              
            </div>

           
           
        </div>
        </>
           
        
    )
}