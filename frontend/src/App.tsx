import React from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';

import { store } from 'core/store';
import { globalStyles } from 'core/globalStyles';
import { RootErrorBoundary } from 'core/RootErrorBoundary';
import { WeatherComponent } from 'features/weather/components/WeatherComponent';

export const App = () => (
    <RootErrorBoundary>
        <Provider store={store}>
            <Global styles={globalStyles} />
            <WeatherComponent />
        </Provider>
    </RootErrorBoundary>
);

export default App;
