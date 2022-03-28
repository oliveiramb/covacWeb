import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Navigation from "./navigation/Navigation"

const Login = () =>  {
  return (
    <div>
      <Navigation/>
      <h1 style={{
          position: 'absolute', left: '50%', top: '20%',
          transform: 'translate(-50%, 10%)',
          fontFamily: "Verdana",
        }}>Dicas contra a Covid-19</h1>
        
        <Link to="/dicas/sintomas">
        <button style = {{
            color: "white",
            backgroundColor: "black",
            textAlign: "center",
            borderRadius: 10, 
            width: 300,
            height: 100,
            fontFamily: "Verdana",
            margin: 10, 
            position: 'absolute', left: '35%', top: '33%',
            transform: 'translate(-50%, 10%)',
        }}>Sintomas</button>
        </Link>

        <Link to="/dicas/transmissao">
        <button style = {{
            color: "white",
            backgroundColor: "black",
            textAlign: "center",
            borderRadius: 10,
            width: 300,
            height: 100,
            fontFamily: "Verdana",
            margin: 10, 
            position: 'absolute', left: '60%', top: '33%',
            transform: 'translate(-50%, 10%)',
        }}>Transmissão</button>
        </Link>

        <Link to="/dicas/prevenir">
        <button style = {{
            color: "white",
            backgroundColor: "black",
            textAlign: "center",
            borderRadius: 10,
            width: 300,
            height: 100,
            fontFamily: "Verdana",
            margin: 10, 
            position: 'absolute', left: '60%', top: '55%',
            transform: 'translate(-50%, 10%)',
        }}>Prevenir</button>
        </Link>

        <Link to="/dicas/mascara">
        <button style = {{
            color: "white",
            backgroundColor: "black",
            textAlign: "center",
            borderRadius: 10,
            width: 300,
            height: 100,
            fontFamily: "Verdana",
            margin: 10,
            position: 'absolute', left: '35%', top: '55%',
            transform: 'translate(-50%, 10%)',
        }}>Mascara</button>
        </Link>
    </div>
  );
}

export default Login;