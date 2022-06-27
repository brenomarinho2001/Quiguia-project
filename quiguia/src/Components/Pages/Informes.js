import Header from "../Padroes/Header";
import Footer from "../Padroes/Footer";
import "./Informes.css";

function CardLateral({ nome }) {
  return (
    <div className="bloco">
      <h3 className="nome">{nome}</h3>
    </div>
  );
}

function MenuLateral() {
  let cards = [
    {
      nome: "SITE UFC",
    },
    {
      nome: "INSTAGRAM UFC",
    },
    {
      nome: "SITE PRAE",
    },
    {
      nome: "INSTAGRAM PRAE",
    },
    {
      nome: "INSTAGRAM PACCE",
    },
    {
      nome: "SITE PET-TI ",
    },
    {
      nome: "INSTAGRAM PET-TI",
    },
    {
      nome: "INSTAGRAM INFORGIRL",
    },
    {
      nome:"INSTAGRAM EMPREENDAY"
    },
    {
      nome:"INSTAGRAM INOVE UFC"
    },
  ];
  let cardsLaterais = cards.map((card) => (
    <CardLateral nome={card.nome}></CardLateral>
  ));
  return (
    <div>
      <div className="menuLateral">{cardsLaterais}</div>
    </div>
  );
}

function Informes() {
  return (
    <div>
      <Header></Header>
      <MenuLateral></MenuLateral>
      <Footer></Footer>
    </div>
  );
}

export default Informes
