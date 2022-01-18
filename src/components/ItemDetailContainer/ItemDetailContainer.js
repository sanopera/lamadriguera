import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import {getFetch} from '../Productos/Productos.js'

function ItemDetailContainer () {

    const [producto, setproducto] = useState({})
    const [loading, setloading] = useState(true)

    const {idDetalle} = useParams()


    useEffect(() => {

        if (idDetalle) {
         
            getFetch
            .then(resp => setproducto(resp.find(prod => prod.title === idDetalle)))
            .finally(()=> setloading(false))

        } 

    }, [idDetalle])

    return (
        <div>
            {loading ? ""  : <ItemDetail producto = {producto} /> }
        </div>
    )
}

export default ItemDetailContainer
