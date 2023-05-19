// import React from 'react';
//FcGoogle
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="my-4">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Login</button>
                            </div>
                            <div className="form-control mt-6">
                              <p>New Here? Please <Link className="link link-hover font-bold text-xl" to='/register'>Register </Link>Here</p>
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control">
                                <button className="btn flex btn-outline btn-warning"><p>Sign In with Google</p>
                                <FcGoogle/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;