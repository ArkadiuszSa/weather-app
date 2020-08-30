import styled from '@emotion/styled';

import {
    color,
    fontSize,
    searchShadow,
    breakpoints,
    searchPanelShadow,
} from 'config/variablesConfig';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${color.primary};
    ${breakpoints.lg} {
        height: 100vh;
        flex-direction: column;
        box-shadow: ${searchPanelShadow};
    }
`;

export const SearchWrapper = styled.div`
    display: flex;
    padding: 2rem 1rem;
    background: ${color.primary};
    box-shadow: ${searchShadow};

    ${breakpoints.lg} {
        box-shadow: none;
    }
`;

export const SearchInput = styled.input`
    flex: 1;
    padding-bottom: 0.5rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid ${color.inactive};
    color: ${color.alternativeFont};
    caret-color: ${color.alternativeFont};
    outline: 0;
    font-size: ${fontSize.normal};

    &::placeholder {
        color: ${color.inactive};
    }

    &:focus {
        color: ${color.alternativeFont};
        border-bottom-color: ${color.alternativeFont};

        &::placeholder {
            color: ${color.alternativeFont};
        }
    }
`;

export const SearchIcon = styled.img`
    margin-left: 1rem;
    width: 1.5rem;
`;

export const SearchOptionButton = styled.button`
    display: block;
    width: 100%;
    border: none;
    padding: 1rem;
    color: ${color.alternativeFont};
    font-size: ${fontSize.normal};
    text-align: left;
    background: transparent;
`;

export const SearchOptionsWrapper = styled.div`
    background-color: ${color.primary};

    ${breakpoints.lg} {
        height: 100%;
    }
`;
