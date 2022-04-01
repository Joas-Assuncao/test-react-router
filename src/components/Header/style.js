import styled from 'styled-components';

import colors from '../../styles/colors';

export const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(30, 37, 56, 0.3);

    width: 100%;

    padding: .5rem 2rem;

    position: absolute;

    z-index: 1;

    img {
        height: 5rem;
        width: 6.25rem;
    }

    nav {
        display: flex;
        justify-content: space-evenly;
        flex: 1;

        a {
            color: ${colors.whiteItensCards};
            
            font-size: 1.375rem;
            font-weight: 400;
        }
    }

    div {
        display: flex;
        align-items: center;

        max-width: 12.5rem;

        position: relative;
        
        input[type='text'] {
            width: 100%;

            padding: .625rem 2.5rem .625rem 1.25rem ;
            
            border-radius: .625rem;

            &::placeholder {
                font-size: 1rem;
                color: ${colors.black20}
            }
        }

        img {
            width: 1.125rem;
            height: 1.125rem;

            position: absolute;
            right: 1.25rem;
        }
    }
`;