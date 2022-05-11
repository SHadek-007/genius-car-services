import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {_id,name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetails = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-card'>
            <img className='w-100 rounded' src={img} alt="Car Service Photos" />
            <h2>{name}</h2>
            <p>Price: <span className='fw-bold text-info'>${price}</span></p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetails(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;