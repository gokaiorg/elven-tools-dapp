import { extendTheme, theme as originTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1560px',
});

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        minHeight: '100vh',
        overflowX: 'hidden',
        bgColor: '#dadada',
        bgSize: '700px',
        backgroundPositionX: '150px',
        color: 'elvenTools.white',
      },
      '*': {
        '&::-webkit-scrollbar': {
          width: 1.5,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'elvenTools.dark.base',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'elvenTools.light',
          borderRadius: 1.5,
        },
        scrollbarWidth: 'auto',
        scrollbarColor: 'elvenTools.light elvenTools.dark.base',
      },
    },
  },
  fonts: {
    heading: 'McLaren, sans-serif',
    body: 'DM Sans, sans-serif',
  },
  colors: {
    elvenTools: {
      bgStripes: '#2c3440',
      shadowColor: '#141414',
      dark: {
        lighter: '#3c4757',
        base: '#222831',
        darker: '#1d222a',
      },
      light: '#FAFFFD',
      white: '#ffffff',
      color1: {
        lighter: '#59a1ea',
        base: '#3C91E6',
        darker: '#1c7bda',
      },
      color2: {
        lighter: '#fff',
        base: '#000',
        darker: '#0381e6',
      },
      color3: {
        lighter: '#fb9567',
        base: '#212529',
        darker: '#EF1E24',
      },
    },
  },
  components: {
    Alert: {
      variants: {
        subtle: {
          container: {
            bg: 'elvenTools.dark.lighter',
          },
        },
      },
    },
  },
  ...breakpoints,
});
