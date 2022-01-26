import Item from "../Item/Item";



function ItemList({ productos }) {



  return (

    

    <div>

      {productos.map(prod => <Item titulo={prod.title} precio={prod.price} foto={prod.pictureUrl} id={prod.id}  /> )}
      
      
    </div>


   )
}

export default ItemList;
 