import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner.js';
import { getFirestore, query, collection, getDocs, where } from 'firebase/firestore'


function ItemListContainer( ) {

    const [prod, setprod] = useState([]);
    const [loading, setloading] = useState(true);

    const { idCategoria } = useParams();


    useEffect(() => {


        if (idCategoria) {

            const db = getFirestore();
            const queryCollection = query(collection(db, 'productos'), where('categoria', '==', idCategoria))

            getDocs(queryCollection)
                .then(res => setprod(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            setloading(false);

        } else {
            const db = getFirestore();
            const queryCollection = collection(db, 'productos')


            getDocs(queryCollection)
                .then(res => setprod(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .finally(() => setloading(false))

        }

    }, [idCategoria]);



    return (

        <div>

            {loading ? <Spinner /> : <ItemList productos={prod} />}


        </div>

    )
}

export default ItemListContainer
