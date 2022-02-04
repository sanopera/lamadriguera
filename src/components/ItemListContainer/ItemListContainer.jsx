import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner.js';
import { getFirestore, query, collection, getDocs, where } from 'firebase/firestore'
import { getFetch } from '../Productos/Productos';


function ItemListContainer({bienvenida}) {
    
    const [prod, setprod] = useState([]);
    const [loading, setloading] = useState(true);

    const {idCategoria} = useParams();
    
    
    useEffect(() => {


        if(idCategoria){

        const db = getFirestore();
        const queryCollection = query(collection(db, 'productos'), where('categoria', '==' , idCategoria))

        getDocs(queryCollection)
        .then(res => setprod( res.docs.map(prod => ({id: prod.id, ...prod.data() }) ) ))
        setloading(false);

        }else{
              const db = getFirestore();
                const queryCollection = collection(db, 'productos')

                
                getDocs(queryCollection)
                .then(res => setprod( res.docs.map(prod => ({id: prod.id, ...prod.data() }) ) ))
                getFetch
                .finally(()=> setloading(false))

        }
           

        /*if (idCategoria) {

        getFetch
        .then(resp => setprod(resp.filter(prod => prod.categoria === idCategoria)))
        .catch(err => console.log(err))
        .finally(()=> setloading(false))
            
        } else {

        getFetch
        .then(resp => setprod(resp))
        .catch(err => console.log(err))
        .finally(()=> setloading(false))
            
        }*/

    }, [idCategoria]);



    return (

        <div>

            {loading ? <Spinner /> : <ItemList productos = {prod}/>}

            
        </div>

    )
}

export default ItemListContainer
