import React from "react"
import arrow from "../icons/arrow.png"
import { Link } from "react-router-dom";


const transmissao  = () => {

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
        <h1 style={textTitle}><bold>A transmissão{"\n"}</bold></h1>
    <div><h1 style={text}><bold>A transmissão por CONTATO:</bold> ela e feita direitament com superfice contaminada, ou com uma pessoa infectada por <bold>COVID-19</bold> durante um <bold>aperto de mãos</bold> seguindo de <bold>toque nos olhos</bold>, <bold>nariz ou boca</bold>{"\n"}</h1></div>
    <div><h1 style={text}><bold>A transmissão por GOTICULAS:</bold> e feita diretamente por meio de exposição a goticulas resiratorias contendo virus por um pessoa comtaminada quando ele se encontra e menos de <bold>1 metro de distancia{"\n"}</bold></h1></div>
    <div><h1 style={text}><bold>A transmissão por AEROSSOL:</bold> ela e procedida por goticulas respiratorias contendo o virus que podem permanecer suspensas no ar, podem ser levadas pelo ar em distencias de ate 1 metro{"\n"}</h1></div>
    </div>

        </div>
    )
}

export default transmissao