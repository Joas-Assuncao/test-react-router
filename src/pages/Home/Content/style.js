import styled from 'styled-components';

import colors from '../../../styles/colors';

export const FirstArticle = styled.article`
    padding: 3.75rem 3.75rem 0 3.75rem;

    text-align: left;

    .article1 {
        margin-bottom: 3.75rem;
    }

    .article1, .article2 {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .description {
            display: flex;
            align-items: center;
            flex-direction: column;

            width: 31.25rem;
            height: 18.75rem;

            h2 {
                line-height: 2rem;

                color: ${colors.black100};

                margin-bottom: 1.875rem;

                font-size: 2rem;
            }

            p {
                color: ${colors.black60};

                font-size: 1rem;

                margin-bottom: 1.5rem;
            }
        }

        img {
            width: 31.25rem;
            height: 18.75rem;
        }
    }
`;