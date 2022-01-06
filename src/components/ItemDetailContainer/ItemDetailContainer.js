import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getFetch} from '../Productos/Productos.js'

function ItemDetailContainer () {

    const [producto, setproducto] = useState({})
    const [loading, setloading] = useState(true)


    useEffect(() => {

        getFetch
        .then(resp => setproducto(resp.find(prod => prod.id === 1)))
        .finally(()=> setloading(false))

    }, [])

    return (
        <div>
            {loading ? ""  : <ItemDetail producto = {producto} /> }
        </div>
    )
}

export default ItemDetailContainer
