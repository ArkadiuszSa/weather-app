import styled from '@emotion/styled';

import { color, fontSize, fontWeight } from 'config/variablesConfig';
import { Button } from 'common/styled/Button';
import { FullCenter } from 'common/styled/Center';

export const Wrapper = styled(FullCenter)`
    background: ${color.primary};
    color: ${color.alternativeFont};
`;

export const Title = styled.h1`
    font-size: ${fontSize.large};
    font-weight: ${fontWeight.bold};
`;

export const Subtitle = styled.h2`
    font-size: ${fontSize.big};
    font-weight: ${fontWeight.regular};
`;

export const ReloadButton = styled(Button)`
    color: ${color.alternativeFont};
    cursor: pointer;
`;
