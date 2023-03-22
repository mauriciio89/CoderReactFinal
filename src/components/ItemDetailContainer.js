import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'


const detalle = {
    id: 1,
    title: "Televisor",
    description: "electrónico",
    price: 1000,
    img:
      "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F2164%2FELECTROHOGAR%2FPE-UHD-AU7002-UN65AU7090GXPE-5315146041_015831555261_65.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=a1722383f9ef0b018fd17aa7f1228a30",
  }

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData =new Promise(resolve => {
            setTimeout(() => {
                resolve(detalle);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer
