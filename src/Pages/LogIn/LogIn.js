
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const LogIn = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const location = useLocation();
    const { signIn, googleSignUp } = useContext(AuthContext)
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                navigate(from,{replace:true});
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    const gSignUp = () => {
        googleSignUp()
            .then(result => {
                const user = result.user;
                navigate(from,{replace:true})
                console.log(user);
            })
            .catch(error => {
                console.log(error);
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
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <p>{error}</p>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Log In</button>
                        </div>

                        <Link className='text-blue-500 font-bold' to='/register'>Create Accoutn</Link>
                    </form>
                    <div className="form-control mt-6">
                        <button onClick={gSignUp} className="btn btn-outline btn-success">Sign Up With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;