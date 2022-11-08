import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import SingleService from '../SingleService/SingleService';

const AllServices = () => {
    const [allService, setAllService] = useState();
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, [])
    useTitle("Services");
    return (
        <div className='py-12'>
            <h1 className='text-4xl font-bold text-center pb-8'>My Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allService?.map(singleService => <SingleService
                        key={singleService._id}
                        singleService={singleService}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default AllServices;