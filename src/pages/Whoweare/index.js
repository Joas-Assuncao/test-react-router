import React from 'react';

import { Article } from './style';

import image from '../../images/quem-somos.png';
import SliderClients from '../../components/SliderClients';

export default function WhoWeAre() {
    return (
        <>
            <Article>
                <div className="container-text">
                    <h2>Lorem ipsu</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in tellus. Integer vitae justo eget magna fermentum iaculis eu non. At consectetur lorem donec massa sapien faucibus et molestie. Laoreet id donec ultrices tincidunt arcu non sodales neque. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Dui faucibus in ornare qu.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in tellus. Integer vitae justo eget magna fermentum iaculis eu non. At consectetur lorem donec massa sapien faucibus et molestie. Laoreet id donec ultrices tincidunt arcu non sodales neque. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Dui f.</p>
                </div>
                <img src={image} alt="Ambiente com jovens aparentement trabalhando, juntos em uma mesa." />
            </Article>
            <SliderClients />
        </>
    )
}