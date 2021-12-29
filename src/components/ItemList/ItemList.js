import { useState} from "react";
import Item from "../Item/Item";



function ItemList({ productos }) {



  return (

    

    <div>

      {productos.map(prod => <Item titulo={prod.title} precio={prod.price} foto={prod.pictureUrl}  /> )}
      
      
    </div>


   )
}

export default ItemList;
 