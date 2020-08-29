import React from 'react';
import { Provider } from 'react-redux';

import { store } from 'core/store';
import WeatherContainer from 'features/weather/containers/WeatherContainer';

export const App = () => (
    <Provider store={store}>
        <WeatherContainer />
    </Provider>
);

export default App;
