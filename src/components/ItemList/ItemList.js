import Item from "../Item/Item";



function ItemList({ productos }) {



  return (

    

    <div>

      {productos.map(prod => <div key={prod.id}> <Item titulo={prod.title} precio={prod.price} foto={prod.pictureUrl} id={prod.id}  /> </div> )}
      
      
    </div>


   )
}

export default ItemList;
 