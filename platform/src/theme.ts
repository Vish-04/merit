'use client';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    badge: Palette['primary'];
  }
  interface PaletteOptions {
    badge?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    primary: {
      main: '#CFE795',
    },
    secondary: {
      main: '#A7D3A6',
    },
    text: {
      primary: '#AFAFAF',
      secondary: '#6F6F6F',
    },
    badge: {
      main: '#F9D664',
    },
  },
});

export default theme;
