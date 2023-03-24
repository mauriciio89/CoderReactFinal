import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'





const products = [
    {
        id: 1,
        categoryId: "televisores",
        title: "Televisor",
        description: "electrónico",
        price: 1000,
        img:
          "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F2164%2FELECTROHOGAR%2FPE-UHD-AU7002-UN65AU7090GXPE-5315146041_015831555261_65.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=a1722383f9ef0b018fd17aa7f1228a30",
      },
      {
        id: 2,
        categoryId: "laptops",
        title: "Macbook Pro ",
        description: "electrónico",
        price: 1000,
        img:
          "https://tse2.mm.bing.net/th?id=OIP.xd0qz8N6ki-zXM7i3cf2WgHaF3&pid=Api&P=0",
      },
      {
        id: 3,
        categoryId: "consolas",
        title: "Play Station 5",
        description: "electrónico",
        price: 500,
        img:
          "https://www.inside-digital.de/img/sony-playstation-5-black-1.jpg"
      },
    ]

    export const ItemDetailContainer = () => {
        
        
        
          const [listaProductos, setListaProductos] = useState({});
          const {detalleId} = useParams();
          console.log(detalleId)

          useEffect(() => {
            const getListaProductos = new Promise(resolve =>  {
                  setTimeout(() => {
                    resolve(products);
                  }, 1000);
                });
                getListaProductos.then(res => getListaProductos(res.find(product => product.id === parseInt(detalleId))));
            },[])
           
          
  return (
    <ItemDetail data={data}/>
  );
}

export default ItemDetailContainer
