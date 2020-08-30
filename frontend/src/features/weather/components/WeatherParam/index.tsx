import React from 'react';

import * as S from './styles';

interface Props {
    label: string;
    value: string | number;
    valueFontSize?: string;
    subscript?: string;
}

export const WeatherParam: React.FC<Props> = ({ label, value, valueFontSize, subscript }) => (
    <S.Wrapper>
        <S.Label>{label}</S.Label>
        <S.ValueWrapper fontSize={valueFontSize}>
            {value} <S.ValueSubscript>{subscript}</S.ValueSubscript>
        </S.ValueWrapper>
    </S.Wrapper>
);
