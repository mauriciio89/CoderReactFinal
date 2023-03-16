import React, { useEffect, useState} from 'react';
import ItemList from './ItemList';
import getDatos from './getProducts';


const ItemListContainer = () => {

  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    getDatos()
    .then((response) => setListaProductos(response))
    .catch((err) => console.error(err))
  }, [])

  console.log(listaProductos)
  return (
    <div className='listContainer'>
      <ItemList products={listaProductos} />
      
    </div>
  )
}

export default ItemListContainer;
