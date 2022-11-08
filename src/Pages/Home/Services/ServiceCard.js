import React from 'react';

const ServiceCard = ({service}) => {
    const {title,_id,img,price,description} = service;
    const details = description.slice(0,100);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className='text-justify'>{details}...'</p>
                <h3 className='text-2xl'>Price:{price}</h3>
                <div className="card-actions">
                    <button className="btn btn-primary">Service Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;