import React from 'react';

import searchIcon from 'assets/icons/search.svg';

import * as S from './styles';

export const WeatherSearchComponent: React.FC = () => (
    <S.SearchWrapper>
        <S.SearchInput placeholder="Start typing" />
        <S.SearchIcon src={searchIcon} alt="Search icon" />
    </S.SearchWrapper>
);
