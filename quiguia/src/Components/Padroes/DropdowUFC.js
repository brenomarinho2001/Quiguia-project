import { useState } from "react"
import { Link } from "react-router-dom";
import "../Navbar/style.css";


function DropdownUFC({nome}) {

    const [state,setState] = useState(false);
        
    const showDropdown=()=>{
        setState(true);
    }

    const hideDropdown=()=>{
        setState(false);
    }

    return(
        <div className="dropdown">
           <div className="dropdown-menu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <li className="item">UFC</li>


                {state ?(<ul className="dropdown-list" onMouseEnter={showDropdown}>
                    <li className="item-lista"><a href="https://www.quixada.ufc.br/intinerario-dos-onibus/">Onibus</a></li>
                    <Link to="/Grupos" ><li className="item-lista">Grupos</li></Link>
                    <li className="item-lista"><a href="https://www.quixada.ufc.br/category/destaque/">Informes</a></li>
                    <li className="item-lista"><a href="https://www.ufc.br/calendario-universitario/2022">Calendario</a></li>
                    <li className="item-lista"><a href="https://www.quixada.ufc.br/evento">Eventos</a></li>
                    <Link to="/relatos" ><li className="item-lista">Relatos</li></Link>
                </ul>):
                null}
            </div> 
        </div>
    )



}




export default DropdownUFC