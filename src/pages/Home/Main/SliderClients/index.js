import React, { useRef, useState } from 'react';

import arrowLeft from '../../../../images/arrow-left.svg';
import arrowRight from '../../../../images/arrow-right.svg';
import { Section } from './style';

import clients from "./SlideData";

export default function SliderClients() {
    const elementRef = useRef();
    
    function handleScrollLeft(e) {
        e.preventDefault();
        elementRef.current.scrollLeft -= 240;
    }

    function handleScrollRight(e) {
        e.preventDefault();
        elementRef.current.scrollLeft += 240;
    }

    return (
        <Section>
            <h2>Confira nossos clientes!</h2>
            <div className="container-slider">
                <img
                    src={arrowLeft}
                    alt="Seta para voltar aos clientes anteriores."
                    className="arrow-left"
                    onClick={handleScrollLeft}
                />

                <div className="slider" ref={elementRef}>
                    {
                        clients.map((client, index) => (
                            <div key={index} className="image-container">
                                <img src={client.imageUrl} href={client.link} />
                            </div>
                        ))
                    }
                </div>

                <img
                    src={arrowRight}
                    alt="Seta para voltar aos clientes anteriores."
                    className="arrow-right"
                    onClick={handleScrollRight}
                />
            </div>
        </Section>
    )
}