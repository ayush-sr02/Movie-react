import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import MovieDetails from './component/MovieDetails';

const router = createBrowserRouter([
    {
        path:"/",
        element:(<App/>)
    },
    {
        path:"/:id",
        element:(<MovieDetails/>)
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);