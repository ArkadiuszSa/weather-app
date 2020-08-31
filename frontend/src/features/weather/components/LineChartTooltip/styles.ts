import styled from '@emotion/styled';

import { fontSize, color } from 'config/variablesConfig';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 7rem;
    padding: 0.5rem;
    border-radius: 1rem;
    font-size: ${fontSize.small};
    background-color: ${color.tooltipBackground};
`;
