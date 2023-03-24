import React, { useEffect, useState} from 'react';
import ItemList from './ItemList';
import getDatos from './getProducts';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
const {categoriaId} = useParams()
console.log(categoriaId)

  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    console.log();
    getDatos()
    .then((response) => {
      if(categoriaId){
        console.log();
        const getProductsByCategory = response.filter(producto => producto.categoryId === categoriaId)
        setListaProductos(getProductsByCategory)
      }else{
        setListaProductos(response)
      }
    }) 
    .catch((err) => console.error(err))
   
  }, [categoriaId])

  console.log(listaProductos)
  return (
    <div className='listContainer'>
      <ItemList products={listaProductos} />
      
    </div>
  )
}

export default ItemListContainer;
