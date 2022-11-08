import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceInformation = useLoaderData();
    return (
        <div>
            <p>{serviceInformation.description}</p>
        </div>
    );
};

export default ServiceDetails;