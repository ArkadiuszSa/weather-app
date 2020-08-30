import React from 'react';

import { WeatherSearchComponent } from '../WeatherSearch';
import { WeatherInfoComponent } from '../WeatherInfo';
import * as S from './styles';

export const WeatherComponent: React.FC = () => (
    <S.LayoutWrapper>
        <WeatherSearchComponent />
        <WeatherInfoComponent />
    </S.LayoutWrapper>
);
