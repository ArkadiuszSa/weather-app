import React from 'react';

import { WeatherSearchComponent } from '../WeatherSearch';
import { WeatherInfoComponent } from '../WeatherInfo';
import * as S from './styles';

export const WeatherComponent: React.FC = () => (
    <S.LayoutWrapper>
        <S.Wrapper>
            <WeatherSearchComponent />
            <WeatherInfoComponent />
        </S.Wrapper>
    </S.LayoutWrapper>
);
