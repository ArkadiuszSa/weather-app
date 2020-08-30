import React from 'react';
import { useDispatch } from 'react-redux';

import searchIcon from 'assets/icons/search.svg';

import * as S from './styles';
import { Place } from '../../models/placeModel';
import { searchPlacesByPhraseAsync, getWeatherAsync } from '../../actions/weatherActions';

interface Props {
    places: Place[];
}

export const WeatherSearchComponent: React.FC<Props> = props => {
    const [isFocusOnSearch, setIsFocusOnSearch] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const dispatch = useDispatch();

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchValue(value);
        dispatch(searchPlacesByPhraseAsync.request(value));
    };

    const onOptionClick = ({ weatherId, name }: Place) => {
        setSearchValue(name);
        setIsFocusOnSearch(false);
        dispatch(getWeatherAsync.request(weatherId));
    };

    return (
        <>
            <S.SearchWrapper>
                <S.SearchInput
                    placeholder="Start typing"
                    value={searchValue}
                    onChange={onSearchChange}
                    onFocus={() => setIsFocusOnSearch(true)}
                />
                <S.SearchIcon src={searchIcon} alt="Search icon" />
            </S.SearchWrapper>
            {isFocusOnSearch && (
                <S.SearchOptionsWrapper>
                    {props.places.map(place => (
                        <S.SearchOptionButton key={place.id} onClick={() => onOptionClick(place)}>
                            {place.name}
                        </S.SearchOptionButton>
                    ))}
                </S.SearchOptionsWrapper>
            )}
        </>
    );
};
