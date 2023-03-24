import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import getDatos from './getProducts';


    export const ItemDetailContainer = () => {
          const [producto, setProducto] = useState({});
          const {id} = useParams();
        

          useEffect(() => {
           getDatos()
           .then(res=> setProducto(res.find(item=> item.id === parseInt(id))))
            },[id])
           
          
  return (
    <ItemDetail data={producto}/>
  );
}

export default ItemDetailContainer