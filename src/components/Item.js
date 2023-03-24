import React from "react";
import {Link} from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className="col-lg-4 mb-5">
      <div className="text-center card-box"></div>
      <div className="member-card pt-2 pb-2"></div>
      <div className="thumb-lg member-thumb mx-auto"></div>
      <img src={product.img} className="" alt="fotos"/>
      
    
      <h3>{product.name}</h3>
      <p className="text-muted">{product.title}</p>
      <p>{product.description}</p>
      <p>$ {product.price}</p>
      <Link className="btn btn-dark" to={`/detalle/${product.id}`}>View details</Link>
    </div>
  );
};


export default Item;

