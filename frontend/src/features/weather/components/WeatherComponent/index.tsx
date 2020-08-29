import React from 'react';

import arrowIcon from 'assets/icons/arrow.svg';

import { weatherMock } from '../../mocks/weatherMocks';
import { WeatherSearchComponent } from '../WeatherSearch';
import { WeatherInfoComponent } from '../WeatherInfo';
import * as S from './styles';

export const WeatherComponent: React.FC = () => (
    <S.Wrapper>
        <WeatherSearchComponent />
        <WeatherInfoComponent weather={weatherMock} />
        <S.BottomButtonsWrapper>
            <S.Button>
                <S.BackIcon src={arrowIcon} /> Previous
            </S.Button>
            <S.Button>
                Next <S.NextIcon src={arrowIcon} />
            </S.Button>
        </S.BottomButtonsWrapper>
    </S.Wrapper>
);
