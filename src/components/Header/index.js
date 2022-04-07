import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ContainerHeader } from './style';

import logo from '../../images/logo-white.png';
import search from '../../images/search.svg';

export default function Header() {
    const [currentPath, setCurrentPath] = useState("/");
    const location = useLocation();

    useEffect(() => {
        setCurrentPath(prevState => prevState = location.pathname);
    }, [location.pathname]);

    return (
        <ContainerHeader currentPath={currentPath}>
            <img src={logo} alt="Logo L2M, Quality and Intelligence" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/whoweare">Quem Somos</Link> 
                <Link to="/services">Serviços</Link>
                <Link to="/contacts">Contatos</Link> 
            </nav>
            <div>
                <input type="text" placeholder="Pesquisar" maxLength={18} />
                <img src={search} alt="Ícone de lupa no input de pesquisa" />
            </div>
        </ContainerHeader>
    )
}