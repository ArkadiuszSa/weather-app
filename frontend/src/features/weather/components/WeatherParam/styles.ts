import styled from '@emotion/styled';

import { color, fontSize } from 'config/variablesConfig';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: ${color.secondaryFont};
`;

interface ValueProps {
    fontSize?: string;
}

export const ValueSpan = styled.span<ValueProps>`
    color: ${color.secondaryFont};
    font-size: ${props => props.fontSize || fontSize.big};
`;
