// import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home";
import Login from "../LogOrReg/Login";
import Register from "../LogOrReg/Register";
import Error from "../Error404/Error";
import Blogs from "../Components/Blogs";
import AddToy from "../Components/AddToy";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/blogs',
            element: <Blogs></Blogs>
        },
        {
            path:'/addToy',
            element: <AddToy></AddToy>
        },
      ]
    },
    {
        path:'/*',
        element:<Error></Error>
    },
  ]);

export default router;