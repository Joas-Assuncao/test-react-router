import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MainRoutes } from './Routes';

import Header from './components/Header';
import Footer from './components/Footer';

import { GlobalStyles } from './styles/global';

export default function App() {
    // yarn add @babel/plugin-proposal-class-properties -D

    return (
        <Router>
            <Header />
            <MainRoutes />
            <GlobalStyles />
            <Footer />
        </Router>
    );
}