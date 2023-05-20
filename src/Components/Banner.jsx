// import React from 'react';

import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="px-40 ">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://funnygoofycrap.com/wp-content/uploads/cartoonstore.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">
                            Welcome to Fun-Store!
                        </h1>
                        <p className="py-6">
                        Discover a world of wonder and excitement at,
                        Fun-Store where extraordinary toys meet endless possibilities.Find the perfect toys that spark creativity, foster learning, and create unforgettable memories for children of all ages.
                        </p>
                        <button className="btn btn-outline btn-info">
                            <Link to='/allToy'>Shop Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;