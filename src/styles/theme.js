import {createMuiTheme} from '@material-ui/core/styles';

const myTheme = createMuiTheme({
    palette: {
        primary: {
          main: '#43C099',
        },
        secondary: {
          main: '#7AF3CA',
        },
        chip: {
          color: '#C2C3C6',
          expandIcon: {
            background: '#808183',
            color: '#FFFFFF',
          },
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
        }
    },
})

export default myTheme;