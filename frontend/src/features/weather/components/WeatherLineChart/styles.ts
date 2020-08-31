import styled from '@emotion/styled';

import { breakpoints } from 'config/variablesConfig';

export const Wrapper = styled.div`
    padding: 0 3rem;
    box-sizing: border-box;
    margin-top: 5rem;
    width: 100%;
    min-height: 15rem;

    ${breakpoints.sm} {
        height: 20rem;
    }
`;
