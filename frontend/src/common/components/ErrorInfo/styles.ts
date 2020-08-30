import styled from '@emotion/styled';

import { color, fontSize, fontWeight } from 'config/variablesConfig';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: ${fontSize.large};
    font-weight: ${fontWeight.bold};
`;

export const Subtitle = styled.h2`
    color: ${color.secondaryFont};
    font-size: ${fontSize.verySmall};
    font-weight: ${fontWeight.regular};
`;
