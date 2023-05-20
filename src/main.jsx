// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './Routes/router.jsx';
import AuthProvider from './AuthProvider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </>,
)
