import React from 'react';

import * as S from './styles';

interface Props {
    label: string;
    value: string;
    valueFontSize?: string;
}

export const WeatherParam: React.FC<Props> = ({ label, value, valueFontSize }) => (
    <S.Wrapper>
        <S.Label>{label}</S.Label>
        <S.ValueSpan fontSize={valueFontSize}>{value}</S.ValueSpan>
    </S.Wrapper>
);
