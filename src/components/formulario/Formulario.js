import React from "react";
import { Link } from "react-router-dom";
import arrow from "../icons/arrow.png"


const Signin =() =>  {

const area = {
  position: 'static', left: '-5%', top: '5%',
  transform: 'translate(7%, 50%)',

}

const input = {
  textAlign: "center",
  backgroundColor: "#f0f8ff",
  color: "black",
  borderRadius: 10, 
  width: 400,
  height: 50,
  border: "none",
  fontFamily: "Verdana",
  margin: 10,  
  
}

const button = {
  color: "white",
  backgroundColor: "black",
  textAlign: "center",
  borderRadius: 10,
  width: 400,
  height: 50,
  border: "none",
  fontFamily: "Verdana",
  margin: 10,  
  position: 'static', left: '-5%', top: '5%',
  transform: 'translate(105%, 50%)',
}

const text = {
  fontFamily: "Verdana",
  position: 'static', left: '-5%', top: '5%',
  transform: 'translate(24%, -100%)',
}


  return (
    <div style={area}>
 <Link to="/quarentena">
        <h1><img src={arrow} alt="arrow" style={{
          color: "#f0f8ff",
           width: 60,
           height: 60,
           border: "none",
           position: 'absolute', left: '-1%', top: '-50%',
           transform: 'translate(-50%, 10%)',
        }}/></h1>
        </Link>
      <h1 style={text}>Formulario de diagnostico</h1>

      <input placeholder="Email" style={input}/>

      <input placeholder="Nome" style={input}/>

      <input placeholder="Numero de celular" style={input}/>

      <input placeholder="Data de diagnostico" style={input}/>

      <input placeholder="Data de sua quarentena" style={input}/>

      <input placeholder="lugar que teve covid" style={input}/>

      <input placeholder="Nome de sua vacina" style={input}/>

      <input placeholder="N° de pessoas em contato" style={input}/>

      <input placeholder="Sintomas" style={input}/>

      <Link to="/quarentena">
      <button className="Button" style={button}>Enviar formulario</button>
      </Link>

      

    </div>
  );
}

export default Signin;