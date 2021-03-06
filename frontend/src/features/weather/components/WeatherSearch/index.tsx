import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoonLoader from 'react-spinners/MoonLoader';

import searchIcon from 'assets/icons/search.svg';

import { Place } from '../../models/placeModel';
import { searchPlacesByPhraseAsync, getWeatherAsync } from '../../actions/weatherActions';
import { getPlacesSelector, getIsFetchingPlacesSelector } from '../../selectors/weatherSelectors';
import * as S from './styles';

export const WeatherSearchComponent: React.FC = () => {
    const [isFocusOnSearch, setIsFocusOnSearch] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const places = useSelector(getPlacesSelector);
    const isFetchingPlaces = useSelector(getIsFetchingPlacesSelector);

    const dispatch = useDispatch();

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchValue(value);
        if (value) {
            dispatch(searchPlacesByPhraseAsync.request(value));
        }
    };

    const onOptionClick = ({ weatherId, name }: Place) => {
        setSearchValue(name);
        setIsFocusOnSearch(false);
        dispatch(getWeatherAsync.request(weatherId));
    };

    return (
        <S.Wrapper>
            <S.SearchWrapper>
                <S.LoaderWrapper>{isFetchingPlaces && <MoonLoader size={20} />}</S.LoaderWrapper>
                <S.SearchInput
                    placeholder="Start typing"
                    value={searchValue}
                    onChange={onSearchChange}
                    onFocus={() => setIsFocusOnSearch(true)}
                />
                <S.SearchIcon width={1.5} src={searchIcon} alt="Search icon" />
            </S.SearchWrapper>
            {isFocusOnSearch && (
                <S.SearchOptionsWrapper>
                    {places.map(place => (
                        <S.SearchOptionButton key={place.id} onClick={() => onOptionClick(place)}>
                            {place.name}
                        </S.SearchOptionButton>
                    ))}
                    {places.length === 0 && <S.NoResultsSpan>No results</S.NoResultsSpan>}
                </S.SearchOptionsWrapper>
            )}
        </S.Wrapper>
    );
};
