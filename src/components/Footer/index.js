import React from 'react';

import { ContainerFooter } from './style';

import logo from '../../images/logo-black.svg';

export default function Footer() {
    return (
        <ContainerFooter>
            <p>Visite nosso parceiro <a href="https://stratioautomotive.com/" target="_blank">stratio!</a></p>
            <img src={logo} alt="Logo da L2M: três hexágonos juntos, 'L2M' abaixo e 'Quality and Intelligence' abaixo"/> 
        </ContainerFooter>
    )
}