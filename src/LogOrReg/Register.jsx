// import React from 'react';
import { Link } from "react-router-dom"

const Register = () => {


    const registerHandler =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;
        console.log(name, email, url, password);
        
    }


    return (
        <div>
        <div className="hero min-h-screen bg-base-200 py-10 px-28">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={registerHandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Your Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Your Password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" name="url" placeholder="Photo Url" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-active">Register</button>
        </div>
        <div className="form-control mt-6">
        <p>Already registered? <Link className="text-xl font-bold link link-hover" to='/login'>Login</Link> here! </p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;