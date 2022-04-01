import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerHeader } from './style';

import logo from '../../images/logo-white.svg';
import search from '../../images/search.svg';

export default function Header() {
    return (
        <ContainerHeader>
            <img src={logo} alt="Logo L2M, Quality and Intelligence" />
            <nav>
                <Link to="/">Home</Link> 
                <Link to="/whoweare">Quem Somos</Link> 
                <Link to="/services">Serviços</Link> 
                <Link to="/blog">Blog</Link> 
                <Link to="/contacts">Contatos</Link> 
            </nav>
            <div>
                <input type="text" placeholder="Pesquisar" maxLength={18} />
                <img src={search} alt="Ícone de lupa no input de pesquisa" />
            </div>
        </ContainerHeader>
    )
}