import { getDoc, doc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestoreApp } from '../../firebase/dbConfig.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import {getFetch} from '../Productos/Productos.js'
import Spinner from '../Spinner/Spinner.js';

function ItemDetailContainer () {

    const [producto, setproducto] = useState({})
    const [loading, setloading] = useState(true)

    const {idDetalle} = useParams()


    useEffect(() => {

        const db  = getFirestore();
        const queryProd = doc(db,'productos',idDetalle);
        getDoc(queryProd).then((resp) => { setproducto({id: resp.id, ...resp.data() }) })
        setloading(false)

        /*if (idDetalle) {
         
            getFetch
            .then(resp => setproducto(resp.find(prod => prod.title === idDetalle)))
            .finally(()=> setloading(false))

        } */

    }, [idDetalle])

    return (
        <div>
            {loading ? <Spinner />  : <ItemDetail producto = {producto} /> }
        </div>
    )
}

export default ItemDetailContainer
