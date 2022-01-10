import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {getFetch} from '../Productos/Productos.js'
import Spinner from '../Spinner/Spinner.js';



function ItemListContainer({bienvenida}) {
    
    const [prod, setprod] = useState([])
    const [loading, setloading] = useState(true)

    const {idCategoria} = useParams()

    
    useEffect(() => {

        if (idCategoria) {

        getFetch
        .then(resp => setprod(resp.filter(prod => prod.categoria === idCategoria)))
        .catch(err => console.log(err))
        .finally(()=> setloading(false))
            
        } else {

        getFetch
        .then(resp => setprod(resp))
        .catch(err => console.log(err))
        .finally(()=> setloading(false))
            
        }
        
    }, [idCategoria])

    console.log(idCategoria)


    return (

        <div>
            <h1><center>{bienvenida}</center></h1>

            {loading ? <Spinner /> : <ItemList productos = {prod}/>}

            
        </div>

    )
}

export default ItemListContainer
