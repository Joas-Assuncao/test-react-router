import React from 'react';

import { Section } from './style';

import image1 from '../../images/contatos.jpg';

export default function WhoWeAre() {
    return (
        <Section>
            <h2>Lorem ipsum dolor sit amet, consectetura!</h2>
            <h3>Aliquam ultrices sagittis orci a scelerisque purus semper eget elementum nisi quis eleifend quamade!</h3>
            <div className="text-image">
                <div className="container-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus viverra adipiscing at in tellus. Integer vitae justo eget magna fermentum iaculis eu non. At consectetur lorem donec massa sapien faucibus et molestie. Laoreet id donec ultrices tincidunt arcu non sodales neque. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Dui faucibus in ornare quam viverra orci. Risus nec feugiat in fermentum posuere urna nec. Ipsum consequat nislav.</p>
                    <p>Nulla porttitor massa id neque. Commodo elit at imperdiet dui. Urna nunc id cursus metus. Turpis egestas sed tempus urna et pharetra. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Urna neque viverra justo nec ultrices dui. In eu mi bibendum neque egestas congue quisque egestas. Aliquet bibendum enim facilisis gravida neque. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Sem integer vitae justo eget magna fermentum iaculis eu non. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Nibh to.</p>
                    <p>Enim nunc faucibus a pellentesque sit amet porttitor. Lacus luctus accumsan tortor posuere ac ut consequat semper. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Tincidunt vitae semper quis lectus. Quam pellentesque nec nam aliquam sem et tortor consequat id. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Maecenas accumsan lacus vel facilisis volutpat. Odio aenean sed adipiscing diam donec adipiscing. Cursus mattis molestie a iaculis at erat. Donec massa sapien faucibus et molestie. Montes na.</p>
                </div>

                <img src={image1} alt="Pessoa trabalhando no notebook, com efeito na imagem mostrando hologramas." />
            </div>
        </Section>
    )
}