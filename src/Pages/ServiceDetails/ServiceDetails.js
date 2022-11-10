import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

import useTitle from '../../Hooks/useTitle';

const ServiceDetails = () => {
    const serviceInformation = useLoaderData();
    const {user} = useContext(AuthContext)
    const {displayName} = user;
    const { _id, description, title, img, price } = serviceInformation;
    useTitle(`${title}`);
    //add review
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        const form = e.target;
        const review = form.review.value;
        const email = user?.email || "Unregistered";
        const image = user?.photoURL;
        const serviceReview ={
            services:_id,
            serviceName: title,
            review,
            email,
            image,
            displayName:displayName,

        }
        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(serviceReview)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.error(err))
        console.log(review,email);
        form.reset();
    }
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
            <div>
                <h1 className='text-4xl my-12 text-center'>Reviews</h1>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <form onSubmit={handleReviewSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Review</span>
                                    </label>
                                    <input name='review' type="text" placeholder="your review" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" defaultValue={user?.email} />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Review</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;