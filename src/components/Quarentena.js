import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";
import Navigation from "./navigation/Navigation"

const Login = () =>  {
  
  const button = {
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
    borderRadius: 10,
    width: 400,
    height: 50,
    border: "none",
    fontFamily: "sans-serif",
    margin: 10,  
    position: 'absolute', left: '25%', top: '25%',
  transform: 'translate(-50%, -50%)',
  }

  const buttonDelete = {
    color: "white",
    backgroundColor: "red",
    textAlign: "center",
    borderRadius: 10,
    width: 400,
    height: 50,
    border: "none",
    fontFamily: "sans-serif",
    margin: 10,  
    position: 'absolute', left: '70%', top: '25%',
  transform: 'translate(-50%, -50%)',
  }

  return (
    
    <div>
      <Navigation/>
        <Link to="/quarentena/formulario">
      <button className="Button" style={button}>Criar o seu formulario</button>
      </Link>

      <Link to="/quarentena">
      <button className="Button" style={buttonDelete}>Deletar o seu formulario</button>
      </Link>
    </div>
  );
}

export default Login;