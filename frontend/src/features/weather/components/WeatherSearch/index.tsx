import React from 'react';

import searchIcon from 'assets/icons/search.svg';

import * as S from './styles';
import { Place } from '../../models/placeModel';

interface Props {
    places: Place[];
}

export const WeatherSearchComponent: React.FC<Props> = props => (
    <>
        <S.SearchWrapper>
            <S.SearchInput placeholder="Start typing" />
            <S.SearchIcon src={searchIcon} alt="Search icon" />
        </S.SearchWrapper>
        {props.places.map(place => (
            <S.SearchOption key={place.id}>{place.name}</S.SearchOption>
        ))}
    </>
);
