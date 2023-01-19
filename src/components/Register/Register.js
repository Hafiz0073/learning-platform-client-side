import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
    const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError('Please add At least one upper case');
            return;
        }
        if (password.length < 6) {
            setPasswordError('at least 6');
            return
        }

        console.log(name, email, password, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                setPasswordError(error.message)
            })
    }
    const handleGooglesignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error('error', error)
            })

    }
    const handleGithubsignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error('error', error)
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="Photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />

                                <label className="label">
                                    <span>Aready Have an account
                                        <button className="btn btn-link"><Link to="/login">Please Login</Link></button> </span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className='text-danger'>{passwordError}</p>
                        <>
                            <button onClick={handleGooglesignIn} className="btn btn-outline btn-success p-3 mb-2">Googole Login</button>
                            <button onClick={handleGithubsignIn} className="btn btn-outline btn-success p-3">Github Login</button>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;