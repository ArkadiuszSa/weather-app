import styled from '@emotion/styled';

interface IconProps {
    width: number;
}

export const Icon = styled.img<IconProps>`
    width: ${props => `${props.width}rem`};
`;
