import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Whoweare from './pages/Whoweare';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/whoweare" element={<Whoweare />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}