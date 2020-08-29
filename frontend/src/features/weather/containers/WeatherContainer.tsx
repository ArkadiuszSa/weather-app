import React from 'react';
import { connect } from 'react-redux';

import { getWeatherAsync } from '../actions/weatherActions';
import { WeatherComponent } from '../components/WeatherComponent';

type Props = typeof mapDispatchToProps;

const WeatherContainer: React.FC<Props> = ({ getWeatherRequestAction }) => {
    const onPhraseChange = React.useCallback(
        (phrase: string) => {
            getWeatherRequestAction(phrase);
        },
        [getWeatherRequestAction],
    );

    React.useEffect(() => {
        onPhraseChange('berlin');
    }, [onPhraseChange]);

    return <WeatherComponent />;
};

const mapDispatchToProps = {
    getWeatherRequestAction: getWeatherAsync.request,
};

export default connect(null, mapDispatchToProps)(WeatherContainer);
