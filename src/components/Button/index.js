import React from 'react';

import { ContainerButton } from './style';

export default function Button({ children }) {
    return (
        <ContainerButton>
            {children}
        </ContainerButton>
    )
}