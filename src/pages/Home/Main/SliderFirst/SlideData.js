import ourServices from '../../../../images/nossos-serviços.jpg';
import whoWeAre from '../../../../images/quem-somos.jpg';
import usPartner from '../../../../images/nosso-parceiro.jpg';
import logoStratio from '../../../../images/stratio.svg';

export default [
    {
        imageUrl: ourServices,
        alt: "Imagem de notebooks em uma mesa de trabalho com alguns papéis.",
        title: "Nossos Serviços",
        description: "Somos especializados na prestação de serviços na área de tecnologia da informação atuando como Consultoria, Desenvolvimento e teste de software, qualidade de processos e pr...",
        link: "/services",
    },
    {
        imageUrl: whoWeAre,
        alt: "Imagem uma placa computacional.",
        title: "Quem somos",
        description: "Somos especializados na prestação de serviços na área de tecnologia da informação atuando como...",
        link: "/whoweare",
    },
    {
        imageUrl: usPartner,
        alt: "Imagem de uma reunião de trabalho com um homem apresentando e diversas pessoas em volta de uma mesa, sentadas e com seus respectivos notebooks em sua frente, na mesa.",
        title: "Nosso parceiro!",
        partner: true,
        logo: logoStratio,
        description: "A Plataforma #1 de manutenção preditiva para frotas!",
        link: "https://stratioautomotive.com/",
    },
];