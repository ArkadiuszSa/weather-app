import React from 'react';
import { useSelector } from 'react-redux';

import { WeatherSearchComponent } from '../WeatherSearch';
import { WeatherInfoComponent } from '../WeatherInfo';
import * as S from './styles';
import { getNetworkErrorSelector } from 'features/weather/selectors/weatherSelectors';
import { ErrorInfo } from 'common/components/ErrorInfo';

export const WeatherComponent: React.FC = () => {
    const networkError = useSelector(getNetworkErrorSelector);

    return (
        <>
            {networkError ? (
                <ErrorInfo title={networkError.code.toString()} />
            ) : (
                <S.LayoutWrapper>
                    <WeatherSearchComponent />
                    <WeatherInfoComponent />
                </S.LayoutWrapper>
            )}
        </>
    );
};
