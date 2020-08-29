import styled from '@emotion/styled';
import { fontSize, fontWeight, color } from 'config/variablesConfig';

export const Wrapper = styled.div`
    margin: 1rem 0;
`;

export const PlaceHeader = styled.h1`
    margin: 0;
    font-size: ${fontSize.large};
    font-weight: ${fontWeight.semiBold};
`;

export const WeatherDate = styled.time`
    font-size: ${fontSize.small};
    font-weight: ${fontWeight.semiBold};
    color: ${color.secondaryFont};
`;

export const WeatherParamsWrapper = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
`;
