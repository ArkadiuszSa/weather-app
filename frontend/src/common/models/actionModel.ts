import { ActionType } from 'typesafe-actions';

import * as weatherActions from 'features/weather/actions/weatherActions';

const rootAction = {
    weather: weatherActions,
};

export type AppAction = ActionType<typeof rootAction>;
