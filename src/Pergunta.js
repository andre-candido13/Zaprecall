
import { useState } from "react"
import cards from "./cartas"


  export default function Pergunta () {

    const [jogadas, setJogadas] = useState(0)

    function virarCarta (p) {
      console.log(p)
      



    }

    return (
      <div> {cartas.map((p) => ( 
      <div className="pergunta-fechada">  

       <p> Pergunta {p.id} </p>
       <button OnClick={() => virarCarta(p)}> <img src="./image/seta_play.png"/></button>

       </div>))}
       </div> 

    )
  }

  