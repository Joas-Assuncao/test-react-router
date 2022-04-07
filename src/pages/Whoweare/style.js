import styled from 'styled-components';

import colors from '../../styles/colors';

export const Article = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 9.3125rem 3.75rem 0 3.75rem;
    margin-bottom: 6.25rem;

    .container-text {
        h2 {
            margin-bottom: 1.25rem;
            color: ${colors.black100};

            font-size: 2rem;
        }

        p {
            max-width: 38.125rem;

            font-size: 1rem;
            line-height: 1.2rem;
            color: ${colors.black60};

            &:first-of-type {
                margin-bottom: 1.25rem;
            }
        }
    }
`;