import React from 'react';
import Content from './Content';
import SliderFirst from './SliderFirst';
import SliderClients from '../../components/SliderClients';

export default function Home() {
    return (
        <>
            <SliderFirst />
            <Content />
            <SliderClients />
        </>
    )
}