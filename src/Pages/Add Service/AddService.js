import React from 'react';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    const handleSubmit =e=>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const url = form.url.value;
        const price = form.price.value;
        const description = form.description.value;
        console.log(title,url,price,description);
        const serviceObj ={
            title,
            img:url,
            price,
            description
        }
        fetch('http://localhost:5000/doctorServices',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(serviceObj)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.error(err))
        form.reset();
    }
    useTitle("Add Service")
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add Service Hear</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Title</span>
                            </label>
                            <input name='title' type="text" placeholder="service title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input name='url' type="text" placeholder="image url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input name='price' type="text" placeholder="product price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input name='description' type="text" placeholder="description" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;