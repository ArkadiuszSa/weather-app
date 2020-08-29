import styled from '@emotion/styled';
import { fontSize, fontWeight, color } from 'config/variablesConfig';

export const Wrapper = styled.div`
    margin: 1rem 0;
    padding: 0 1rem;
`;

export const PlaceHeader = styled.h1`
    margin: 0;
    font-size: ${fontSize.large};
    font-weight: ${fontWeight.semiBold};
`;

export const WeatherDate = styled.time`
    font-size: ${fontSize.small};
    font-weight: ${fontWeight.bold};
    color: ${color.secondaryFont};
`;

export const WeatherParamsWrapper = styled.div`
    margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1rem;
`;

export const WeatherStateNameWrapper = styled.div`
    padding-left: 1rem;
    margin-top: 1.5rem;
    border-left: 1px solid gray;
    text-transform: uppercase;
`;

export const GeneralWeatherInfoWrapper = styled.div`
    display: grid;
    margin: 2rem 0;
    grid-template-columns: 6rem 7rem;
`;
