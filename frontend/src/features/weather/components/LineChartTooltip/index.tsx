import React from 'react';
import { PointTooltipProps } from '@nivo/line';

import * as S from './styles';

export const LineChartTooltip: React.FC<PointTooltipProps> = ({ point }) => {
    const { data } = point;

    return (
        <S.Wrapper>
            <span>{data.x}</span>
            <span>{data.y}</span>
        </S.Wrapper>
    );
};
