import React from 'react';

import { weatherMock } from '../../mocks/weatherMocks';
import { WeatherSearchComponent } from '../WeatherSearch';
import { WeatherInfoComponent } from '../WeatherInfo';
import * as S from './styles';
import { WeatherLineChart } from '../WeatherLineChart';

export const WeatherComponent: React.FC = () => (
    <S.Wrapper>
        <WeatherSearchComponent />
        <WeatherInfoComponent weather={weatherMock} />
        <WeatherLineChart />
    </S.Wrapper>
);
