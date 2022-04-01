import styled from 'styled-components';

import colors from '../../../../styles/colors';

export const Section = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    margin: 6.25rem 0;

    h2 {
        line-height: 2rem;

        color: ${colors.black100};

        margin-bottom: 1.875rem;

        font-size: 2rem;
    }

    .container-slider {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        padding: 3.75rem .8125rem;
        gap: 3.75rem;

        background: rgba(30, 37, 56, 0.3);

        .slider {
            display: flex;
            align-items: center;

            overflow-x: auto;
            scroll-behavior: smooth;
            
            scrollbar-width: none;

            &::-webkit-scrollbar {
            display: none;
        }
        
            .image-container {
                display: flex;
                align-items: center;
                justify-content: center;
                flex: none;

                width: 12.5rem;
                height: 12.5rem;

                background: rgba(255, 255, 255, 0.5);


                &:not(:first-of-type) {
                    margin-left: 2.5rem;
                }

                img {
                    max-width: 100%;
                    object-fit: cover;
                }
            }
        }

        img {
            cursor: pointer;
        }


        .slider::-webkit-scrollbar {
                display: none;
            }

    }
`;