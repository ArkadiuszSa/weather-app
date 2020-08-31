export const color = {
    primary: '#77BCEE',
    primaryFont: '#000000',
    secondaryFont: '#9E9E9E',
    alternativeFont: '#FFFFFF',
    chartPoint: '#FF7575',
    inactive: '#E8E8E8',
    tooltipBackground: '#FAFAFA',
};

export const fontSize = {
    verySmall: '0.6rem',
    small: '0.8rem',
    normal: '1.2rem',
    big: '1.4rem',
    huge: '2.5rem',
    large: '3rem',
};

export const fontWeight = {
    regular: '400',
    semiBold: '500',
    bold: '700',
};

export const fontFamily = {
    primary: "'Open Sans', sans-serif",
};

export const searchShadow = 'inset 0px -2px 9px 0px rgb(0 0 0 / 15%)';
export const searchPanelShadow = '4px 4px 15px rgba(86, 82, 108, 0.2)';

export const breakpointsValues = {
    xs: 480,
    sm: 576,
    md: 675,
    lg: 920,
    xl: 1075,
};

const mediaQ = (size: number): string => `@media only screen and (min-width: ${size}px)`;

export const breakpoints = {
    sm: mediaQ(breakpointsValues.sm),
    md: mediaQ(breakpointsValues.md),
    lg: mediaQ(breakpointsValues.lg),
    xl: mediaQ(breakpointsValues.xl),
};
