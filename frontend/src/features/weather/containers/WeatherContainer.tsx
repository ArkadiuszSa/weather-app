import React from 'react';
import { connect } from 'react-redux';

import { getWeatherAsync } from '../actions/weatherActions';
import { WeatherComponent } from 'features/weather/components/WeatherComponent';

type Props = typeof mapDispatchToProps;

const WeatherContainer: React.FC<Props> = props => {
    const onPhraseChange = (phrase: string) => {
        props.getWeatherRequestAction(phrase);
    };

    React.useEffect(() => {
        onPhraseChange('berlin');
    }, [onPhraseChange]);

    return <WeatherComponent />;
};

const mapDispatchToProps = {
    getWeatherRequestAction: getWeatherAsync.request,
};

export default connect(null, mapDispatchToProps)(WeatherContainer);
