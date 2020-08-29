import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import { color } from 'config/variablesConfig';

import * as S from './styles';

const data = [
    {
        id: 'japan',
        data: [
            {
                x: 'plane',
                y: 276,
            },
            {
                x: 'helicopter',
                y: 226,
            },
            {
                x: 'boat',
                y: 94,
            },
            {
                x: 'train',
                y: 188,
            },
            {
                x: 'subway',
                y: 77,
            },
            {
                x: 'bus',
                y: 264,
            },
            {
                x: 'car',
                y: 295,
            },
            {
                x: 'moto',
                y: 69,
            },
            {
                x: 'bicycle',
                y: 18,
            },
            {
                x: 'horse',
                y: 41,
            },
            {
                x: 'skateboard',
                y: 269,
            },
            {
                x: 'others',
                y: 282,
            },
        ],
    },
];

export const WeatherLineChart = () => (
    <S.Wrapper>
        <ResponsiveLine
            data={data}
            margin={{ right: 10, top: 10, bottom: 10, left: 10 }}
            colors={color.primary}
            pointSize={10}
            pointColor="red"
            pointBorderWidth={2}
            pointBorderColor="red"
            pointLabelYOffset={-12}
            useMesh={true}
            enableGridX={false}
            enableGridY={false}
            enableCrosshair={false}
            axisBottom={null}
            axisLeft={null}
        />
    </S.Wrapper>
);
