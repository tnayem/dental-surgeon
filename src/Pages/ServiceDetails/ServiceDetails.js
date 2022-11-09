import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const ServiceDetails = () => {
    const serviceInformation = useLoaderData();
    const { description, title, img, price } = serviceInformation;
    useTitle(`${title}`);
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <h3 className='font-bold text-2x'>Price: $ {price}</h3>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;