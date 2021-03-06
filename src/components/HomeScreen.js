import React, {useState} from "react";
import { Link } from "react-router-dom";
import covacLogo from "../components/icons/covacLogo.png"
import googleplayLogo from "../components/icons/googleplay.png"
import covacApp from "../components/icons/covacAppLogo.png"
import Modal from "react-modal/lib/components/Modal";


const Home = () => {
  const [modalIsOpen1, setModalIsOpen1] = useState(false)
  const [modalIsOpen2, setModalIsOpen2] = useState(false)
  const [modalIsOpen3, setModalIsOpen3] = useState(false)
  const [modalIsOpen4, setModalIsOpen4] = useState(false)
  const [modalIsOpen5, setModalIsOpen5] = useState(false)
  const [modalIsOpen6, setModalIsOpen6] = useState(false)
  const [modalIsOpen7, setModalIsOpen7] = useState(false)


   

    const image = {
        width: 500,
        height: 500,
        position: 'absolute', left: '4%', top: '20%',
        
      }

        const text = {
            textAlign: "center",
            fontSize: 28,
            margin:30,
            color: "black",
          }
        
          const textTitle = {
            textAlign: "center",
            fontSize: 60,
            margin: 10,
            color: "black",
          }
        
          const alignText = {
            position: 'absolute', left: '50%', top: '1%',
            transform: 'translate(-20%, 50%)',
            borderRadius: 10,
            margin: 0,
          }

          
          const textCovid = {
            position: 'absolute', left: '50%', top: '-20%',
            transform: 'translate(-50%, 50%)',  
          }

          const div = {
            position: 'absolute', left: '50%', top: '80%',
            transform: 'translate(-50%, 50%)', 
        }
        
        
        const button = {
            color: "white",
            flexDirection: "row",
            backgroundColor: "black",
            textAlign: "center",
            borderRadius: 10,
            width: 300,
            height: 100,
            border: "none",
            fontFamily: "Verdana",
            margin: 20,
             
        }
       

          const googleplay = {
            width: 250,
            height: 110,
            position: 'absolute', left: '33%', top: '500%',
          }

          const nav = {
            display: "flex",
            justifyContent: "space-around",
            minHeight: "12vh",
            alignItems: 'center',
            fontFamily: "sans-serif",
            background: "black",
            borderRadius: "10px",
            margin: "40px 80px", 
            textAlign: "center",
       
        }
     
        const navLinks = { 
            width: "90%",
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
        }

        const link = {
          color: "black",
          backgroundColor: "white",
          borderRadius: 10,
          textDecoration: "none",
          fontFamily: "Verdana",
          width: 100,
          height: 40,
      }

      const pageLink = {
        color: "white",
        textDecoration: "none",
        fontFamily: "Verdana",
      }

      const buttonPopup = {
        color: "white",
            flexDirection: "row",
            backgroundColor: "black",
            textAlign: "center",
            borderRadius: 10,
            width: 300,
            height: 100,
            border: "none",
            fontFamily: "Verdana",
            position: 'absolute', left: '50%', top: '70%',
            transform: 'translate(-50%, 50%)',  
      }  

      const covacAppLogo = {
        position: 'absolute', left: '50%', top: '60%',
        transform: 'translate(-50%, 50%)',  
        width: 300,
        height: 300,
      }

      const covid = {
        position: 'absolute', left: '50%', top: '100%',
        transform: 'translate(-50%, 50%)',  
       
      }

      const covacapp = {
        position: 'absolute', left: '50%', top: '230%',
        transform: 'translate(-50%, 50%)',  
       
      }
    return (
        <div style={nav}>
            <ul style={navLinks}>

              <a href="./#sobre" style={pageLink}>Sobre</a>
              
              <a href="./#covid" style={pageLink}>Tipos de covid</a>

              <a href="./#appCovac" style={pageLink}>App</a>

              <Link style={link} to="/signin">
              <li>Sign In</li>
              </Link>

              <Link style={link} to="/login">
              <li>Log In</li>
              </Link>
            </ul>
          <div>
            </div>
        <img src={covacLogo} alt="covacLogo" style={image}/>

        <div style={alignText} id="sobre">
        <h1 style={textTitle}>Covac{"\n"}</h1>
        <h2 style={text}>O covac e um site que foi criado para que voc?? tenha um melhor acesso
        todos os dados sobre o Covid-19,{"\n"} se cadastrando voc?? vai poder usufruir
        de todos os recursos propositos
        Dados sobre as vacinas e quais paises aceitam elas
        Dicas sobre Sintomas e transmiss??o
        Os numeros de vacinados no Brasil e em todos os Estados,{"\n"}
        Alem de poder enviar um formulario sobre o seu estado caso voce tenha covid-19</h2>
        </div>
        <div id="covid" style={covid}>

        </div>
        <div style={div}>
        
            <h1 style={textCovid}>Tipos de Covid</h1>
            <div>
           <button style={button} onClick={()  => setModalIsOpen1(true)}>Alfa</button>
           <Modal isOpen={modalIsOpen1} 
           onRequestClose={()=> setModalIsOpen1(false)}
           >
               <h2 style={textTitle}>Alfa</h2>
               <p style={text}>Originalmente conhecida como B.1.1.7, a variante Alfa foi identificada pela primeira vez em setembro de 2020, no condado de Kent, no Reino Unido. Essa linhagem ?? altamente transmiss??vel e j?? foi detectada em mais de 80 pa??ses.</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen1(false)}>Close</button>
           </Modal>
       
           <button style={button} onClick={()  => setModalIsOpen2(true)}>Beta</button>
           <Modal isOpen={modalIsOpen2} 
           onRequestClose={()=> setModalIsOpen2(false)}
           >
               <h2 style={textTitle}>Beta</h2>
               <p style={text}>Vista pela primeira vez na ??frica do Sul, esta variante tem a muta????o E484K, que est?? ligada ao escape imunol??gico, e a muta????o N501Y, que ?? suspeita de ajudar outras variantes a serem mais contagiosas.</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen2(false)}>Close</button>
           </Modal>
       </div>

       <div >
           <button style={button} onClick={()  => setModalIsOpen3(true)}>Gama</button>
           <Modal isOpen={modalIsOpen3} 
           onRequestClose={()=> setModalIsOpen3(false)}
           >
               <h2 style={textTitle}>Gama</h2>
               <p style={text}>Inicialmente denominada P.1, foi vista pela primeira vez no Brasil, tamb??m possui as muta????es E484K e N501Y, al??m de mais de 30 outras muta????es. Foi demonstrado que ela escapa dos efeitos do tratamento com anticorpos monoclonais da Lilly, mas n??o de outro produzido pela Regeneron.</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen3(false)}>Close</button>
           </Modal>

           <button style={button} onClick={()  => setModalIsOpen4(true)}>Delta</button>
           <Modal isOpen={modalIsOpen4} 
           onRequestClose={()=> setModalIsOpen4(false)}
           >
               <h2 style={textTitle}>Delta</h2>
               <p style={text}>A variante Delta, originalmente conhecida como B.1.617.2, existe desde o final de 2020, mas nos ??ltimos meses tornou-se rapidamente dominante em muitos pa??ses. ?? respons??vel por mais de 80% dos casos rec??m-diagnosticados nos Estados Unidos, de acordo com os Centros de Controle e Preven????o de Doen??as (CDC).</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen4(false)}>Close</button>
           </Modal>
       </div>

       <div>
           <button style={button} onClick={()  => setModalIsOpen5(true)}>??micron</button>
           <Modal isOpen={modalIsOpen5} 
           onRequestClose={()=> setModalIsOpen5(false)}
           >
               <h2 style={textTitle}>??micron</h2>
               <p style={text}>A OMS incluiu, no dia 26 de novembro, essa linhagem na lista de variantes de preocupa????o. Os casos foram identificados na Botsuana, ??frica do Sul, Hong Kong, Israel, B??lgica, Reino Unido, Alemanha, It??lia e Holanda.</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen5(false)}>Close</button>
           </Modal>
       
           <button style={button} onClick={()  => setModalIsOpen6(true)}>Mu</button>
           <Modal isOpen={modalIsOpen6} 
           onRequestClose={()=> setModalIsOpen6(false)}
           >
               <h2 style={textTitle}>Mu</h2>
               <p style={text}>A variante Mu foi identificada pela primeira vez na Col??mbia em janeiro e, desde ent??o, foi relatada em 39 pa??ses, de acordo com o relat??rio. Embora a preval??ncia global da variante Mu tenha diminu??do e atualmente esteja abaixo de 0,1%, sua preval??ncia na Col??mbia aumentou para 39% e no Equador para 13%</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen6(false)}>Close</button>
           </Modal>
       </div>

       <div>
           <button style={button} onClick={()  => setModalIsOpen7(true)}>Lambda</button>
           <Modal isOpen={modalIsOpen7} 
           onRequestClose={()=> setModalIsOpen7(false)}
           >
               <h2 style={textTitle}>Lambda</h2>
               <p style={text}>Esta variante do coronav??rus foi identificada pela primeira vez no Peru em dezembro de 2020. Em 14 de junho de 2021 foi designada como uma variante de interesse.

A variante n??o ?? t??o preocupante quanto a variante Delta nos Estados Unidos, que tem impulsionado um aumento de casos em todo o pa??s, mas os primeiros estudos sugerem que ela tem muta????es que a tornam mais transmiss??vel do que a variante original do coronav??rus.</p>
               <button style={buttonPopup} onClick={() => setModalIsOpen7(false)}>Close</button>
           </Modal>
       </div>
       </div>

           <div id="appCovac" style={covacapp}>
               <h1 >Voc?? tambem pode baixar o nosso aplicativo no Google Play Store.</h1>
               <img src={covacApp} alt="covacAppLogo" style={covacAppLogo}/>
               <img src={googleplayLogo} alt="googleplay" style={googleplay}/>
           </div>
           
           </div>
            
    )
} 

export default Home; 