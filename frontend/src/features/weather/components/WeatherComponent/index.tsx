import React from 'react';

import { weatherMock } from '../../mocks/weatherMocks';
import { WeatherSearchComponent } from '../WeatherSearch';
import { WeatherInfoComponent } from '../WeatherInfo';
import * as S from './styles';

export const WeatherComponent: React.FC = () => (
    <S.Wrapper>
        <WeatherSearchComponent />
        <WeatherInfoComponent weather={weatherMock} />
    </S.Wrapper>
);
