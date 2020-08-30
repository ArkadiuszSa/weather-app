import React from 'react';
import { connect } from 'react-redux';

import { getWeatherAsync, searchPlacesByPhraseAsync } from '../actions/weatherActions';
import { WeatherComponent } from '../components/WeatherComponent';

type Props = typeof mapDispatchToProps;

const WeatherContainer: React.FC<Props> = ({
    searchPlacesByPhraseRequestAction,
    getWeatherRequestAction,
}) => {
    const onPhraseChange = React.useCallback(
        (phrase: string) => {
            searchPlacesByPhraseRequestAction(phrase);
            getWeatherRequestAction(638242);
        },
        [searchPlacesByPhraseRequestAction, getWeatherRequestAction],
    );

    React.useEffect(() => {
        onPhraseChange('be');
    }, [onPhraseChange]);

    return <WeatherComponent />;
};

const mapDispatchToProps = {
    searchPlacesByPhraseRequestAction: searchPlacesByPhraseAsync.request,
    getWeatherRequestAction: getWeatherAsync.request,
};

export default connect(null, mapDispatchToProps)(WeatherContainer);
