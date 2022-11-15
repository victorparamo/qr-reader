import {
  createTheme,
  responsiveFontSizes,
  Theme as MuiTheme,
} from '@mui/material/styles';

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {
    emptyValue: string;
  }
}

let theme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      main: '#3fb5a8',
    },
    secondary: {
      main: '#f5c400',
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
