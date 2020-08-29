import { css } from '@emotion/core';

import { fontFamily, color } from 'config/variablesConfig';

export const globalStyles = css`
    body {
        font-family: ${fontFamily.primary};
        color: ${color.primaryFont};
        margin: 0;
    }
`;
