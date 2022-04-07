import React from 'react';
import { Link } from 'react-router-dom';

import imagem1 from '../../../images/image-1.jpg';
import imagem2 from '../../../images/image-2.jpg';

import Button from '../../../components/Button';

import { FirstArticle } from './style';

export default function Content() {
    return (
        <FirstArticle>
            <div className="article1">
                <div className="description">
                    <h2>Lorem ipsum d!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam. Massa id neque aliquam vestibulum morbi blandit cursus risus. Accumsan sit amet nulla...</p>
                    <Button><Link to="/whoweare">Saiba mais!</Link></Button>
                </div>
                <img src={imagem1} alt="Mesa vista de cima com diversos notebooks e acessórios tecnológicos, aparentemente um ambiente de trabalho." />
            </div>
            <div className="article2">
                <img src={imagem2} alt="Óculos em frente a um monitor com diversos códigos abertos." />
                <div className="description">
                    <h2>Lorem ipsum dol!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam. Massa id neque aliquam vestibulum morbi blandit cursus risus. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Bibendum est ultricies integer quis auctor elit sedut eu.</p>
                    <Button><Link to="/services">Saiba mais!</Link></Button>
                </div>
            </div>
        </FirstArticle>
    )
}
