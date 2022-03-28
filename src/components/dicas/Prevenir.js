import React from "react"
import arrow from "../icons/arrow.png"
import { Link } from "react-router-dom";

const prevenir  = () => {

    const text = {
        textAlign: "center",
        fontSize: 28,
        margin: 10,
        color: "black",
      }
    
      const textTitle = {
        textAlign: "center",
        fontSize: 60,
        margin: 10,
        color: "black",
      }
    
      const alignText = {
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
      
      }

    return (
        <div>
            <Link to="/dicas">
        <h1><img src={arrow} alt="arrow" style={{
          color: "#f0f8ff",
           width: 60,
           height: 60,
           border: "none",
           position: 'absolute', left: '5%', top: '5%',
           transform: 'translate(-50%, 10%)',
        }}/></h1>
        </Link>

        <div style={alignText}>
        <h1 style={textTitle}><bold>Prevenir a não contaminação de COVID-19{"\n"}</bold></h1>

        <div><h1 style={text}>As medidas indicadas pela <bold>OMS (Organização Mundial da Saude)</bold> estão indicadas as medidas de: <bold>DISTANCIAMENTO SOCIAL, HIGIENIZAÇÃO DAS MÃOS,</bold> uso de 
         <bold>{"\n"}MASCARA,{"\n"}</bold> Em casos de suspeita de contaminação de{"\n"}<bold>COVID-19</bold> e recomendado o <bold>ISOLAMENTO SOCIAL</bold>{"\n"}</h1></div>
        </div>
        </div>
    )
}

export default prevenir