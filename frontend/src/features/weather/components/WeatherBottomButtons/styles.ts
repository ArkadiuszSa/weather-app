import styled from '@emotion/styled';

import { fontSize } from 'config/variablesConfig';

export const BottomButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 2rem;
`;

export const Button = styled.button`
    border: none;
    background: transparent;
    font-size: ${fontSize.normal};
`;

export const NextIcon = styled.img`
    width: 1rem;
`;

export const BackIcon = styled(NextIcon)`
    transform: scaleX(-1);
`;
