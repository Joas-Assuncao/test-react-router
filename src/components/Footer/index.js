import React from 'react';

import { ContainerFooter } from './style';

import logo from '../../images/logo-black.png';

export default function Footer() {
    return (
        <ContainerFooter>
            <p>Visite o linkedin do dev, <a href="https://linkedin.com/in/Joas-Assuncao/" target="_blank">Joas!</a></p>
            <img src={logo} alt="Logo da L2M: três hexágonos juntos, 'L2M' abaixo e 'Quality and Intelligence' abaixo"/> 
        </ContainerFooter>
    )
}