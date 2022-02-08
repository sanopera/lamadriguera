import { getDoc, doc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import Spinner from '../Spinner/Spinner.js';


function ItemDetailContainer() {

    const [producto, setproducto] = useState({})
    const [loading, setloading] = useState(true)

    const { idDetalle } = useParams()


    useEffect(() => {

        const db = getFirestore();
        const queryProd = doc(db, 'productos', idDetalle);
        getDoc(queryProd).then((resp) => { setproducto({ id: resp.id, ...resp.data() }) })
            .finally(() => setloading(false))


    }, [idDetalle])

    return (
        <div>
            {loading ? <Spinner /> : <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer
