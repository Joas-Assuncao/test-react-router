import React from 'react';
import { Link } from 'react-router-dom';

import imagem1 from '../../../../images/image-1.jpg';
import imagem2 from '../../../../images/image-2.jpg';

import Button from '../../../../components/Button';

import { FirstArticle } from './style';

export default function Content() {
    return (
        <FirstArticle>
            <div className="article1">
                <div className="description">
                    <h2>Conheça a L2M!</h2>
                    <p>Com mais de oito anos de experiência no mercado de TI, a L2M, além de desenvolver softwares e soluções inovadoras, promove a qualidade dos softwares próprios e de terceiros através de processos e metodologias certificados pelo modelo MPT...</p>
                    <Button><Link to="/whoweare">Saiba mais!</Link></Button>
                </div>
                <img src={imagem1} alt="Mesa vista de cima com diversos notebooks e acessórios tecnológicos, aparentemente um ambiente de trabalho." />
            </div>
            <div className="article2">
                <img src={imagem2} alt="Óculos em frente a um monitor com diversos códigos abertos." />
                <div className="description">
                    <h2>Nossos Serviços!</h2>
                    <p>Somos especializados na prestação de serviços na área de tecnologia da informação atuando como Consultoria, Desenvolvimento e teste de software, qualidade de processos e produtos (PPQA), inteligência artificial, robotização, segurança da informação, gerenciamento em TI, gestão em infraestrutura e segurança eletrônica inteligente.</p>
                    <Button><Link to="/services">Saiba mais!</Link></Button>
                </div>
            </div>
        </FirstArticle>
    )
}
