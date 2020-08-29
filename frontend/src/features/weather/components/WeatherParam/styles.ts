import styled from '@emotion/styled';

import { color, fontSize, fontWeight } from 'config/variablesConfig';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: ${color.secondaryFont};
    font-size: ${fontSize.verySmall};
    font-weight: ${fontWeight.semiBold};
`;

interface ValueProps {
    fontSize?: string;
}

export const ValueSpan = styled.span<ValueProps>`
    font-size: ${props => props.fontSize || fontSize.huge};
`;

export const ValueSubscript = styled.span<ValueProps>`
    font-size: ${fontSize.big};
    font-weight: ${fontWeight.semiBold};
`;
