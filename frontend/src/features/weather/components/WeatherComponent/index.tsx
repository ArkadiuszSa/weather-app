import React from 'react';

import * as S from './styles';

import { WeatherSearchComponent } from '../WeatherSearch';
import { WeatherInfoComponent } from '../WeatherInfo';

export const WeatherComponent: React.FC = () => (
    <S.Wrapper>
        <WeatherSearchComponent />
        <WeatherInfoComponent />
    </S.Wrapper>
);
