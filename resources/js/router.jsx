import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Home /></Layout>,
    },
    {
        path: '/contact',
        element: <Layout><Contact /></Layout>,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;