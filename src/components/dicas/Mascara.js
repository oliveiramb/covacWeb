import React from "react"
import arrow from "../icons/arrow.png"
import { Link } from "react-router-dom";

const mascara  = () => {
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
        <h1 style={textTitle}><bold>O uso da mascara{"\n"}</bold></h1>
 <div><h1 style={text}>O uso da mascara e recomendado em ambiente coletivo como em <bold>SALA DE AULA, TRANSPORTE PUBLICO, EVENTOS OU REUNIÃO{"\n"}</bold></h1></div>
 <div><h1 style={text}>A mascara e fortamente recomendado para reduzir a exposição e a contaminação de <bold>COVID-19{"\n"}</bold></h1></div>
 <div><h1 style={text}>E recomendado lavar as mãos antes de colocar a mascara, colocando-a sobre o <bold>NARIZ e a BOCA{"\n"}</bold></h1></div>
 </div>

        </div>
    )
}

export default mascara