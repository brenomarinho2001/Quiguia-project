import { useState } from "react"
import { Link } from "react-router-dom";

function DropdownQuixada() {

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
                <li>Quixadá</li>


                {state ?(<ul className="dropdown-list" onMouseEnter={showDropdown}>
                    <Link to="/PontosTuristicos" ><li className="item-lista">Pontos Turisticos</li></Link>
                    <Link to="/Contatos" ><li className="item-lista">Contatos</li></Link>
                    <Link to="Agendas" ><li className="item-lista">Eventos</li></Link>
                    <Link to="/Moradia" ><li className="item-lista">Moradia</li></Link>
         
                </ul>):
                null}
            </div> 
        </div>
    )



}




export default DropdownQuixada