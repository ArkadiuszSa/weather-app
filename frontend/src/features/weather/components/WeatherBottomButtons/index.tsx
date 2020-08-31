import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import arrowIcon from 'assets/icons/arrow.svg';
import { Button } from 'common/styled/Button';

import { setSelectedDateIndexAction } from '../../actions/weatherActions';
import {
    getSelectedDateIndexSelector,
    getIsNextDaytimeWeatherSelector,
    getIsPreviousDaytimeWeatherSelector,
} from '../../selectors/weatherSelectors';
import * as S from './styles';

export const WeatherBottomButtons: React.FC = () => {
    const dispatch = useDispatch();
    const daytimeIndex = useSelector(getSelectedDateIndexSelector);
    const isNext = useSelector(getIsNextDaytimeWeatherSelector);
    const isPrevious = useSelector(getIsPreviousDaytimeWeatherSelector);

    return (
        <S.BottomButtonsWrapper>
            <Button
                disabled={!isPrevious}
                onClick={() => dispatch(setSelectedDateIndexAction(daytimeIndex - 1))}
            >
                {isPrevious && <S.BackIcon src={arrowIcon} />} Previous
            </Button>
            <Button
                disabled={!isNext}
                onClick={() => dispatch(setSelectedDateIndexAction(daytimeIndex + 1))}
            >
                Next {isNext && <S.NextIcon src={arrowIcon} />}
            </Button>
        </S.BottomButtonsWrapper>
    );
};
