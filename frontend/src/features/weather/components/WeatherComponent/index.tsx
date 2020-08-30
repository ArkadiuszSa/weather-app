import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import arrowIcon from 'assets/icons/arrow.svg';

import { daytimeWeatherMock } from '../../mocks/weatherMocks';
import { setSelectedDateIndexAction } from '../../actions/weatherActions';
import {
    getSelectedDateIndexSelector,
    getIsNextDaytimeWeatherSelector,
    getIsPreviousDaytimeWeatherSelector,
} from '../../selectors/weatherSelectors';
import { WeatherSearchComponent } from '../WeatherSearch';
import { WeatherInfoComponent } from '../WeatherInfo';
import { Place } from '../../models/placeModel';
import * as S from './styles';

interface Props {
    places: Place[];
}

export const WeatherComponent: React.FC<Props> = ({ places }) => {
    const dispatch = useDispatch();
    const daytimeIndex = useSelector(getSelectedDateIndexSelector);
    const isNext = useSelector(getIsNextDaytimeWeatherSelector);
    const isPrevious = useSelector(getIsPreviousDaytimeWeatherSelector);

    return (
        <S.Wrapper>
            <WeatherSearchComponent places={places} />
            <WeatherInfoComponent weather={daytimeWeatherMock} />
            <S.BottomButtonsWrapper>
                <S.Button
                    disabled={!isPrevious}
                    onClick={() => dispatch(setSelectedDateIndexAction(daytimeIndex - 1))}
                >
                    {isPrevious && <S.BackIcon src={arrowIcon} />} Previous
                </S.Button>
                <S.Button
                    disabled={!isNext}
                    onClick={() => dispatch(setSelectedDateIndexAction(daytimeIndex + 1))}
                >
                    Next {isNext && <S.NextIcon src={arrowIcon} />}
                </S.Button>
            </S.BottomButtonsWrapper>
        </S.Wrapper>
    );
};
