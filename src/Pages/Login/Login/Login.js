import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import img from '../../../assest/images/login.webp'
import { FaGoogle } from 'react-icons/fa';


const Login = () => {

    const {loginUser, loginInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const alamin = location.state?.from?.pathname || '/'
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        loginInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(alamin, { replace: true })
                console.log(alamin)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(alamin, { replace: true })
        })
        .then(error => console.log(error));
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                   <img src={img} alt=''></img>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <button onClick={googleSignIn} className='m-5 btn bg-sky-400 font-medium'>
                        <FaGoogle className='mr-3'></FaGoogle> Google
                    </button>
                    <p className='text-center'>New to Mern Developer <Link className='text-orange-600 font-bold' to="/registration">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;