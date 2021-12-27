import React, { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import './ItemCount.css';



function ItemCount({min, max}) {


    const [counter, setcounter] = useState(min)

    const handleIncrement = () => {
        
        counter < max ? setcounter(prev => prev + 1) : alert("Stock maximo del Producto")
        
    }

    const handleDecrement = () => {
        counter > min ? setcounter(prev => prev - 1) : alert("Stock minimo del Producto")
        
    }


  return (
    <div className="contador">

      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={handleDecrement}>-</Button>
        <Button variant="secondary">{counter}</Button>
        <Button variant="secondary" onClick={handleIncrement}>+</Button>
      </ButtonGroup>
    </div>
  );
}

export default ItemCount;
