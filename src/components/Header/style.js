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
        height: auto;
        width: auto
    }

    nav {
        display: flex;
        justify-content: space-evenly;
        flex: 1;

        a {
            
            font-size: 1.375rem;
            font-weight: 400;

            &[href="/"] {
                color: ${({currentPath}) => currentPath === "/" ? colors.black60 : colors.whiteItensCards};
            }

            &[href="/whoweare"] {
                color: ${({currentPath}) => currentPath === "/whoweare" ? colors.black40 : colors.whiteItensCards};
            }

            &[href="/contacts"] {
                color: ${({currentPath}) => currentPath === "/contacts" ? colors.black40 : colors.whiteItensCards};
            }

            &[href="/services"] {
                color: ${({currentPath}) => currentPath === "/services" ? colors.black40 : colors.whiteItensCards};
            }
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