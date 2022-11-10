import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-stone-600 mt-6 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact bg-stone-600 mt-6 text-white dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>

                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/registration">Registration</Link></li>
                    </ul>
                </div>
                <a className="ml-5 normal-case text-xl text-[yellow] font-bold">mernDEV</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-xl'><Link to="/">Home</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user?.uid ?
                        <>
                            <span>{user?.displayName}</span>
                            <Link className='mr-5 ml-5' to="/addservice">Add Course</Link>
                            <Link className='mr-5' to="/myreviews">My Reviews</Link>
                            <button className='mr-5' onClick={handleLogout}>Log Out</button>
                        </>
                        :
                        <>
                            <button className='mr-10'><Link to="/login">Login</Link></button>
                            <button className='mr-10'><Link to="/registration">Registration</Link></button>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;