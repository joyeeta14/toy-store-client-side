// import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home";
import Login from "../LogOrReg/Login";
import Register from "../LogOrReg/Register";
import Error from "../Error404/Error";
import Blogs from "../Components/Blogs";
import AddToy from "../Components/AddToy";
import AllToy from "../Components/AllToy";
import ToyDetails from "../Components/ToyDetails";
import MyToy from "../Components/MyToy";



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
        {
            path:'/myToy',
            element: <MyToy></MyToy>,
        },
        {
            path:'/allToy',
            element: <AllToy></AllToy>,
            loader: ()=> fetch('http://localhost:5000/addToy')
        },
        {
            path:'/allToy/:id',
            element: <ToyDetails></ToyDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/addToy/${params.id}`)
        },
      ]
    },
    {
        path:'/*',
        element:<Error></Error>
    },
  ]);

export default router;