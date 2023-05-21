// import React from 'react';

import useTitle from "../useHook/useTitle";

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className="my-5">
            <div className="flex flex-col w-full border-opacity-50">
                <div className="grid p-4 h-auto card bg-blue-100 rounded-box 
                ">
                    <h1 className="text-xl font-semibold">Q-1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1> <br />
                    <h3 className="ps-7">
                    <span className="font-medium">Ans</span>- An access token is like a key that allows you to access certain things. It's short-lived and used to prove you have permission. A refresh token is a special key that can get you a new access token when the old one expires. Store them in a safe place on your device, like a password manager or secure storage provided by your app or browser.
                    </h3>

                </div>
                <div className="divider"></div>
                <div className="grid p-4 h-auto card bg-blue-100 rounded-box 
                ">
                    <h1 className="text-xl font-semibold">Q-2: Compare SQL and NoSQL databases?</h1> <br />
                    <h3 className="ps-7">
                    <span className="font-medium">Ans</span>-In SQL Databases, they have structured data with tables and use SQL language. You need a fixed schema, but they are good for complex transactions.In NoSQL Databases, they have unstructured data, use various query languages, and have a flexible schema. They are better for handling large amounts of data.
                    </h3>

                </div>
                <div className="divider"></div>
                <div className="grid p-4 h-auto card bg-blue-100 rounded-box 
                ">
                    <h1 className="text-xl font-semibold">Q-3:What is express js? What is Nest JS? </h1> <br />
                    <h3 className="ps-7">
                    <span className="font-medium">Ans</span>- Express.js is a minimalist and flexible web application framework for Node.js. It provides a simple yet powerful set of features for building web applications and APIs.NestJS, on the other hand, is a progressive and opinionated framework for building efficient and scalable server-side applications with Node.js.
                    </h3>

                </div>
                <div className="divider"></div>
                <div className="grid p-4 h-auto card bg-blue-100 rounded-box 
                ">
                    <h1 className="text-xl font-semibold">Q-4:What is MongoDB aggregate and how does it work?</h1> <br />
                    <h3 className="ps-7">
                        <span className="font-medium">Ans</span> -In MongoDB, the aggregate function is used to perform advanced data processing and analysis operations on the data stored in a collection. The aggregate function in MongoDB works by providing a pipeline of stages, where each stage represents a specific operation to be performed on the data. The pipeline stages are applied sequentially, allowing you to transform and manipulate the data as it passes through each stage.
                    </h3>

                </div>
            </div>
        </div>
    );
};

export default Blogs;