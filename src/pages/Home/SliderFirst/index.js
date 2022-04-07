import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SlideData from './SlideData';

import Button from '../../../components/Button';

import { Section } from './style';

import arrowLeft from '../../../images/arrow-left.svg';
import arrowRight from '../../../images/arrow-right.svg';

export default function Slider({ heightHeader }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slidesLength = SlideData.length;
    
    function prevImage () {
        setCurrentSlide(prevState => prevState !== 0 ? prevState - 1 : 2);
    }
    
    function nextImage () {
        setCurrentSlide(prevState => prevState === slidesLength - 1 ? 0 : prevState + 1);
    }

    return (
        <Section heightHeader={heightHeader}>
            <img
                src={arrowLeft}
                className="arrow-left"
                alt="Botão para voltar para a imagem anterior"
                onClick={prevImage}
            />

            <img
                src={arrowRight}
                className="arrow-right"
                alt="Botão para avançar para a próxima a imagem"
                onClick={nextImage}
            />

            {SlideData.map((slide, index) => (
                currentSlide === index &&
                <section className="section-slider" key={index}>
                    <div className="content-slider">
                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                        { slide.link.includes(':')
                            ? <Button><a href={slide.link}>Saiba mais!</a></Button>
                            : <Button><Link to={slide.link}>Saiba mais!</Link></Button>
                        }
                    </div>
                    <img src={slide.imageUrl} alt={slide.alt} className="image-slide" key={index} />
                </section>
            ))}
        </Section>
    );
};