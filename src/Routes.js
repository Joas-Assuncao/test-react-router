import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Whoweare from './pages/Whoweare';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/whoweare" element={<Whoweare />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/contacts" element={<Contacts />}/>
        </Routes>
    )
}