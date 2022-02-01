import React from 'react';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Resume( { idOrder } ) {


  return <div>

        <br /><center><h3>Muchas Gracias! Usted tiene la orden {idOrder}</h3><br /> <br />
         <img src="logoMadriguera.png" alt="" width={100} /><br /><br />
         <Link to="/"><Button>Continuar comprando</Button></Link></center>

      
  </div>;
}

export default Resume;
