import React from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/core';

import { store } from 'core/store';
import { globalStyles } from 'core/globalStyles';
import WeatherContainer from 'features/weather/containers/WeatherContainer';

export const App = () => (
    <Provider store={store}>
        <Global styles={globalStyles} />
        <WeatherContainer />
    </Provider>
);

export default App;
