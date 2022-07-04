import DropdownUFC from "./DropdowUFC";
import DropdownQuixada from "./Dropdow_Quixada";
import logo from "../imgs/Logo.png"
import { Link } from "react-router-dom";


function Header() {


    return(
        <header>
            {/* Header */}
            <nav className='header'>
                    <Link to="/"><img src={logo} className="logo"></img></Link>
                    
                    <ul className="nav-list">
                        <DropdownUFC/>
                        <li className="item"><a href="/servicos">Serviços</a></li>
                        <DropdownQuixada/>
                        <li className="item"><a href="/SobreNos">Sobre nós</a></li>
                    </ul>
            </nav>
            </header>
    )
}

export default Header;