import { Result } from 'postcss';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
    const navigate = useNavigate()
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const handleSubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.url.value;
        const name = form.name.value;
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            handleUpdateUserProfile(name,photoUrl)
            navigate('/')
        })
        .catch(error=>{
            console.error(error);
        })

        // console.log(email,password,photoUrl,name);
    }
    // Update user name and photo url
    const handleUpdateUserProfile=(name,photoUrl)=>{
        const profile ={
            displayName:name ,
            photoURL:photoUrl
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='url' placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                        <p>if have an Account <Link className='font-bold text-blue-500' to='/login'>Log In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;