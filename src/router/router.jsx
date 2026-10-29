import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/News';
import Study from '../pages/Study';
import Schedule from '../pages/Schedule';
import Rules from '../pages/Rules';
import Support from '../pages/Support';
import PhotosPage from '../pages/PhotosPage';
import Contact from '../pages/Contact';
import MoreInfo from '../pages/MoreInfo';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/study",
        element:<Study/>
    },
    {
        path:"/schedule",
        element:<Schedule/>
    },
    {
        path:"/rules",
        element:<Rules/>
    },
    {
        path:"/news",
        element:<News/>
    },
    {
        path:"/support",
        element:<Support/>
    },
    {
        path:"/photos",
        element:<PhotosPage/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/moreinfo",
        element:<MoreInfo/>
    },
]);