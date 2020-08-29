import styled from '@emotion/styled';

import { color } from 'config/variablesConfig';

export const SearchWrapper = styled.main`
    display: flex;
    padding: 2rem 1rem;
    background: ${color.primary};
`;

export const SearchInput = styled.input`
    flex: 1;
    padding-bottom: 0.5rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: ${color.alternativeFont};
    caret-color: ${color.alternativeFont};
    outline: 0;

    &::placeholder {
        color: ${color.alternativeFont};
    }
`;

export const SearchIcon = styled.img`
    margin-left: 1rem;
    width: 1.5rem;
`;
