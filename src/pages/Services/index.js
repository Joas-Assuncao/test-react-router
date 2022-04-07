import React from 'react';

import { Section } from './style';

import image1 from '../../images/services1.png';
import image2 from '../../images/services2.png';
import SliderClients from '../../components/SliderClients';
import { Link } from 'react-router-dom';

export default function WhoWeAre() {
    return (
        <Section>
            <article className="article1">
                <div className="container-text">
                    <h2>Lorem ip</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in tellus. Integer vitae justo eget magna fermentum iaculis eu non. At consectetur lorem donec massa sapien faucibus et molesti.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in tellus. Integer vitae justo eget magna fermentum iaculis eu non. At consectetur lorem donec massa sapien faucibus et molestie. Laoreet id donec ultrices tincidunt arcu non sodales neque. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Dui faucibus in ornare quam viverra orci. Risus nec feugiat in fermentum posuere urna nec. Ipsum consequat nislm.</p>
                </div>
                <img src={image1} alt="Uma mão mexendo com holograma de um gráfico." />
            </article>
            <article className="article2">
                <img src={image2} alt="Pessoa utilizando notebook com alguns desenhos de efeito." />
                <div className="container-text">
                    <h2>Lorem ip</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in tellus. Integer vitae justo eget magna fermentum iaculis eu non. At consectetur lorem donec massa sapien faucibus et molestie. Laoreet id donec ultrices.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in tellus. Integer vitae justo egetm.</p>
                </div>
            </article>

            <p className="last-paragraph">
                <Link to="/contacts">Clique aqui </Link>para saber o que mais temos a oferecer para <strong>você!</strong>
            </p>
            <SliderClients />
        </Section>
    )
}