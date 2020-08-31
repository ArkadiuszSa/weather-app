import styled from '@emotion/styled';

export const BottomButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding-bottom: 2rem;
`;

export const NextIcon = styled.img`
    width: 1rem;
`;

export const BackIcon = styled(NextIcon)`
    transform: scaleX(-1);
`;
