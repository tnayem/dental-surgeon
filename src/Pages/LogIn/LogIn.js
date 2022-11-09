
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const LogIn = () => {
    const [error,setError] = useState(null);
    const navigate = useNavigate()
    const {signIn} = useContext(AuthContext)
    const handleSubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('')
            form.reset();
            navigate('/');
        })
        .catch(error=>{
            console.error(error);
            setError(error.message);
        })
        
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <p>{error}</p>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Log In</button>
                        </div>
                        <div className="form-control mt-6">
                            <Link to='/'><button className="btn btn-outline btn-success">Sign Up With Google</button></Link>
                        </div>
                        <Link className='text-blue-500 font-bold' to='/register'>Create Accoutn</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;