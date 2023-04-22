import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({data}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={data.img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
      </div>
      <div>
        <ItemCount stockItems={10}/>
      </div>
    </div>
  );
};

export default ItemDetail;
