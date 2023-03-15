
import React, {useState} from 'react';
import Producto from './Item';

const Productos = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Televisor",
            description: "electrónico",
            price: 1000,
            pictureUrl:
              "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F2164%2FELECTROHOGAR%2FPE-UHD-AU7002-UN65AU7090GXPE-5315146041_015831555261_65.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=a1722383f9ef0b018fd17aa7f1228a30",
          },
          {
            id: 2,
            title: "Macbook Pro ",
            description: "electrónico",
            price: 3000,
            pictureUrl:
              "https://tse2.mm.bing.net/th?id=OIP.xd0qz8N6ki-zXM7i3cf2WgHaF3&pid=Api&P=0",
          },
          {
            id: 3,
            title: "Play Station 5",
            description: "electrónico",
            price: 500,
            pictureUrl:
              "https://picsum.photos/v2/list?page=2&limit=100",
          },
    ])

  return (
    <div className='row'>
      {products.map((product)=>{
        return(
            <Producto
                pictureUrl={product.pictureUrl}
                key={product.id}
                name={product.title}
                description={product.description}
                price={product.price}
                      
            
            />
        )
      })}
    </div>
  )
}

export default Productos;


