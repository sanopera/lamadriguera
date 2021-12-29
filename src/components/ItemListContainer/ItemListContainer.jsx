import { useEffect, useState } from 'react'
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import {getFetch} from '../Productos/Productos.js'
import Spinner from '../Spinner/Spinner.js';



function ItemListContainer({bienvenida}) {
    
    const [prod, setprod] = useState([])
    const [loading, setloading] = useState(true)

    
    useEffect(() => {
        getFetch
        .then(resp => setprod(resp))
        .catch(err => console.log(err))
        .finally(()=> setloading(false))
    }, [])


    return (

        <div>
            <h1><center>{bienvenida}</center></h1>

            {loading ? <Spinner /> : <ItemList productos = {prod}/>}

            
        </div>

    )
}

export default ItemListContainer
