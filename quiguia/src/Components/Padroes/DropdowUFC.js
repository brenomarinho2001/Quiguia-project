import { useState } from "react"
import { Link } from "react-router-dom";


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
                <li>UFC</li>


                {state ?(<ul className="dropdown-list" onMouseEnter={showDropdown}>
                    <Link to="/Agendas" ><li className="item-lista">Agendas</li></Link>
                    <Link to="Agendas" ><li className="item-lista">Ônibus</li></Link>
                    <Link to="/Grupos" ><li className="item-lista">Grupos</li></Link>
                    <Link to="Agendas" ><li className="item-lista">Informes</li></Link>
                    <Link to="Agendas" ><li className="item-lista">Calendario</li></Link>
                </ul>):
                null}
            </div> 
        </div>
    )



}




export default DropdownUFC