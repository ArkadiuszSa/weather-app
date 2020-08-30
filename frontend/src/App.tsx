import React from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';

import { store } from 'core/store';
import { globalStyles } from 'core/globalStyles';
import { RootErrorBoundary } from 'core/RootErrorBoundary';
import WeatherContainer from 'features/weather/containers/WeatherContainer';

export const App = () => (
    <RootErrorBoundary>
        <Provider store={store}>
            <Global styles={globalStyles} />
            <WeatherContainer />
        </Provider>
    </RootErrorBoundary>
);

export default App;
