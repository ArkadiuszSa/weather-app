import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getWeatherAsync, searchPlacesByPhraseAsync } from '../actions/weatherActions';
import { WeatherComponent } from '../components/WeatherComponent';
import { getPlacesSelector } from '../selectors/weatherSelectors';

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const WeatherContainer: React.FC<Props> = ({
    searchPlacesByPhraseRequestAction,
    getWeatherRequestAction,
    ...props
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

    return <WeatherComponent places={props.places} />;
};

const mapStateToProps = createSelector(getPlacesSelector, places => ({
    places,
}));

const mapDispatchToProps = {
    searchPlacesByPhraseRequestAction: searchPlacesByPhraseAsync.request,
    getWeatherRequestAction: getWeatherAsync.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
