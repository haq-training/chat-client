import { pxToRem, responsiveFontSizes } from '../utils/getFontValue';

// ----------------------------------------------------------------------

const typography = () => ({
  fontFamily: 'NotoSans',
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(32),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 44, md: 50, lg: 56 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    // lineHeight: 1.5,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.3,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 1.3,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 14, md: 14, lg: 14 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: pxToRem(12),
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 1.2,
    fontSize: pxToRem(12),
  },
  body1: {
    lineHeight: 1.2,
    fontSize: pxToRem(12),
  },
  body2: {
    lineHeight: 1.2,
    fontSize: pxToRem(12),
  },
  caption: {
    lineHeight: 1.2,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: pxToRem(11),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 1.1,
    fontSize: pxToRem(12),
    textTransform: 'capitalize',
  },
});

export default typography;
