import React from 'react';
import { connect } from 'react-redux';

import { getWeatherAsync } from '../actions/weatherActions';

type Props = typeof mapDispatchToProps;

const WeatherContainer: React.FC<Props> = props => {
    const onPhraseChange = (phrase: string) => {
        props.getWeatherRequestAction(phrase);
    };

    React.useEffect(() => {
        onPhraseChange('london');
    }, []);

    return <>hello</>;
};

const mapDispatchToProps = {
    getWeatherRequestAction: getWeatherAsync.request,
};

export default connect(null, mapDispatchToProps)(WeatherContainer);
