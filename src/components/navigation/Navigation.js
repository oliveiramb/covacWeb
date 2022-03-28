import React from "react";
import { Link } from "react-router-dom";
import vacina from "../icons/vacina.png"
import paise from "../icons/world.png"
import dicas from "../icons/masc.png"
import hospital from "../icons/hospital.png"
import quarentena from "../icons/lockdown.png"

const Nav = () => {

    const nav = {
        display: "flex",
        justifyContent: "space-around",
        minHeight: "12vh",
        alignItems: 'center',
        fontFamily: "sans-serif",
        background: "black",
        borderRadius: "10px",
        margin: "40px 80px",        
    }
 
    const navLinks = { 
        width: "90%",
        display: "flex",
        justifyContent: "space-around",
        listStyle: "none",
    }

    const link = {
        color: "white",
        textDecoration: "none",
        fontFamily: "Verdana",
    }

    const image = {
  width: 50,
  height: 40,
}
    return (
        <nav style={nav}>
            <ul style={navLinks}>
                <Link style={link} to="/vacinas">
                    <img src={vacina} alt="vacina" style={image}/>
                <li>Vacinas</li>
                </Link>

                <Link style={link} to="/paises">
                <img src={paise} alt="vacina" style={image}/>
                <li>Paises</li>
                </Link>
                
                <Link style={link} to="/dicas">
                <img src={dicas} alt="vacina" style={image}/>
                <li>Dicas</li>
                </Link>

                <Link style={link} to="/hospital">
                <img src={hospital} alt="vacina" style={image}/>
                <li>Hospital</li>
                </Link>

                <Link style={link} to="/quarentena">
                <img src={quarentena} alt="vacina" style={image}/>
                <li>Quarentena</li>
                </Link>

                </ul>
            </nav>   
        
    )
}

export default Nav
