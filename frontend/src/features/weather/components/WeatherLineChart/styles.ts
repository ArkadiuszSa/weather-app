import styled from '@emotion/styled';

import { breakpoints } from 'config/variablesConfig';

export const Wrapper = styled.div`
    width: 100%;
    height: 15rem;

    ${breakpoints.sm} {
        margin-top: 5rem;
        height: 20rem;
    }
`;
