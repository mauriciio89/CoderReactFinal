import React from "react";

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
      <button className="button">View details</button>
    </div>
  );
};


export default Item;
