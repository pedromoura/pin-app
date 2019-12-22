import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { light: blue[500], main: blue[500], dark: blue[200] },
  },
});

export default theme;
