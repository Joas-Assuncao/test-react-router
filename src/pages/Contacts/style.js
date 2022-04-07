import styled from 'styled-components';

import colors from '../../styles/colors';

export const Section = styled.section`
    padding: 9.3125rem 3.75rem 0 3.75rem;

    margin-bottom: 6.25rem;

    h2 {
        font-size: 2rem;
        color: ${colors.black100};
        margin-bottom: 1.875rem;
    }

    h3 {
        font-size: 1.25rem;
        color: ${colors.black60};
        margin-bottom: 1.875rem;
    }

    .text-image {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        .container-text {
            max-width: 34.375rem;

            p:not(:last-of-type) {
                margin-bottom: 1.875rem;
            }
        }
    }
`;