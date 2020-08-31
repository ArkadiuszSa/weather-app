import React from 'react';
import { useSelector } from 'react-redux';

import { getNetworkErrorSelector } from '../../selectors/weatherSelectors';
import { ErrorInfo } from 'common/components/ErrorInfo';

import { WeatherSearchComponent } from '../WeatherSearch';
import { WeatherInfoComponent } from '../WeatherInfo';
import * as S from './styles';

export const WeatherComponent: React.FC = () => {
    const networkError = useSelector(getNetworkErrorSelector);

    return (
        <>
            {networkError ? (
                <ErrorInfo title={networkError?.code?.toString()} />
            ) : (
                <S.LayoutWrapper>
                    <WeatherSearchComponent />
                    <WeatherInfoComponent />
                </S.LayoutWrapper>
            )}
        </>
    );
};
