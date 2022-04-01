import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;

    height: 2.5rem;
    width: 13rem;

    background: rgba(30, 37, 56, 0.6);

    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        flex: 1;

        color: ${colors.whiteItensCards};
        font-size: 1rem;
    }
`;