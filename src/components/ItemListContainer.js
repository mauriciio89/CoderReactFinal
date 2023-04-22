import React, { useEffect, useState} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';


const ItemListContainer = () => {
const {categoriaId} = useParams()


  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'products');
    if(categoriaId){
    const queryFilter = query(queryCollection, where('caterogyId', '==', categoriaId))
    getDocs(queryFilter)
    .then(res=>setListaProductos(res.docs.map(p=>({id: p.id, ...p.data()}))))
    }else{
      getDocs(queryCollection)
      .then(res=>setListaProductos(res.docs.map(p=>({id: p.id, ...p.data()}))))
    }
  }, [categoriaId])

  
  return (
    <div className='listContainer'>
      <ItemList products={listaProductos} />
      
    </div>
  )
}

export default ItemListContainer;
