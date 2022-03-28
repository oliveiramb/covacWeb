import React from "react";
import covacLogo from "../components/icons/covacLogo.png"
import { Link } from "react-router-dom";


const Signin =() =>  {

const area = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute', left: '30%', top: '50%',
  transform: 'translate(-50%, -50%)',

}

const input = {
  textAlign: "center",
  backgroundColor: "#f0f8ff",
  color: "blue",
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
}

const text = {
  fontFamily: "Verdana",
}

const image = {
  width: 600,
  height: 600,
  position: 'absolute', left: '200%', top: '-20%',
  transform: 'translate(-50%, 10%)',
}

  return (
    <div style={area}>

      <h1 style={text}>Sign In</h1>
      <input placeholder="Nome" style={input}/>

      <input placeholder="Email" style={input}/>

      <input placeholder="Password" style={input}/>

      <input placeholder="Tipo de vacina" style={input}/>

      <Link to="/vacinas">
      <button className="Button" style={button}>Submit</button>
      </Link>

      <Link to="/login">
      <button className="Button" style={button}>Go to Login</button>
      </Link>

      <img src={covacLogo} alt="covacLogo" style={image}/>

    </div>
  );
}

export default Signin;