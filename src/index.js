import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import Home from "./pages/home";
// import Html from './pages/html';
// import Css from './pages/css';
// import Javascript from './pages/javascript';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//     errorElement: <h2>Page not found</h2>
//   },
//   {
//     path: "/html",
//     element: <Html/>,

//   },
//   {
//     path: "/css",
//     element: <Css/>,

//   },
//   {
//     path: "/javascript",
//     element: <Javascript/>,

//   },
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App>
        {/* <Helmet>
          <title>
            Hello
          </title>
        </Helmet> */}
      </App>
    </HelmetProvider>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);


