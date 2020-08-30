import styled from '@emotion/styled';

import { color, fontSize, fontWeight } from 'config/variablesConfig';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const Label = styled.label`
    color: ${color.secondaryFont};
    font-size: ${fontSize.verySmall};
    font-weight: ${fontWeight.semiBold};
`;

interface ValueProps {
    color: string;
    fontSize?: string;
}

export const ValueWrapper = styled.div<ValueProps>`
    font-size: ${props => props.fontSize || fontSize.huge};
    color: ${props => props.color};
`;

export const ValueSubscript = styled.span`
    font-size: ${fontSize.normal};
    font-weight: ${fontWeight.semiBold};
`;
