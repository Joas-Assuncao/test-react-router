import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    max-width: 100vw;

    position: relative;

    .section-slider {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;

        .content-slider {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-evenly;

            background: rgba(30, 37, 56, 0.5);

            padding: 0 18%;
            margin-top: 3.75rem;

            height: 25.875rem;
            width: 100%;

            position: absolute;

            h1 {
                color: ${colors.whiteItensCards};
                
                font-size: 2.5rem;
            }

            p {
                color: ${colors.whiteItensCards};

                font-size: 1.375rem;
                font-weight: 500;

                a {
                    color: ${colors.orangeStratio};
                }
            }
        }
    }

    .image-slide {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }

    .arrow-left {
        position: absolute;
        top: 50%;
        left: 2rem;

        z-index: 1;
        cursor: pointer;
    }

    .arrow-right {
        position: absolute;
        top: 50%;
        right: 2rem;
        
        z-index: 1;
        cursor: pointer;
    }
`;