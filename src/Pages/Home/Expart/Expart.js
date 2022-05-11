import React from "react";

const Expart = ({ expart }) => {
  const { name, img } = expart;

  return (
    <div className="col">
    <div className="card h-100">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  );
};

export default Expart;
