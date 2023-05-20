// import React from 'react';

import { Link } from "react-router-dom";
import useTitle from "../useHook/useTitle";

const AddToy = () => {
    useTitle('Add Toy');


    const addHandler=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const toyPic = form.toyPic.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const category = form.category.value;
        const userInfos={toyPic,name,email,quantity, price, rating,description, category}

        console.log(userInfos);
    }


    return (
        <div className="bg-blue-200">
        <div>
  <div className=" px-32 py-20 flex-col lg:flex-row-reverse">
    <div className="card  w-full shadow-2xl bg-base-100">
      <form onSubmit={addHandler} className="card-body ">
        <div className=" grid gap-4 grid-cols-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Picture</span>
          </label>
          <input type="url" name="toyPic" placeholder="Toy Picture" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" name="email" placeholder="Your Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" placeholder="Price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail Description</span>
          </label>
          <input type="text" name="description" placeholder="Description" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-Category</span>
          </label>
          <input type="text" name="category" placeholder="Sub-Category" className="input input-bordered" />
        </div>
        </div>


        <div className="form-control mt-6">
          <button className="btn btn-info">
          Add
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddToy;