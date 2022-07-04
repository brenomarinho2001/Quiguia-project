import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import MovingText from 'react-moving-text'

function Corpo01() {

    return (
        <div id="showcase">
            <div class="showcase-container">
                <MovingText type="typewriter"
                        dataText={[
                        "Mais que um Guia de Quixadá.",
                        'Um guia poderoso de Quixadá',
                        ]} />
                
                <MovingText
                    type="pulse"
                    duration=".5s"
                    delay="1s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="infinite"
                    fade="fadeOutToRight"
                    fillMode="none">
                    <p className='textoquiguia'>informações importantes de Quixadá.</p>
                    </MovingText>

                <Link to="/principal" class="btn-primary2" ><button class="btn-primary">Acessar</button></Link>
                
            </div>

      

                

        </div>


    )
}

export default Corpo01;