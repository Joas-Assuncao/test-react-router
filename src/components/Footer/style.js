import styled from 'styled-components';

import colors from '../../styles/colors';

export const ContainerFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(30, 37, 56, 0.5);

    padding: 1.25rem 3.75rem;

    p {
        font-weight: 500;
        font-size: 1.5rem;

        color: ${colors.whiteItensCards};

        a {
            color: ${colors.orangeStratio};
        }
    }
`;