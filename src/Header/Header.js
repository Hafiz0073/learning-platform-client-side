import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../.././src/Assets/logo/years1.png'
import { AuthContext } from '../context/UserContext';
import { FaUser } from 'react-icons/fa'
import { Tooltip } from 'react-tooltip'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log('context ', user)
    const handleSignout = () => {
        logOut()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>


                        </ul>
                    </div>
                    <img className="inline w-8 " src={logo} alt="..."></img>
                    <Link className="normal-case text-xl">YEARS Technology</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>

                    </ul>
                </div>
                <div className="navbar-end pr-6">


                    {
                        user?.email ?

                            <button onClick={handleSignout} className="btn btn-ghost">Sign Out</button>


                            : <Link to='/login'>Login</Link>
                    }
                    {user?.photoURL ?
                        <div className="tooltip tooltip-bottom " data-tip={user.displayName}>
                            <img className="w-10 rounded-full" src={user?.photoURL} alt="" />

                        </div>

                        : <FaUser></FaUser>
                    }

                </div>
            </div>

        </div>
    );
};

export default Header;