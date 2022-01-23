import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFirestoreApp } from '../../firebase/dbConfig';
import ItemList from '../ItemList/ItemList';
import {getFetch} from '../Productos/Productos.js'
import Spinner from '../Spinner/Spinner.js';
import { getFirestore, query, collection, getDocs, where } from 'firebase/firestore'


function ItemListContainer({bienvenida}) {
    
    const [prod, setprod] = useState([])
    const [loading, setloading] = useState(true)

    const {idCategoria} = useParams()
    
    
    useEffect(() => {

       /* const db = getFirestore()
        const queryCollection = query(collection(db, 'productos'), where('price', '==' , 1000)

        getDocs(queryCollection)
        .then(res => setprod( res.docs.map(prod => ({id: prod.id, ...prod.data() }) ) ))
        console.log(prod)*/

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
