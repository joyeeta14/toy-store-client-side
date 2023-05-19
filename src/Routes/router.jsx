// import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home";
import Login from "../LogOrReg/Login";
import Register from "../LogOrReg/Register";
import Error from "../Error404/Error";



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
            path:'/*',
            element:<Error></Error>
        },
      ]
    },
  ]);

export default router;