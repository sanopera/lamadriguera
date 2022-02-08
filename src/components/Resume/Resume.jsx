import React from 'react';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './Resume.css';

function Resume( { idOrder } ) {


  return <div className='centro'>

        
         <br /><img src="logoMadriguera.png" alt="" className='logoMadriguera' /><br />
         <br /><h3>Muchas Gracias! Usted tiene la orden {idOrder}</h3>
         <img src="iloveyou3000.jpg" alt="" className='logo'/><br />
         <Link to="/"><Button>Continuar comprando</Button></Link>

      
  </div>;
}

export default Resume;
