import React from "react";

const Producto = (props) => {
  return (
    <div className="col-lg-4">
      <div className="text-center card-box"></div>
      <div className="member-card pt-2 pb-2"></div>
      <div className="thumb-lg member-thumb mx-auto"></div>
      <img src={props.img} className="rounded-circle img-thumbnail" alt="fotos"/>
      
    
      <h3>{props.name}</h3>
      <p className="text-muted">{props.title}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default Producto;
