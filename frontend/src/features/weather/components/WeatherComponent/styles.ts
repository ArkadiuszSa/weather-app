import styled from '@emotion/styled';
import { breakpoints } from 'config/variablesConfig';

export const LayoutWrapper = styled.main`
    height: 100vh;
    width: 100%;

    ${breakpoints.lg} {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
